/**
 * End-to-end test for the Vercel adapter.
 *
 * Boots a local HTTP server that speaks the Cloudflare D1 REST protocol on top
 * of a real SQLite database (node:sqlite), points the adapter at it, and drives
 * the Vercel handler through genuine HTTP requests. No application logic is
 * mocked: the real malaky.js worker and the real D1 SQL surface are exercised.
 */

import http from 'node:http';
import { DatabaseSync } from 'node:sqlite';
import assert from 'node:assert/strict';

import handler from '../api/index.js';

const db = new DatabaseSync(':memory:');

function runQuery({ sql, params = [] }) {
  const stmt = db.prepare(sql);
  const rows = stmt.all(...params);
  const meta = {
    changes: db.prepare('SELECT changes() AS c').get().c,
    last_row_id: db.prepare('SELECT last_insert_rowid() AS id').get().id,
  };
  return { results: rows, meta, success: true };
}

const d1Server = http.createServer((req, res) => {
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

// Minimal Vercel (req, res) doubles, driven through the real handler.
function callHandler({ method = 'GET', url, headers = {}, body }) {
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

async function main() {
  await new Promise((r) => d1Server.listen(0, r));
  const { port } = d1Server.address();
  process.env.CLOUDFLARE_API_BASE = `http://127.0.0.1:${port}`;
  process.env.CLOUDFLARE_ACCOUNT_ID = 'acct';
  process.env.CLOUDFLARE_D1_DATABASE_ID = 'db';
  process.env.CLOUDFLARE_API_TOKEN = 'token';
  process.env.BOOTSTRAP_KEY = 'boot-secret';
  process.env.SESSION_SECRET = 'session-secret';

  const home = await callHandler({ url: 'http://localhost/?__oh_path=/' });
  assert.equal(home.status, 200, 'root should return 200');
  assert.match(home.body, /<!DOCTYPE html>/i, 'root should return the app HTML');

  const init = await callHandler({ url: 'http://localhost/?__oh_path=/api/init-status' });
  assert.equal(init.status, 200);
  const initJson = JSON.parse(init.body);
  assert.equal(initJson.dbConnected, true, 'db should be connected');
  assert.equal(initJson.hasUsers, false, 'fresh db should have no users');

  const boot = await callHandler({
    method: 'POST',
    url: 'http://localhost/?__oh_path=/api/bootstrap',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ bootstrap_key: 'boot-secret', full_name: 'Admin', username: 'admin', password: 'secret123' }),
  });
  assert.equal(boot.status, 200, `bootstrap failed: ${boot.body}`);
  assert.equal(JSON.parse(boot.body).success, true);

  const login = await callHandler({
    method: 'POST',
    url: 'http://localhost/?__oh_path=/api/auth/login',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ username: 'admin', password: 'secret123' }),
  });
  assert.equal(login.status, 200, `login failed: ${login.body}`);
  const loginJson = JSON.parse(login.body);
  assert.equal(loginJson.success, true);
  const cookie = loginJson.token ? `malaky_session=${encodeURIComponent(loginJson.token)}` : '';

  const products = await callHandler({ url: 'http://localhost/?__oh_path=/api/products', headers: { cookie } });
  assert.equal(products.status, 200, `products failed: ${products.body}`);

  const report = await callHandler({
    url: 'http://localhost/?__oh_path=/api/reports/13&from=2026-01-01&to=2026-12-31',
    headers: { cookie },
  });
  assert.equal(report.status, 200, `report failed: ${report.body}`);

  delete process.env.CLOUDFLARE_API_TOKEN;
  const noCreds = await callHandler({ url: 'http://localhost/?__oh_path=/api/init-status' });
  assert.equal(noCreds.status, 200);
  const noCredsJson = JSON.parse(noCreds.body);
  assert.equal(noCredsJson.dbConnected, false);
  assert.match(noCredsJson.dbError, /CLOUDFLARE_ACCOUNT_ID/);

  d1Server.close();
  console.log('All end-to-end tests passed.');
}

main().catch((err) => {
  console.error('TEST FAILED:', err.message);
  process.exit(1);
});
