/**
 * Vercel Node.js entry point for the MALAKY worker.
 *
 * malaky.js is a Cloudflare Worker (export default { fetch(request, env) }).
 * Vercel has no such convention, so this function adapts Vercel's (req, res)
 * signature to the Worker's Request/Response signature and supplies `env`.
 *
 * Required environment variables (Project Settings -> Environment Variables):
 *   CLOUDFLARE_ACCOUNT_ID     - Cloudflare account id
 *   CLOUDFLARE_D1_DATABASE_ID - D1 database UUID
 *   CLOUDFLARE_API_TOKEN      - token with D1 Read + D1 Write
 *   BOOTSTRAP_KEY             - first-run admin bootstrap key (optional)
 *   SESSION_SECRET            - session signing secret (recommended)
 *
 * Routing: see vercel.json. Every request is rewritten to this function with
 * the original path forwarded in the `__oh_path` query parameter, because a
 * rewrite otherwise replaces the path that the worker reads.
 */

import worker from '../malaky.js';
import { createD1Rest } from '../lib/d1-rest.js';

// Vercel consumes the request stream when the body parser is on; the Worker
// needs the raw stream to build its own Request, so opt out.
export const config = { api: { bodyParser: false } };

const SKIP_REQUEST_HEADERS = new Set(['host', 'connection', 'content-length', 'transfer-encoding', 'keep-alive', 'upgrade']);

function buildEnv() {
  return {
    DB: createD1Rest({
      accountId: process.env.CLOUDFLARE_ACCOUNT_ID,
      databaseId: process.env.CLOUDFLARE_D1_DATABASE_ID,
      apiToken: process.env.CLOUDFLARE_API_TOKEN,
      apiBase: process.env.CLOUDFLARE_API_BASE,
    }),
    BOOTSTRAP_KEY: process.env.BOOTSTRAP_KEY,
    SESSION_SECRET: process.env.SESSION_SECRET,
  };
}

async function readBody(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  return chunks.length ? Buffer.concat(chunks) : undefined;
}

function toWebRequest(req) {
  const proto = req.headers['x-forwarded-proto'] || 'https';
  const host = req.headers['x-forwarded-host'] || req.headers['host'] || 'localhost';
  const parsed = new URL(req.url, `${proto}://${host}`);

  const forwardedPath = parsed.searchParams.get('__oh_path');
  const pathname = forwardedPath !== null ? (forwardedPath || '/') : parsed.pathname;
  if (forwardedPath !== null) parsed.searchParams.delete('__oh_path');
  const query = parsed.searchParams.toString();

  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (SKIP_REQUEST_HEADERS.has(key.toLowerCase()) || value === undefined) continue;
    if (Array.isArray(value)) value.forEach((v) => headers.append(key, v));
    else headers.set(key, value);
  }

  const method = (req.method || 'GET').toUpperCase();
  return { url: `${proto}://${host}${pathname}${query ? '?' + query : ''}`, method, headers };
}

export default async function handler(req, res) {
  try {
    const { url, method, headers } = toWebRequest(req);
    const body = method === 'GET' || method === 'HEAD' ? undefined : await readBody(req);

    const response = await worker.fetch(new Request(url, { method, headers, body }), buildEnv());

    res.statusCode = response.status;
    response.headers.forEach((value, key) => {
      if (key.toLowerCase() === 'set-cookie') return;
      res.setHeader(key, value);
    });
    const cookies = typeof response.headers.getSetCookie === 'function' ? response.headers.getSetCookie() : [];
    if (cookies.length) res.setHeader('Set-Cookie', cookies);

    res.end(Buffer.from(await response.arrayBuffer()));
  } catch (err) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify({ error: (err && err.message) || 'خطأ في الخادم' }));
  }
}
