/**
 * End-to-end test for the Vercel adapter.
 *
 * Drives the real Vercel handler through genuine HTTP requests against a real
 * SQLite database. Nothing in the application is mocked: the actual malaky.js
 * worker and the actual SQL run.
 *
 * Two backends are covered:
 *   - sqlite (default): local file via node:sqlite
 *   - d1: Cloudflare D1 REST protocol, served here by a local SQLite instance
 */

import http from 'node:http';
import { DatabaseSync } from 'node:sqlite';
import { rmSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import assert from 'node:assert/strict';

process.env.BOOTSTRAP_KEY = 'boot-secret';
process.env.SESSION_SECRET = 'session-secret';

// malaky.js keeps schema state in module scope, so each backend runs in its
// own process to start from a clean slate.
if (!process.argv[2]) {
  for (const scenario of ['sqlite', 'd1', 'noconfig']) {
    const run = spawnSync(process.execPath, [new URL(import.meta.url).pathname, scenario], { stdio: 'inherit' });
    if (run.status !== 0) process.exit(run.status ?? 1);
  }
  console.log('\nAll end-to-end tests passed.');
  process.exit(0);
}

// Minimal Vercel (req, res) doubles, driven through the real handler.
function callHandler(handler, { method = 'GET', url, headers = {}, body }) {
  return new Promise((resolve, reject) => {
    const req = new http.IncomingMessage();
    const res = new http.ServerResponse(req);
    const chunks = [];
    res.write = (chunk) => { if (chunk) chunks.push(Buffer.from(chunk)); return true; };
    res.end = (chunk) => {
      if (chunk) chunks.push(Buffer.from(chunk));
      resolve({ status: res.statusCode, headers: res.getHeaders(), body: Buffer.concat(chunks).toString() });
      return res;
    };
    req.method = method;
    req.url = url;
    req.headers = headers;
    req[Symbol.asyncIterator] = async function* () {
      if (body !== undefined) yield Buffer.from(body);
    };
    Promise.resolve(handler(req, res)).catch(reject);
  });
}

async function loadHandler() {
  return (await import('../api/index.js')).default;
}

async function exercise(name, handler) {
  const home = await callHandler(handler, { url: 'http://localhost/?__oh_path=/' });
  assert.equal(home.status, 200, `${name}: root should return 200`);
  assert.match(home.body, /<!DOCTYPE html>/i, `${name}: root should return the app HTML`);

  const init = await callHandler(handler, { url: 'http://localhost/?__oh_path=/api/init-status' });
  assert.equal(init.status, 200, `${name}: init-status status`);
  const initJson = JSON.parse(init.body);
  assert.equal(initJson.dbConnected, true, `${name}: db should be connected`);
  assert.equal(initJson.hasUsers, false, `${name}: fresh db should have no users`);

  const boot = await callHandler(handler, {
    method: 'POST',
    url: 'http://localhost/?__oh_path=/api/bootstrap',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ bootstrap_key: 'boot-secret', full_name: 'Admin', username: 'admin', password: 'secret123' }),
  });
  assert.equal(boot.status, 200, `${name}: bootstrap failed: ${boot.body}`);
  assert.equal(JSON.parse(boot.body).success, true, `${name}: bootstrap success`);

  const login = await callHandler(handler, {
    method: 'POST',
    url: 'http://localhost/?__oh_path=/api/auth/login',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ username: 'admin', password: 'secret123' }),
  });
  assert.equal(login.status, 200, `${name}: login failed: ${login.body}`);
  const loginJson = JSON.parse(login.body);
  assert.equal(loginJson.success, true, `${name}: login success`);
  const cookie = `malaky_session=${encodeURIComponent(loginJson.token)}`;

  const products = await callHandler(handler, { url: 'http://localhost/?__oh_path=/api/products', headers: { cookie } });
  assert.equal(products.status, 200, `${name}: products failed: ${products.body}`);

  const created = await callHandler(handler, {
    method: 'POST',
    url: 'http://localhost/?__oh_path=/api/products',
    headers: { cookie, 'content-type': 'application/json' },
    body: JSON.stringify({ name: 'بن تجريبي', sku: 'TEST-1', manual_final_cost_kg_piasters: 1000, profit_percent_1: 20, sale_price_1_piasters: 1200 }),
  });
  assert.equal(created.status, 200, `${name}: create product failed: ${created.body}`);

  const afterCreate = await callHandler(handler, { url: 'http://localhost/?__oh_path=/api/products', headers: { cookie } });
  assert.match(afterCreate.body, /بن تجريبي/, `${name}: created product should be listed`);

  const report = await callHandler(handler, {
    url: 'http://localhost/?__oh_path=/api/reports/13&from=2026-01-01&to=2026-12-31',
    headers: { cookie },
  });
  assert.equal(report.status, 200, `${name}: report failed: ${report.body}`);
}

