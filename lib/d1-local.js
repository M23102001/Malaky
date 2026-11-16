/**
 * Local SQLite adapter.
 *
 * Implements the same surface as the Cloudflare D1 binding the application
 * expects (prepare/bind/first/all/run and batch) on top of node:sqlite, so the
 * database is stored in a local file instead of on Cloudflare.
 *
 * Requires Node.js >= 24 (node:sqlite is unflagged there; Node 20/22 need
 * --experimental-sqlite).
 */

import { DatabaseSync } from 'node:sqlite';
import { mkdirSync } from 'node:fs';
import { dirname } from 'node:path';

function normalizeParams(params) {
  return params.map((p) => (p === undefined ? null : p));
}

class LocalStatement {
  constructor(execute, sql, params) {
    this._execute = execute;
    this.sql = sql;
    this.params = params;
  }

  bind(...params) {
    return new LocalStatement(this._execute, this.sql, normalizeParams(params));
  }

  async first(column) {
    const { rows } = await this._execute(this.sql, this.params);
    const row = rows.length ? rows[0] : null;
    if (row == null) return null;
    return column === undefined ? row : row[column];
  }

  async all() {
    const { rows } = await this._execute(this.sql, this.params);
    return { results: rows, meta: {}, success: true };
  }

  async run() {
    const { rows, meta } = await this._execute(this.sql, this.params);
    return { results: rows, meta, success: true };
  }
}

export function createD1Local({ path = 'malaky.db' } = {}) {
  if (path !== ':memory:') mkdirSync(dirname(path), { recursive: true });
  const db = new DatabaseSync(path);
  db.exec('PRAGMA foreign_keys = ON');

  const statements = {
    totalChanges: db.prepare('SELECT total_changes() AS c'),
    changes: db.prepare('SELECT changes() AS c'),
    lastRowId: db.prepare('SELECT last_insert_rowid() AS i'),
  };

  const execute = async (sql, params) => {
    const before = statements.totalChanges.get().c;
    const stmt = db.prepare(sql);
    const rows = stmt.all(...params);
    const meta = {
      changes: statements.totalChanges.get().c - before,
      last_row_id: statements.lastRowId.get().i,
    };
    return { rows, meta };
  };

  return {
    prepare(sql) {
      return new LocalStatement(execute, sql, []);
    },
    async batch(list) {
      const out = [];
      for (const s of list) {
        const { rows, meta } = await execute(s.sql, s.params || []);
        out.push({ results: rows, meta, success: true });
      }
      return out;
    },
    async exec(sql) {
      db.exec(sql);
      return { count: 0, duration: 0 };
    },
    close() {
      db.close();
    },
  };
}
