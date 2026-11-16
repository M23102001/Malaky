/**
 * Local development / self-hosting server.
 *
 * Serves the same handler used on Vercel, but over a plain Node HTTP server and
 * with a persistent SQLite file, so the database is stored locally on disk and
 * survives restarts.
 *
 * Usage:
 *   node server.mjs
 *   PORT=8080 MALAKY_DB_PATH=./malaky.db SESSION_SECRET=... node server.mjs
 */

import http from 'node:http';
import handler from './api/index.js';

const port = Number(process.env.PORT || 3000);

const server = http.createServer((req, res) => {
  Promise.resolve(handler(req, res)).catch((err) => {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify({ error: (err && err.message) || 'خطأ في الخادم' }));
  });
});

server.listen(port, () => {
  const dbPath = process.env.MALAKY_DB_PATH || '/tmp/malaky.db';
  console.log(`مَلَكِي يعمل على http://localhost:${port}`);
  console.log(`قاعدة البيانات: ${dbPath}`);
});