async function testLocalSqlite() {
  const dbPath = '/tmp/malaky-test.db';
  rmSync(dbPath, { force: true });
  process.env.MALAKY_DB_BACKEND = 'sqlite';
  process.env.MALAKY_DB_PATH = dbPath;

  await exercise('sqlite', await loadHandler());

  const onDisk = new DatabaseSync(dbPath);
  const tables = onDisk.prepare("SELECT name FROM sqlite_master WHERE type='table'").all().map((r) => r.name);
  assert.ok(tables.includes('users') && tables.includes('coffee_products'), 'sqlite: schema should be created on disk');
  assert.equal(onDisk.prepare('SELECT COUNT(*) AS c FROM users').get().c, 1, 'sqlite: admin user should be persisted');
  assert.equal(onDisk.prepare('SELECT name FROM coffee_products').get().name, 'بن تجريبي', 'sqlite: product should be persisted');
  onDisk.close();
  console.log(`sqlite backend: OK (data persisted to ${dbPath})`);
}

async function testD1Rest() {
  const sqlite = new DatabaseSync(':memory:');
  const runQuery = ({ sql, params = [] }) => {
    const rows = sqlite.prepare(sql).all(...params.map((p) => (p === undefined ? null : p)));
    return {
      results: rows,
      meta: { changes: sqlite.prepare('SELECT changes() AS c').get().c, last_row_id: sqlite.prepare('SELECT last_insert_rowid() AS i').get().i },
      success: true,
    };
  };
  const server = http.createServer((req, res) => {
    const chunks = [];
    req.on('data', (c) => chunks.push(c));
    req.on('end', () => {
      const body = JSON.parse(Buffer.concat(chunks).toString() || '{}');
      try {
        const result = body.batch ? body.batch.map(runQuery) : [runQuery(body)];
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ result, success: true, errors: [], messages: [] }));
      } catch (err) {
        res.statusCode = 400;
        res.end(JSON.stringify({ result: [], success: false, errors: [{ code: 7500, message: err.message }], messages: [] }));
      }
    });
  });
  await new Promise((r) => server.listen(0, r));

  process.env.MALAKY_DB_BACKEND = 'd1';
  process.env.CLOUDFLARE_API_BASE = `http://127.0.0.1:${server.address().port}`;
  process.env.CLOUDFLARE_ACCOUNT_ID = 'acct';
  process.env.CLOUDFLARE_D1_DATABASE_ID = 'db';
  process.env.CLOUDFLARE_API_TOKEN = 'token';

  await exercise('d1', await loadHandler());
  server.close();
  console.log('d1 rest backend: OK');
}

async function testMissingCredentials() {
  process.env.MALAKY_DB_BACKEND = 'd1';
  delete process.env.CLOUDFLARE_API_TOKEN;
  const handler = await loadHandler();
  const res = await callHandler(handler, { url: 'http://localhost/?__oh_path=/api/init-status' });
  assert.equal(res.status, 200);
  const body = JSON.parse(res.body);
  assert.equal(body.dbConnected, false);
  assert.match(body.dbError, /CLOUDFLARE_ACCOUNT_ID/);
  console.log('missing credentials: OK (clear error reported)');
}

const scenarios = { sqlite: testLocalSqlite, d1: testD1Rest, noconfig: testMissingCredentials };

scenarios[process.argv[2]]().catch((err) => {
  console.error('TEST FAILED:', err.message);
  process.exit(1);
});
