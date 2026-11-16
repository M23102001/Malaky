/**
 * Cloudflare D1 REST adapter.
 *
 * The application was written against the Cloudflare Workers D1 binding
 * (env.DB.prepare(...).bind(...).first()/.all()/.run() and env.DB.batch([...])).
 * Vercel has no D1 binding, so this module exposes the same surface backed by
 * the D1 HTTP API instead:
 *
 *   POST /accounts/{account_id}/d1/database/{database_id}/query
 *
 * This keeps malaky.js (and every SQL statement in it) unchanged.
 */

const MISSING_CREDENTIALS_MESSAGE =
  'Cloudflare D1 is not configured. Set CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_D1_DATABASE_ID and CLOUDFLARE_API_TOKEN.';

function makeUnavailableDb() {
  const fail = () => {
    throw new Error(MISSING_CREDENTIALS_MESSAGE);
  };
  const statement = { bind: () => statement, first: fail, all: fail, run: fail };
  return { prepare: () => statement, batch: fail, exec: fail };
}

class D1Statement {
  constructor(execute, sql, params) {
    this._execute = execute;
    this.sql = sql;
    this.params = params;
  }

  bind(...params) {
    return new D1Statement(this._execute, this.sql, params);
  }

  async first(column) {
    const result = await this._execute({ sql: this.sql, params: this.params });
    const rows = result?.results || [];
    const row = rows.length ? rows[0] : null;
    if (row == null) return null;
    return column === undefined ? row : row[column];
  }

  async all() {
    const result = await this._execute({ sql: this.sql, params: this.params });
    return { results: result?.results || [], meta: result?.meta || {}, success: true };
  }

  async run() {
    const result = await this._execute({ sql: this.sql, params: this.params });
    return { results: result?.results || [], meta: result?.meta || {}, success: true };
  }
}

export function createD1Rest({ accountId, databaseId, apiToken, apiBase }) {
  if (!accountId || !databaseId || !apiToken) return makeUnavailableDb();

  const base = apiBase || 'https://api.cloudflare.com/client/v4';
  const endpoint = `${base}/accounts/${accountId}/d1/database/${databaseId}/query`;

  async function callApi(body) {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiToken}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const data = await res.json().catch(() => null);
    if (!res.ok || !data || data.success === false) {
      const detail = data?.errors?.[0]?.message || data?.messages?.[0]?.message;
      throw new Error(detail || `D1 request failed with status ${res.status}`);
    }
    return data.result || [];
  }

  const execute = async (query) => {
    const result = await callApi(query);
    return result[0] || { results: [], meta: {}, success: true };
  };

  return {
    prepare(sql) {
      return new D1Statement(execute, sql, []);
    },
    async batch(statements) {
      const list = statements.map((s) => ({ sql: s.sql, params: s.params || [] }));
      const result = await callApi({ batch: list });
      return result.map((r) => ({ results: r?.results || [], meta: r?.meta || {}, success: r?.success !== false }));
    },
    async exec(sql) {
      const result = await callApi({ sql });
      return { count: result.length, duration: 0 };
    },
  };
}
