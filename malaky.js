/**
 * مَلَكِي | MALAKY MANAGEMENT v5.5 — Royal Gold Shimmer UI + Cost Calculation Report (#21) + Button Sound Controls + Multi-Way Bluetooth Thermal Printer + Final Cost Profit % Pricing
 * Binding: DB (malaky-management-db) | Secrets: BOOTSTRAP_KEY, SESSION_SECRET
 */

const DEFAULT_LOGO_DATA_URL = 'data:image/jpeg;base64,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';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    try {
      if (path === '/manifest.json') {
        let logoUrl = '';
        if (env.DB) {
          try {
            const r = await env.DB.prepare("SELECT setting_value FROM settings WHERE setting_key='logo_data_url'").first();
            if (r && r.setting_value) logoUrl = r.setting_value;
          } catch (_) {}
        }
        const finalIcon = logoUrl || DEFAULT_LOGO_DATA_URL;
        return new Response(JSON.stringify({
          name: 'مَلَكِي | MALAKY MANAGEMENT',
          short_name: 'مَلَكِي',
          description: 'مَلَكِي.. قهوة تروق مزاجك',
          start_url: '/?v=5.3#dashboard',
          display: 'standalone',
          background_color: '#0b0806',
          theme_color: '#d4af37',
          dir: 'rtl',
          lang: 'ar',
          icons: [{ src: finalIcon, sizes: '192x192', type: finalIcon.startsWith('data:image/png') ? 'image/png' : 'image/jpeg' }]
        }), { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' } });
      }

      if (path === '/sw.js') {
        const sw = "self.addEventListener('install',e=>self.skipWaiting());self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.map(c=>caches.delete(c)))).then(()=>self.clients.claim()));});self.addEventListener('fetch',e=>{return;});";
        return new Response(sw, { headers: { 'Content-Type': 'application/javascript; charset=utf-8', 'Cache-Control': 'no-store' } });
      }

      if (path.startsWith('/api/')) {
        if (!env.DB) {
          if (path === '/api/init-status') return json({ dbConnected: false, dbError: 'قاعدة البيانات غير مربوطة تحت اسم DB.' }, 200);
          return json({ error: 'قاعدة البيانات غير مربوطة تحت اسم DB.' }, 500);
        }
        await ensureSchema(env.DB);
        return await handleApi(request, env, url);
      }

      return new Response(renderHtml(), {
        headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0' }
      });
    } catch (e) {
      if (path === '/api/init-status') return json({ dbConnected: false, dbError: e.message || String(e) }, 200);
      return json({ error: e.message || 'خطأ في الخادم' }, 500);
    }
  }
};

/* ============================================================================
 * 1. SCHEMA, DYNAMIC CHECK-CONSTRAINT, FOREIGN-KEY & NOT-NULL RESOLVER
 * ============================================================================ */
let schemaChecked = false;
let schemaInitPromise = null;
let stickersSynced = false;
const TABLE_SQL = {};
const TABLE_COLS = {};
const DEFAULT_FK = {
  role_id: 1,
  user_id: 1,
  created_by: 1,
  supplier_id: null,
  customer_id: null,
  product_id: null,
  packaging_type_id: null,
  sticker_sku_id: null,
  category_id: null
};

function pickValidEnum(tableName, colName, desiredValue) {
  const sql = TABLE_SQL[tableName] || '';
  if (!sql || typeof desiredValue !== 'string') return desiredValue;
  const re = new RegExp(colName + "\\s+TEXT[^,]*CHECK\\s*\\(\\s*" + colName + "\\s+IN\\s*\\(([^)]+)\\)", "i");
  const re2 = new RegExp(colName + "\\s+IN\\s*\\(([^)]+)\\)", "i");
  const m = sql.match(re) || sql.match(re2);
  if (!m) return desiredValue;
  const allowed = m[1].split(',').map(s => s.trim().replace(/^'|'$/g, ''));
  if (allowed.includes(desiredValue)) return desiredValue;

  const synonyms = {
    opening: ['opening', 'opening_balance', 'initial', 'adjustment'],
    opening_balance: ['opening', 'opening_balance', 'initial', 'adjustment'],
    sale_collection: ['sale_collection', 'sales_collection', 'collection', 'sale'],
    sales_collection: ['sale_collection', 'sales_collection', 'collection', 'sale'],
    supplier_payment: ['purchase_payment', 'supplier_payment', 'withdrawal'],
    purchase_payment: ['purchase_payment', 'supplier_payment', 'withdrawal'],
    production_consume: ['production_consume', 'production_out', 'production', 'consume', 'usage', 'adjustment'],
    production_output: ['production_output', 'production_in', 'production', 'output', 'adjustment'],
    'نقدي': ['cash', 'نقدي']
  };
  for (const cand of (synonyms[desiredValue] || [])) {
    if (allowed.includes(cand)) return cand;
  }
  return allowed[0] ?? desiredValue;
}

function requiresPositiveCheck(tableName, colName) {
  const sql = TABLE_SQL[tableName] || '';
  if (!sql) return false;
  const re = new RegExp("\\b" + colName + "\\s*>\\s*0", "i");
  return re.test(sql);
}

function isForeignKeyColumn(colName) {
  return colName.endsWith('_id') || colName === 'created_by' || colName === 'updated_by';
}

function smartInsert(db, tableName, rawData) {
  const data = { ...rawData };
  const nowStr = new Date().toISOString().slice(0, 19).replace('T', ' ');
  const todayStr = nowStr.slice(0, 10);

  if (data.invoice_number !== undefined && data.invoice_no === undefined) data.invoice_no = data.invoice_number;
  if (data.invoice_no !== undefined && data.invoice_number === undefined) data.invoice_number = data.invoice_no;

  if (data.purchase_number !== undefined && data.purchase_no === undefined) data.purchase_no = data.purchase_number;
  if (data.purchase_no !== undefined && data.purchase_number === undefined) data.purchase_number = data.purchase_no;

  if (data.batch_number !== undefined && data.batch_no === undefined) data.batch_no = data.batch_number;
  if (data.batch_no !== undefined && data.batch_number === undefined) data.batch_number = data.batch_no;

  const positiveWeight = Number(
    data.raw_coffee_used_grams ||
    data.raw_coffee_grams ||
    data.total_finished_weight_grams ||
    data.finished_weight_grams ||
    data.weight_grams ||
    data.quantity_grams ||
    data.quantity ||
    data.quantity_units ||
    0
  );
  if (positiveWeight > 0) {
    if (data.raw_coffee_grams === undefined) data.raw_coffee_grams = positiveWeight;
    if (data.raw_coffee_used_grams === undefined) data.raw_coffee_used_grams = positiveWeight;
    if (data.finished_weight_grams === undefined) data.finished_weight_grams = positiveWeight;
    if (data.total_finished_weight_grams === undefined) data.total_finished_weight_grams = positiveWeight;
    if (data.weight_grams === undefined) data.weight_grams = positiveWeight;
    if (data.quantity_grams === undefined) data.quantity_grams = positiveWeight;
    if (data.quantity === undefined) data.quantity = positiveWeight;
    if (data.quantity_units === undefined) data.quantity_units = positiveWeight;
  }

  if (data.total_piasters !== undefined) {
    const rem = Math.max(0, Number(data.total_piasters || 0) - Number(data.paid_piasters || 0));
    if (data.remaining_piasters === undefined) data.remaining_piasters = rem;
    if (data.balance_piasters === undefined) data.balance_piasters = rem;
    if (data.due_piasters === undefined) data.due_piasters = rem;
    if (data.net_total_piasters === undefined) data.net_total_piasters = data.total_piasters;
  }

  if (data.unit_sale_price_piasters !== undefined && data.unit_price_piasters === undefined) data.unit_price_piasters = data.unit_sale_price_piasters;
  if (data.unit_cost_piasters !== undefined && data.unit_price_piasters === undefined) data.unit_price_piasters = data.unit_cost_piasters;
  if (data.line_total_piasters !== undefined && data.total_price_piasters === undefined) data.total_price_piasters = data.line_total_piasters;
  if (data.line_total_piasters !== undefined && data.total_cost_piasters === undefined) data.total_cost_piasters = data.line_total_piasters;
  if (data.total_item_cost_piasters !== undefined && data.line_total_piasters === undefined) data.line_total_piasters = data.total_item_cost_piasters;
  if (data.created_at === undefined) data.created_at = nowStr;
  if (data.updated_at === undefined) data.updated_at = nowStr;

  const colsMeta = TABLE_COLS[tableName] || [];
  if (!colsMeta.length) {
    const keys = Object.keys(data);
    const vals = keys.map(k => pickValidEnum(tableName, k, data[k]));
    return db.prepare(`INSERT INTO ${tableName} (${keys.join(', ')}) VALUES (${keys.map(() => '?').join(', ')})`).bind(...vals);
  }

  const finalCols = [];
  const finalVals = [];

  for (const col of colsMeta) {
    const cName = col.name;
    const cType = String(col.type || '').toUpperCase();
    const isFk = isForeignKeyColumn(cName);

    if (Number(col.pk) === 1 && data[cName] === undefined && cType.includes('INT')) {
      continue;
    }

    let val = data[cName];

    if (isFk && (val === 0 || val === '0' || val === '' || Number.isNaN(val))) {
      val = null;
    }

    if (val !== undefined && val !== null) {
      if (typeof val === 'string') {
        val = pickValidEnum(tableName, cName, val);
      } else if (typeof val === 'number' && !isFk && val <= 0 && requiresPositiveCheck(tableName, cName)) {
        val = positiveWeight > 0 ? positiveWeight : 1;
      }
      finalCols.push(cName);
      finalVals.push(val);
    } else if (Number(col.notnull) === 1 && col.dflt_value === null) {
      if (isFk) {
        const fkFallback = DEFAULT_FK[cName] ?? (cName === 'updated_by' ? DEFAULT_FK.created_by : null);
        if (fkFallback !== null && fkFallback !== undefined) {
          finalCols.push(cName);
          finalVals.push(fkFallback);
        } else {
          finalCols.push(cName);
          finalVals.push(1);
        }
      } else {
        let fallback = '';
        if (cType.includes('INT') || cType.includes('REAL') || cType.includes('NUM') || /(_piasters|_grams|_units|qty|quantity|cost|price|total|paid|discount|amount|weight|tier|active|profit)/.test(cName)) {
          fallback = requiresPositiveCheck(tableName, cName) ? (positiveWeight > 0 ? positiveWeight : 1) : 0;
        } else if (/date|_at/.test(cName)) {
          fallback = todayStr;
        } else if (cName.endsWith('_no') || cName.endsWith('_number') || cName === 'sku' || cName === 'code') {
          fallback = 'REF-' + Date.now().toString().slice(-6);
        } else {
          fallback = pickValidEnum(tableName, cName, '');
        }
        finalCols.push(cName);
        finalVals.push(fallback);
      }
    } else if (!isFk && requiresPositiveCheck(tableName, cName)) {
      finalCols.push(cName);
      finalVals.push(positiveWeight > 0 ? positiveWeight : 1);
    } else if (val === null && Number(col.notnull) === 0) {
      finalCols.push(cName);
      finalVals.push(null);
    }
  }

  const sql = `INSERT INTO ${tableName} (${finalCols.join(', ')}) VALUES (${finalCols.map(() => '?').join(', ')})`;
  return db.prepare(sql).bind(...finalVals);
}

const SCHEMA = {
  roles: [['id','INTEGER PRIMARY KEY AUTOINCREMENT'],['name','TEXT'],['description','TEXT'],['is_system','INTEGER DEFAULT 0']],
  permissions: [['id','INTEGER PRIMARY KEY AUTOINCREMENT'],['code','TEXT'],['description','TEXT']],
  role_permissions: [['role_id','INTEGER'],['permission_id','INTEGER']],
  users: [['id','INTEGER PRIMARY KEY AUTOINCREMENT'],['full_name','TEXT'],['username','TEXT'],['password_hash','TEXT'],['role_id','INTEGER DEFAULT 2'],['is_active','INTEGER DEFAULT 1'],['created_at','TEXT'],['updated_at','TEXT']],
  settings: [['setting_key','TEXT PRIMARY KEY'],['setting_value','TEXT'],['updated_at','TEXT']],
  coffee_products: [['id','INTEGER PRIMARY KEY AUTOINCREMENT'],['sku','TEXT'],['name','TEXT'],['description','TEXT'],['sale_price_1_piasters','INTEGER DEFAULT 0'],['sale_price_2_piasters','INTEGER DEFAULT 0'],['prev_sale_price_1_piasters','INTEGER DEFAULT 0'],['prev_sale_price_2_piasters','INTEGER DEFAULT 0'],['profit_percent_1','REAL DEFAULT 0'],['profit_percent_2','REAL DEFAULT 0'],['prev_profit_percent_1','REAL DEFAULT 0'],['prev_profit_percent_2','REAL DEFAULT 0'],['manual_final_cost_kg_piasters','INTEGER DEFAULT 0'],['is_active','INTEGER DEFAULT 1'],['created_at','TEXT'],['updated_at','TEXT']],
  packaging_types: [['id','INTEGER PRIMARY KEY AUTOINCREMENT'],['name','TEXT'],['net_weight_grams','INTEGER DEFAULT 250'],['is_active','INTEGER DEFAULT 1']],
  suppliers: [['id','INTEGER PRIMARY KEY AUTOINCREMENT'],['name','TEXT'],['phone','TEXT'],['address','TEXT'],['notes','TEXT'],['created_at','TEXT']],
  customers: [['id','INTEGER PRIMARY KEY AUTOINCREMENT'],['name','TEXT'],['phone','TEXT'],['address','TEXT'],['notes','TEXT'],['created_at','TEXT']],
  raw_coffee_stock: [['product_id','INTEGER PRIMARY KEY'],['quantity_grams','INTEGER DEFAULT 0'],['average_cost_per_kg_piasters','INTEGER DEFAULT 0'],['updated_at','TEXT']],
  packaging_stock: [['packaging_type_id','INTEGER PRIMARY KEY'],['quantity_units','INTEGER DEFAULT 0'],['average_cost_per_unit_piasters','INTEGER DEFAULT 0'],['updated_at','TEXT']],
  sticker_skus: [['id','INTEGER PRIMARY KEY AUTOINCREMENT'],['product_id','INTEGER'],['packaging_type_id','INTEGER'],['sku','TEXT'],['quantity_units','INTEGER DEFAULT 0'],['average_cost_per_unit_piasters','INTEGER DEFAULT 0'],['is_active','INTEGER DEFAULT 1']],
  finished_stock: [['product_id','INTEGER'],['packaging_type_id','INTEGER'],['quantity_units','INTEGER DEFAULT 0'],['average_cost_per_unit_piasters','INTEGER DEFAULT 0'],['updated_at','TEXT']],
  stock_movements: [['id','INTEGER PRIMARY KEY AUTOINCREMENT'],['movement_date','TEXT'],['stock_type','TEXT'],['product_id','INTEGER'],['packaging_type_id','INTEGER'],['sticker_sku_id','INTEGER'],['quantity_delta','INTEGER DEFAULT 0'],['unit_cost_piasters','INTEGER DEFAULT 0'],['movement_reason','TEXT'],['reference_type','TEXT'],['reference_id','INTEGER'],['notes','TEXT'],['created_by','INTEGER'],['created_at','TEXT']],
  purchases: [['id','INTEGER PRIMARY KEY AUTOINCREMENT'],['purchase_number','TEXT'],['supplier_id','INTEGER'],['purchase_date','TEXT'],['status',"TEXT DEFAULT 'draft'"],['subtotal_piasters','INTEGER DEFAULT 0'],['discount_piasters','INTEGER DEFAULT 0'],['total_piasters','INTEGER DEFAULT 0'],['paid_piasters','INTEGER DEFAULT 0'],['notes','TEXT'],['created_by','INTEGER'],['created_at','TEXT']],
  purchase_items: [['id','INTEGER PRIMARY KEY AUTOINCREMENT'],['purchase_id','INTEGER'],['item_type','TEXT'],['product_id','INTEGER'],['packaging_type_id','INTEGER'],['sticker_sku_id','INTEGER'],['quantity','INTEGER DEFAULT 0'],['unit_cost_piasters','INTEGER DEFAULT 0'],['line_total_piasters','INTEGER DEFAULT 0'],['notes','TEXT']],
  production_batches: [['id','INTEGER PRIMARY KEY AUTOINCREMENT'],['batch_number','TEXT'],['product_id','INTEGER'],['raw_coffee_used_grams','INTEGER DEFAULT 0'],['total_finished_weight_grams','INTEGER DEFAULT 0'],['raw_coffee_cost_piasters','INTEGER DEFAULT 0'],['packaging_cost_piasters','INTEGER DEFAULT 0'],['sticker_cost_piasters','INTEGER DEFAULT 0'],['total_cost_piasters','INTEGER DEFAULT 0'],['status',"TEXT DEFAULT 'draft'"],['production_date','TEXT'],['notes','TEXT'],['created_by','INTEGER'],['created_at','TEXT']],
  production_items: [['id','INTEGER PRIMARY KEY AUTOINCREMENT'],['batch_id','INTEGER'],['packaging_type_id','INTEGER'],['sticker_sku_id','INTEGER'],['quantity_units','INTEGER DEFAULT 0'],['weight_grams','INTEGER DEFAULT 0'],['packaging_unit_cost_piasters','INTEGER DEFAULT 0'],['sticker_unit_cost_piasters','INTEGER DEFAULT 0'],['total_item_cost_piasters','INTEGER DEFAULT 0']],
  sales_invoices: [['id','INTEGER PRIMARY KEY AUTOINCREMENT'],['invoice_number','TEXT'],['customer_id','INTEGER'],['customer_address','TEXT'],['invoice_date','TEXT'],['status',"TEXT DEFAULT 'draft'"],['subtotal_piasters','INTEGER DEFAULT 0'],['discount_piasters','INTEGER DEFAULT 0'],['total_piasters','INTEGER DEFAULT 0'],['paid_piasters','INTEGER DEFAULT 0'],['notes','TEXT'],['created_by','INTEGER'],['created_at','TEXT']],
  sales_invoice_items: [['id','INTEGER PRIMARY KEY AUTOINCREMENT'],['invoice_id','INTEGER'],['product_id','INTEGER'],['packaging_type_id','INTEGER'],['quantity_units','INTEGER DEFAULT 0'],['unit_sale_price_piasters','INTEGER DEFAULT 0'],['unit_cost_piasters','INTEGER DEFAULT 0'],['line_total_piasters','INTEGER DEFAULT 0'],['price_tier','INTEGER DEFAULT 1']],
  customer_payments: [['id','INTEGER PRIMARY KEY AUTOINCREMENT'],['customer_id','INTEGER'],['invoice_id','INTEGER'],['payment_date','TEXT'],['amount_piasters','INTEGER DEFAULT 0'],['payment_method',"TEXT DEFAULT 'cash'"],['reference_number','TEXT'],['notes','TEXT'],['created_by','INTEGER'],['created_at','TEXT']],
  expense_categories: [['id','INTEGER PRIMARY KEY AUTOINCREMENT'],['name','TEXT']],
  expenses: [['id','INTEGER PRIMARY KEY AUTOINCREMENT'],['category_id','INTEGER'],['expense_date','TEXT'],['description','TEXT'],['amount_piasters','INTEGER DEFAULT 0'],['affects_profit','INTEGER DEFAULT 1'],['payment_method',"TEXT DEFAULT 'cash'"],['created_by','INTEGER'],['created_at','TEXT']],
  cash_movements: [['id','INTEGER PRIMARY KEY AUTOINCREMENT'],['movement_date','TEXT'],['direction','TEXT'],['movement_type','TEXT'],['amount_piasters','INTEGER DEFAULT 0'],['reference_type','TEXT'],['reference_id','INTEGER'],['description','TEXT'],['created_by','INTEGER'],['created_at','TEXT']],
  audit_log: [['id','INTEGER PRIMARY KEY AUTOINCREMENT'],['user_id','INTEGER'],['action','TEXT'],['table_name','TEXT'],['record_id','INTEGER'],['old_values_json','TEXT'],['new_values_json','TEXT'],['created_at','TEXT']]
};

for (const [tblName, colsDef] of Object.entries(SCHEMA)) {
  TABLE_COLS[tblName] = colsDef.map(([cName, cDef], idx) => ({
    name: cName,
    type: cDef.split(' ')[0] || 'TEXT',
    pk: cDef.toUpperCase().includes('PRIMARY KEY') ? 1 : 0,
    notnull: cDef.toUpperCase().includes('NOT NULL') ? 1 : 0,
    dflt_value: cDef.toUpperCase().includes('DEFAULT') ? '0' : null,
    cid: idx
  }));
}

async function refreshDefaultForeignKeys(db) {
  try {
    const batchRes = await db.batch([
      db.prepare('SELECT id FROM roles ORDER BY id ASC LIMIT 1'),
      db.prepare('SELECT id FROM users ORDER BY id ASC LIMIT 1'),
      db.prepare('SELECT id FROM suppliers ORDER BY id ASC LIMIT 1'),
      db.prepare('SELECT id FROM customers ORDER BY id ASC LIMIT 1'),
      db.prepare('SELECT id FROM packaging_types ORDER BY id ASC LIMIT 1'),
      db.prepare('SELECT id FROM coffee_products ORDER BY id ASC LIMIT 1'),
      db.prepare('SELECT id FROM sticker_skus ORDER BY id ASC LIMIT 1'),
      db.prepare('SELECT id FROM expense_categories ORDER BY id ASC LIMIT 1')
    ]);
    const [rRole, rUser, rSup, rCust, rPkg, rProd, rStk, rCat] = batchRes.map(x => (x.results && x.results[0]) || null);
    if (rRole?.id) DEFAULT_FK.role_id = rRole.id;
    if (rUser?.id) { DEFAULT_FK.user_id = rUser.id; DEFAULT_FK.created_by = rUser.id; }
    if (rSup?.id) DEFAULT_FK.supplier_id = rSup.id;
    if (rCust?.id) DEFAULT_FK.customer_id = rCust.id;
    if (rPkg?.id) DEFAULT_FK.packaging_type_id = rPkg.id;
    if (rProd?.id) DEFAULT_FK.product_id = rProd.id;
    if (rStk?.id) DEFAULT_FK.sticker_sku_id = rStk.id;
    if (rCat?.id) DEFAULT_FK.category_id = rCat.id;
  } catch (_) {}
}

async function syncProductStickerSkus(db, force = false) {
  if (stickersSynced && !force) return;
  try {
    const [prodsRes, pkgsRes, exRes] = await Promise.all([
      db.prepare('SELECT id FROM coffee_products WHERE is_active=1').all(),
      db.prepare('SELECT id FROM packaging_types WHERE is_active=1').all(),
      db.prepare('SELECT product_id, packaging_type_id FROM sticker_skus').all()
    ]);
    const prods = prodsRes.results || [];
    const pkgs = pkgsRes.results || [];
    const existing = exRes.results || [];
    const exSet = new Set(existing.map(x => `${x.product_id}_${x.packaging_type_id}`));
    const stmts = [];
    for (const p of prods) {
      for (const pt of pkgs) {
        const key = `${p.id}_${pt.id}`;
        if (!exSet.has(key)) {
          stmts.push(smartInsert(db, 'sticker_skus', {
            product_id: p.id,
            packaging_type_id: pt.id,
            sku: `STK-${p.id}-${pt.id}`,
            quantity_units: 0,
            average_cost_per_unit_piasters: 500,
            is_active: 1
          }));
        }
      }
    }
    if (stmts.length) await db.batch(stmts);
    stickersSynced = true;
  } catch (_) {}
}

async function ensureSchema(db, force = false) {
  if (schemaChecked && !force) return [];
  if (schemaInitPromise && !force) return schemaInitPromise;
  schemaInitPromise = (async () => {
  try {
    if (!force) {
      try {
        const ver = await db.prepare("SELECT setting_value FROM settings WHERE setting_key='db_schema_v5_5'").first();
        if (ver && ver.setting_value === '1') {
          await refreshDefaultForeignKeys(db);
          schemaChecked = true;
          stickersSynced = true;
          return [];
        }
      } catch (_) {}
    }
    const tRes = await db.prepare("SELECT name, sql FROM sqlite_master WHERE type='table'").all();
    const existing = new Set();
    for (const r of (tRes.results || [])) {
      existing.add(r.name);
      TABLE_SQL[r.name] = r.sql || '';
    }

    for (const [tbl, cols] of Object.entries(SCHEMA)) {
      try {
        if (!existing.has(tbl)) {
          await db.prepare('CREATE TABLE IF NOT EXISTS ' + tbl + ' (' + cols.map(([n, d]) => n + ' ' + d).join(', ') + ')').run();
        } else {
          const info = await db.prepare('PRAGMA table_info(' + tbl + ')').all();
          const colNames = new Set((info.results || []).map(c => c.name));
          for (const [n, d] of cols) {
            if (!colNames.has(n)) {
              const cleanType = d.replace(/PRIMARY KEY AUTOINCREMENT|PRIMARY KEY|UNIQUE|NOT NULL/gi, '').trim() || 'TEXT';
              try { await db.prepare('ALTER TABLE ' + tbl + ' ADD COLUMN ' + n + ' ' + cleanType).run(); } catch (_) {}
            }
          }
        }
        const finalInfo = await db.prepare('PRAGMA table_info(' + tbl + ')').all();
        TABLE_COLS[tbl] = finalInfo.results || [];
      } catch (_) {}
    }

    try {
      await db.batch([
        db.prepare('CREATE INDEX IF NOT EXISTS idx_sales_cust ON sales_invoices(customer_id, status)'),
        db.prepare('CREATE INDEX IF NOT EXISTS idx_sales_date ON sales_invoices(invoice_date)'),
        db.prepare('CREATE INDEX IF NOT EXISTS idx_sii_inv ON sales_invoice_items(invoice_id)'),
        db.prepare('CREATE INDEX IF NOT EXISTS idx_stk_mov_ref ON stock_movements(reference_type, reference_id)'),
        db.prepare('CREATE INDEX IF NOT EXISTS idx_fin_stock ON finished_stock(product_id, packaging_type_id)'),
        db.prepare('CREATE INDEX IF NOT EXISTS idx_sticker_sku ON sticker_skus(product_id, packaging_type_id)')
      ]);
    } catch (_) {}

    try {
      const roleCnt = await db.prepare('SELECT COUNT(*) as c FROM roles').first();
      if (!roleCnt || Number(roleCnt.c) === 0) {
        await smartInsert(db, 'roles', { id: 1, name: 'المدير العام', description: 'كامل الصلاحيات', is_system: 1 }).run();
        await smartInsert(db, 'roles', { id: 2, name: 'مستخدم', description: 'صلاحيات التشغيل', is_system: 0 }).run();
      }
    } catch (_) {}

    try {
      const pkgCnt = await db.prepare('SELECT COUNT(*) as c FROM packaging_types').first();
      if (!pkgCnt || Number(pkgCnt.c) === 0) {
        await smartInsert(db, 'packaging_types', { name: 'ربع كيلو', net_weight_grams: 250, is_active: 1 }).run();
        await smartInsert(db, 'packaging_types', { name: 'ثمن كيلو', net_weight_grams: 125, is_active: 1 }).run();
      }
    } catch (_) {}

    try {
      const supCnt = await db.prepare('SELECT COUNT(*) as c FROM suppliers').first();
      if (!supCnt || Number(supCnt.c) === 0) {
        await smartInsert(db, 'suppliers', { name: 'مورد عام / نقدي', phone: '', address: '', notes: 'مورد افتراضي' }).run();
      }
    } catch (_) {}

    try {
      const custCnt = await db.prepare('SELECT COUNT(*) as c FROM customers').first();
      if (!custCnt || Number(custCnt.c) === 0) {
        await smartInsert(db, 'customers', { name: 'عميل نقدي', phone: '', address: '', notes: 'عميل افتراضي' }).run();
      }
    } catch (_) {}

    try {
      const catCnt = await db.prepare('SELECT COUNT(*) as c FROM expense_categories').first();
      if (!catCnt || Number(catCnt.c) === 0) {
        for (const cName of ['مصروفات عامة', 'إيجار', 'كهرباء ومياه', 'نقل ومشال', 'رواتب وأجور']) {
          await smartInsert(db, 'expense_categories', { name: cName }).run();
        }
      }
    } catch (_) {}

    try { await db.prepare("UPDATE sales_invoices SET invoice_number = invoice_no WHERE invoice_number IS NULL AND invoice_no IS NOT NULL").run(); } catch (_) {}
    try { await db.prepare("UPDATE purchases SET purchase_number = purchase_no WHERE purchase_number IS NULL AND purchase_no IS NOT NULL").run(); } catch (_) {}
    try { await db.prepare("UPDATE production_batches SET batch_number = batch_no WHERE batch_number IS NULL AND batch_no IS NOT NULL").run(); } catch (_) {}
    try { await db.prepare("UPDATE production_batches SET raw_coffee_used_grams = raw_coffee_grams WHERE (raw_coffee_used_grams IS NULL OR raw_coffee_used_grams = 0) AND raw_coffee_grams IS NOT NULL").run(); } catch (_) {}
    try { await db.prepare("UPDATE production_batches SET total_finished_weight_grams = raw_coffee_used_grams WHERE (total_finished_weight_grams IS NULL OR total_finished_weight_grams = 0) AND raw_coffee_used_grams IS NOT NULL").run(); } catch (_) {}

    try {
      await db.prepare("UPDATE packaging_types SET net_weight_grams = 125 WHERE name LIKE '%ثمن%' AND net_weight_grams != 125").run();
      await db.prepare("UPDATE packaging_types SET net_weight_grams = 250 WHERE name LIKE '%ربع%' AND net_weight_grams != 250").run();
    } catch (_) {}

    try {
      await db.prepare(`
        UPDATE finished_stock
        SET average_cost_per_unit_piasters = (
          SELECT pi.total_item_cost_piasters / MAX(1, pi.quantity_units)
          FROM production_items pi
          JOIN production_batches pb ON pb.id = pi.batch_id
          WHERE pb.product_id = finished_stock.product_id
            AND pi.packaging_type_id = finished_stock.packaging_type_id
            AND pi.total_item_cost_piasters > 0
          ORDER BY pi.id DESC LIMIT 1
        )
        WHERE COALESCE(average_cost_per_unit_piasters, 0) <= 0
      `).run();

      await db.prepare(`
        UPDATE finished_stock
        SET average_cost_per_unit_piasters = COALESCE(
          (SELECT ROUND((rcs.average_cost_per_kg_piasters * pt.net_weight_grams) / 1000.0)
           FROM raw_coffee_stock rcs, packaging_types pt
           WHERE rcs.product_id = finished_stock.product_id AND pt.id = finished_stock.packaging_type_id), 0
        ) + COALESCE(
          (SELECT ps.average_cost_per_unit_piasters FROM packaging_stock ps WHERE ps.packaging_type_id = finished_stock.packaging_type_id), 0
        )
        WHERE COALESCE(average_cost_per_unit_piasters, 0) <= 0
      `).run();

      await db.prepare(`
        UPDATE sales_invoice_items
        SET unit_cost_piasters = COALESCE(
          (SELECT fs.average_cost_per_unit_piasters FROM finished_stock fs
           WHERE fs.product_id = sales_invoice_items.product_id
             AND fs.packaging_type_id = sales_invoice_items.packaging_type_id
             AND fs.average_cost_per_unit_piasters > 0
           LIMIT 1), 0
        )
        WHERE COALESCE(unit_cost_piasters, 0) <= 0
      `).run();

      await db.prepare(`
        UPDATE coffee_products
        SET prev_sale_price_1_piasters = sale_price_1_piasters,
            prev_sale_price_2_piasters = CASE WHEN COALESCE(sale_price_2_piasters,0) > 0 THEN sale_price_2_piasters ELSE sale_price_1_piasters END
        WHERE COALESCE(prev_sale_price_1_piasters, 0) <= 0 AND COALESCE(sale_price_1_piasters, 0) > 0
      `).run();
    } catch (_) {}

    await syncProductStickerSkus(db, true);
    await refreshDefaultForeignKeys(db);
    try {
      await db.prepare("INSERT OR REPLACE INTO settings (setting_key, setting_value, updated_at) VALUES ('db_schema_v5_5', '1', datetime('now'))").run();
    } catch (_) {}
    schemaChecked = true;
  } catch (_) {} finally {
    schemaInitPromise = null;
  }
  return [];
  })();
  return schemaInitPromise;
}

/* ============================================================================
 * 2. AUTH & SAFE MOVEMENT HELPERS
 * ============================================================================ */
const toHex = buf => [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
const fromHex = hex => new Uint8Array((hex.match(/.{1,2}/g) || []).map(b => parseInt(b, 16)));
const toInt = (v, def = null) => { const n = parseInt(v, 10); return Number.isNaN(n) ? def : n; };
const toFk = (v) => { const n = parseInt(v, 10); return (Number.isNaN(n) || n <= 0) ? null : n; };
const today = () => new Date().toISOString().slice(0, 10);
const json = (data, status = 200, headers = {}) => new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', ...headers } });

function prepStockMove(db, m) {
  return smartInsert(db, 'stock_movements', {
    movement_date: m.movement_date || today(),
    stock_type: String(m.stock_type || 'finished'),
    product_id: toFk(m.product_id),
    packaging_type_id: toFk(m.packaging_type_id),
    sticker_sku_id: toFk(m.sticker_sku_id),
    quantity_delta: Math.round(Number(m.quantity_delta || 0)),
    unit_cost_piasters: Math.round(Number(m.unit_cost_piasters || 0)),
    movement_reason: String(m.movement_reason || 'adjustment'),
    reference_type: String(m.reference_type || 'manual'),
    reference_id: toFk(m.reference_id),
    notes: String(m.notes || ''),
    created_by: toFk(m.created_by)
  });
}

function prepCashMove(db, m) {
  return smartInsert(db, 'cash_movements', {
    movement_date: m.movement_date || today(),
    direction: String(m.direction || 'in'),
    movement_type: String(m.movement_type || 'deposit'),
    amount_piasters: Math.round(Number(m.amount_piasters || 0)),
    reference_type: String(m.reference_type || 'manual'),
    reference_id: toFk(m.reference_id),
    description: String(m.description || ''),
    created_by: toFk(m.created_by)
  });
}

async function resolveFinalUnitCostPiasters(db, pid, pkid) {
  const [prodRow, fs, lastProd, rawRow, globalRawRow, lastPurRaw, ptRow, pkgRow, stkRow] = await Promise.all([
    db.prepare('SELECT manual_final_cost_kg_piasters, sale_price_1_piasters FROM coffee_products WHERE id=?').bind(pid).first(),
    db.prepare('SELECT average_cost_per_unit_piasters FROM finished_stock WHERE product_id=? AND packaging_type_id=?').bind(pid, pkid).first(),
    db.prepare(`
      SELECT pi.total_item_cost_piasters, pi.quantity_units
      FROM production_items pi
      JOIN production_batches pb ON pb.id = pi.batch_id
      WHERE pb.product_id=? AND pi.packaging_type_id=? AND pi.quantity_units > 0 AND pi.total_item_cost_piasters > 0
      ORDER BY pi.id DESC LIMIT 1
    `).bind(pid, pkid).first(),
    db.prepare('SELECT average_cost_per_kg_piasters FROM raw_coffee_stock WHERE product_id=?').bind(pid).first(),
    db.prepare('SELECT ROUND(AVG(average_cost_per_kg_piasters)) as avg_cost FROM raw_coffee_stock WHERE average_cost_per_kg_piasters > 0').first(),
    db.prepare("SELECT unit_cost_piasters FROM purchase_items WHERE item_type='raw_coffee' AND unit_cost_piasters > 0 ORDER BY id DESC LIMIT 1").first(),
    db.prepare('SELECT net_weight_grams FROM packaging_types WHERE id=?').bind(pkid).first(),
    db.prepare('SELECT average_cost_per_unit_piasters FROM packaging_stock WHERE packaging_type_id=?').bind(pkid).first(),
    db.prepare('SELECT average_cost_per_unit_piasters, quantity_units FROM sticker_skus WHERE product_id=? AND packaging_type_id=?').bind(pid, pkid).first()
  ]);

  const netG = Number(ptRow?.net_weight_grams || 250);
  const manualKgCost = Number(prodRow?.manual_final_cost_kg_piasters || 0);
  if (manualKgCost > 0) {
    return Math.round((manualKgCost * netG) / 1000);
  }

  let prodCost = 0;
  if (lastProd && Number(lastProd.total_item_cost_piasters) > 0) {
    prodCost = Math.round(Number(lastProd.total_item_cost_piasters) / Math.max(1, Number(lastProd.quantity_units)));
  }
  const fsCost = Math.round(Number(fs?.average_cost_per_unit_piasters || 0));

  const effectiveRawKg = Number(rawRow?.average_cost_per_kg_piasters || 0) ||
                         Number(globalRawRow?.avg_cost || 0) ||
                         Number(lastPurRaw?.unit_cost_piasters || 0);
  const rawC = Math.round((effectiveRawKg * netG) / 1000);
  const pkgC = Math.round(Number(pkgRow?.average_cost_per_unit_piasters || 0));
  const stkC = Number(stkRow?.quantity_units || 0) > 0 ? Math.round(Number(stkRow?.average_cost_per_unit_piasters || 0)) : 0;
  const fullCalcCost = effectiveRawKg > 0 ? (rawC + pkgC + stkC) : 0;

  return Math.max(prodCost, fsCost, fullCalcCost);
}

async function resolveFinalKgCostPiasters(db, pid) {
  const prodRow = await db.prepare('SELECT manual_final_cost_kg_piasters FROM coffee_products WHERE id=?').bind(pid).first();
  if (prodRow && Number(prodRow.manual_final_cost_kg_piasters) > 0) {
    return Math.round(Number(prodRow.manual_final_cost_kg_piasters));
  }
  const pk250 = await db.prepare('SELECT id FROM packaging_types WHERE net_weight_grams=250 LIMIT 1').first();
  if (pk250 && pk250.id) {
    const unit250 = await resolveFinalUnitCostPiasters(db, pid, pk250.id);
    if (unit250 > 0) return unit250 * 4;
  }
  const rawRow = await db.prepare('SELECT average_cost_per_kg_piasters FROM raw_coffee_stock WHERE product_id=?').bind(pid).first();
  if (rawRow && Number(rawRow.average_cost_per_kg_piasters) > 0) {
    return Math.round(Number(rawRow.average_cost_per_kg_piasters));
  }
  const globalRawRow = await db.prepare('SELECT ROUND(AVG(average_cost_per_kg_piasters)) as avg_cost FROM raw_coffee_stock WHERE average_cost_per_kg_piasters > 0').first();
  return Math.round(Number(globalRawRow?.avg_cost || 0));
}

async function pushPriceHistorySnapshot(db, label) {
  try {
    const prods = (await db.prepare('SELECT id, name, sale_price_1_piasters, sale_price_2_piasters, profit_percent_1, profit_percent_2 FROM coffee_products WHERE is_active=1').all()).results || [];
    if (!prods.length) return;
    const row = await db.prepare("SELECT setting_value FROM settings WHERE setting_key='price_history_stack_json'").first();
    let stack = [];
    if (row && row.setting_value) {
      try { stack = JSON.parse(row.setting_value) || []; } catch (_) { stack = []; }
    }
    stack.push({
      ts: new Date().toISOString(),
      label: label || 'تعديل أسعار',
      items: prods.map(p => ({
        id: p.id,
        p1: Number(p.sale_price_1_piasters || 0),
        p2: Number(p.sale_price_2_piasters || 0),
        pct1: Number(p.profit_percent_1 || 0),
        pct2: Number(p.profit_percent_2 || 0)
      }))
    });
    if (stack.length > 25) stack = stack.slice(stack.length - 25);
    const valStr = JSON.stringify(stack);
    const ex = await db.prepare("SELECT setting_key FROM settings WHERE setting_key='price_history_stack_json'").first();
    if (ex) {
      await db.prepare("UPDATE settings SET setting_value=?, updated_at=datetime('now') WHERE setting_key='price_history_stack_json'").bind(valStr).run();
    } else {
      await smartInsert(db, 'settings', { setting_key: 'price_history_stack_json', setting_value: valStr }).run();
    }
  } catch (_) {}
}

async function buildReverseStockStatements(db, refType, refId) {
  const movs = (await db.prepare('SELECT * FROM stock_movements WHERE reference_type=? AND reference_id=?').bind(refType, refId).all()).results || [];
  const stmts = [];
  for (const mv of movs) {
    const delta = Number(mv.quantity_delta || 0);
    if (delta === 0) continue;
    const rev = -delta;
    if (mv.stock_type === 'raw_coffee' && mv.product_id) {
      stmts.push(db.prepare("UPDATE raw_coffee_stock SET quantity_grams = MAX(0, quantity_grams + ?), updated_at=datetime('now') WHERE product_id=?").bind(rev, mv.product_id));
    } else if (mv.stock_type === 'packaging' && mv.packaging_type_id) {
      stmts.push(db.prepare("UPDATE packaging_stock SET quantity_units = MAX(0, quantity_units + ?), updated_at=datetime('now') WHERE packaging_type_id=?").bind(rev, mv.packaging_type_id));
    } else if (mv.stock_type === 'sticker') {
      if (mv.sticker_sku_id) {
        stmts.push(db.prepare("UPDATE sticker_skus SET quantity_units = MAX(0, quantity_units + ?) WHERE id=?").bind(rev, mv.sticker_sku_id));
      } else if (mv.product_id && mv.packaging_type_id) {
        stmts.push(db.prepare("UPDATE sticker_skus SET quantity_units = MAX(0, quantity_units + ?) WHERE product_id=? AND packaging_type_id=?").bind(rev, mv.product_id, mv.packaging_type_id));
      }
    } else if (mv.stock_type === 'finished' && mv.product_id && mv.packaging_type_id) {
      stmts.push(db.prepare("UPDATE finished_stock SET quantity_units = MAX(0, quantity_units + ?), updated_at=datetime('now') WHERE product_id=? AND packaging_type_id=?").bind(rev, mv.product_id, mv.packaging_type_id));
    }
  }
  stmts.push(db.prepare('DELETE FROM stock_movements WHERE reference_type=? AND reference_id=?').bind(refType, refId));
  return { stmts, hadMovements: movs.length > 0 };
}

function safeEq(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string' || a.length !== b.length) return false;
  let r = 0;
  for (let i = 0; i < a.length; i++) r |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return r === 0;
}

async function hashPw(pw) {
  const enc = new TextEncoder();
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const key = await crypto.subtle.importKey('raw', enc.encode(pw), { name: 'PBKDF2' }, false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits({ name: 'PBKDF2', salt, iterations: 100000, hash: 'SHA-256' }, key, 256);
  return 'pbkdf2$100000$' + toHex(salt) + '$' + toHex(bits);
}

async function verifyPw(pw, stored) {
  if (!stored) return false;
  const enc = new TextEncoder();
  if (stored.startsWith('pbkdf2$')) {
    const [, iter, saltHex, hashHex] = stored.split('$');
    const key = await crypto.subtle.importKey('raw', enc.encode(pw), { name: 'PBKDF2' }, false, ['deriveBits']);
    const bits = await crypto.subtle.deriveBits({ name: 'PBKDF2', salt: fromHex(saltHex), iterations: parseInt(iter, 10), hash: 'SHA-256' }, key, 256);
    return safeEq(toHex(bits), hashHex);
  }
  const dig = await crypto.subtle.digest('SHA-256', enc.encode(pw));
  return safeEq(toHex(dig), stored) || safeEq(pw, stored);
}

async function signToken(payload, secret) {
  const enc = new TextEncoder();
  const data = btoa(unescape(encodeURIComponent(JSON.stringify(payload))));
  const key = await crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(data));
  return data + '.' + toHex(sig);
}

async function verifyToken(token, secret) {
  try {
    if (!token || !secret || !token.includes('.')) return null;
    const [data, sig] = token.split('.');
    const enc = new TextEncoder();
    const key = await crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
    const expected = await crypto.subtle.sign('HMAC', key, enc.encode(data));
    if (!safeEq(sig, toHex(expected))) return null;
    const p = JSON.parse(decodeURIComponent(escape(atob(data))));
    return (p.exp && Date.now() > p.exp) ? null : p;
  } catch (_) { return null; }
}

async function getAuthUser(req, env) {
  try {
    const secret = env.SESSION_SECRET || 'malaky_fallback_session_key_change_in_secrets';
    let token = null;
    const cookie = req.headers.get('Cookie') || '';
    for (const c of cookie.split(';').map(x => x.trim())) {
      if (c.startsWith('malaky_session=')) token = decodeURIComponent(c.slice(15));
    }
    const payload = await verifyToken(token, secret);
    if (!payload || !payload.uid) return null;
    const u = await env.DB.prepare('SELECT u.id, u.full_name, u.username, u.role_id, u.is_active, r.name as role_name, r.is_system FROM users u LEFT JOIN roles r ON r.id = u.role_id WHERE u.id = ?').bind(payload.uid).first();
    if (!u || Number(u.is_active) !== 1) return null;
    return { ...u, is_admin: Number(u.role_id) === 1 || Number(u.is_system) === 1 };
  } catch (_) { return null; }
}

/* ============================================================================
 * 3. API HANDLER (USING smartInsert FOR ALL TABLES)
 * ============================================================================ */
async function handleApi(req, env, url) {
  const db = env.DB;
  const path = url.pathname;
  const m = req.method.toUpperCase();

  if (path === '/api/init-status' && m === 'GET') {
    const [batchRes, user] = await Promise.all([
      db.batch([
        db.prepare('SELECT COUNT(*) as c FROM users'),
        db.prepare("SELECT setting_key, setting_value FROM settings WHERE setting_key NOT IN ('price_history_stack_json', 'db_schema_v5_5')")
      ]),
      getAuthUser(req, env)
    ]);
    const uCnt = batchRes[0]?.results?.[0];
    const sRows = batchRes[1]?.results || [];
    const settings = {};
    for (const r of sRows) settings[r.setting_key] = r.setting_value;
    return json({ dbConnected: true, hasUsers: (uCnt?.c || 0) > 0, user, settings });
  }

  if (path === '/api/bootstrap' && m === 'POST') {
    if (!env.BOOTSTRAP_KEY) return json({ error: 'BOOTSTRAP_KEY غير موجود.' }, 400);
    const b = await req.json();
    if (!safeEq(String(b.bootstrap_key || '').trim(), String(env.BOOTSTRAP_KEY).trim())) return json({ error: 'مفتاح التهيئة غير صحيح.' }, 403);
    const fullName = String(b.full_name || 'المدير العام').trim();
    const username = String(b.username || 'admin').trim();
    const password = String(b.password || '');
    if (!username || password.length < 6) return json({ error: 'بيانات غير مكتملة.' }, 400);
    const hash = await hashPw(password);
    const ex = await db.prepare('SELECT id FROM users WHERE username = ?').bind(username).first();
    if (ex) await db.prepare("UPDATE users SET full_name=?, password_hash=?, role_id=1, is_active=1, updated_at=datetime('now') WHERE id=?").bind(fullName, hash, ex.id).run();
    else await smartInsert(db, 'users', { full_name: fullName, username, password_hash: hash, role_id: DEFAULT_FK.role_id || 1, is_active: 1 }).run();
    return json({ success: true });
  }

  if (path === '/api/auth/login' && m === 'POST') {
    const secret = env.SESSION_SECRET || 'malaky_fallback_session_key_change_in_secrets';
    const b = await req.json();
    const u = await db.prepare('SELECT * FROM users WHERE username = ?').bind(String(b.username || '').trim()).first();
    if (!u || Number(u.is_active) !== 1 || !(await verifyPw(String(b.password || ''), u.password_hash))) return json({ error: 'بيانات الدخول غير صحيحة.' }, 401);
    const token = await signToken({ uid: u.id, exp: Date.now() + 604800000 }, secret);
    return json({ success: true, token }, 200, { 'Set-Cookie': 'malaky_session=' + encodeURIComponent(token) + '; Path=/; HttpOnly; SameSite=Lax; Max-Age=604800' });
  }

  if (path === '/api/auth/logout' && m === 'POST') {
    return json({ success: true }, 200, { 'Set-Cookie': 'malaky_session=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0' });
  }

  const user = await getAuthUser(req, env);
  if (!user) return json({ error: 'يرجى تسجيل الدخول أولًا.' }, 401);
  DEFAULT_FK.user_id = user.id;
  DEFAULT_FK.created_by = user.id;

  // 1. DASHBOARD
  if (path === '/api/dashboard' && m === 'GET') {
    const dt = url.searchParams.get('date') || today();
    const bRes = await db.batch([
      db.prepare("SELECT COALESCE(SUM(total_piasters),0) as v FROM sales_invoices WHERE status='posted' AND COALESCE(invoice_number,'') NOT LIKE 'DEBT-%' AND substr(invoice_date,1,10)=?").bind(dt),
      db.prepare("SELECT COALESCE(SUM(amount_piasters),0) as v FROM cash_movements WHERE direction='in' AND movement_type IN ('sale_collection','sales_collection','customer_payment') AND substr(movement_date,1,10)=?").bind(dt),
      db.prepare("SELECT COALESCE(SUM(amount_piasters),0) as v FROM expenses WHERE substr(expense_date,1,10)=?").bind(dt),
      db.prepare("SELECT COALESCE(SUM(total_piasters),0) as ts FROM sales_invoices WHERE status='posted' AND COALESCE(invoice_number,'') NOT LIKE 'DEBT-%'"),
      db.prepare("SELECT COALESCE(SUM(total_piasters - paid_piasters),0) as rem FROM sales_invoices WHERE status='posted' AND total_piasters > paid_piasters"),
      db.prepare(`
        SELECT COALESCE(SUM(
          sii.quantity_units * CASE
            WHEN COALESCE(sii.unit_cost_piasters, 0) > 0 THEN sii.unit_cost_piasters
            ELSE COALESCE((SELECT fs.average_cost_per_unit_piasters FROM finished_stock fs WHERE fs.product_id=sii.product_id AND fs.packaging_type_id=sii.packaging_type_id LIMIT 1), 0)
          END
        ), 0) as v
        FROM sales_invoice_items sii
        JOIN sales_invoices si ON si.id = sii.invoice_id
        WHERE si.status = 'posted' AND COALESCE(si.invoice_number,'') NOT LIKE 'DEBT-%'
      `),
      db.prepare("SELECT COALESCE(SUM(amount_piasters),0) as v FROM expenses WHERE COALESCE(affects_profit,1)=1"),
      db.prepare("SELECT COALESCE(SUM(ROUND((quantity_grams * average_cost_per_kg_piasters)/1000.0)),0) as v FROM raw_coffee_stock"),
      db.prepare("SELECT COALESCE(SUM(quantity_units * average_cost_per_unit_piasters),0) as v FROM packaging_stock"),
      db.prepare("SELECT COALESCE(SUM(quantity_units * average_cost_per_unit_piasters),0) as v FROM sticker_skus WHERE is_active=1"),
      db.prepare("SELECT COALESCE(SUM(quantity_units * average_cost_per_unit_piasters),0) as v FROM finished_stock"),
      db.prepare("SELECT COUNT(*) as c FROM coffee_products WHERE is_active=1"),
      db.prepare("SELECT si.*, COALESCE(c.name,'عميل نقدي') as customer_name FROM sales_invoices si LEFT JOIN customers c ON c.id=si.customer_id WHERE COALESCE(si.invoice_number,'') NOT LIKE 'DEBT-%' ORDER BY si.id DESC LIMIT 20")
    ]);
    const sToday = bRes[0]?.results?.[0];
    const cToday = bRes[1]?.results?.[0];
    const eToday = bRes[2]?.results?.[0];
    const sRevOnly = bRes[3]?.results?.[0];
    const allDebtsRow = bRes[4]?.results?.[0];
    const cogsTotal = bRes[5]?.results?.[0];
    const eProfit = bRes[6]?.results?.[0];
    const rawVal = bRes[7]?.results?.[0];
    const pkgVal = bRes[8]?.results?.[0];
    const stkVal = bRes[9]?.results?.[0];
    const finVal = bRes[10]?.results?.[0];
    const pCnt = bRes[11]?.results?.[0];
    const invs = bRes[12] || { results: [] };

    const totalSalesRev = Number(sRevOnly?.ts || 0);
    const totalFinalCogs = Number(cogsTotal?.v || 0);
    const totalExpenses = Number(eProfit?.v || 0);
    const grossProfit = totalSalesRev - totalFinalCogs;
    const netProfit = grossProfit - totalExpenses;

    return json({
      kpis: {
        sales_today: sToday?.v || 0,
        collections_today: cToday?.v || 0,
        expenses_today: eToday?.v || 0,
        total_sales_all: totalSalesRev,
        total_cogs_all: totalFinalCogs,
        gross_profit: grossProfit,
        total_expenses_all: totalExpenses,
        net_profit: netProfit,
        customer_debts: Math.max(0, Number(allDebtsRow?.rem || 0)),
        inventory_value: (rawVal?.v || 0) + (pkgVal?.v || 0) + (stkVal?.v || 0) + (finVal?.v || 0),
        products_count: pCnt?.c || 0
      },
      recent_invoices: invs.results || []
    });
  }

  // 2. PRODUCTS
  if (path === '/api/products' && m === 'GET') {
    const bRes = await db.batch([
      db.prepare('SELECT cp.*, COALESCE(rcs.quantity_grams,0) as raw_grams, COALESCE(rcs.average_cost_per_kg_piasters,0) as raw_cost_kg FROM coffee_products cp LEFT JOIN raw_coffee_stock rcs ON rcs.product_id=cp.id WHERE cp.is_active=1 ORDER BY cp.id DESC'),
      db.prepare('SELECT pt.id, pt.net_weight_grams, COALESCE(ps.average_cost_per_unit_piasters,0) as pkg_cost FROM packaging_types pt LEFT JOIN packaging_stock ps ON ps.packaging_type_id=pt.id'),
      db.prepare('SELECT product_id, packaging_type_id, quantity_units, average_cost_per_unit_piasters FROM sticker_skus WHERE is_active=1'),
      db.prepare('SELECT product_id, packaging_type_id, average_cost_per_unit_piasters FROM finished_stock'),
      db.prepare('SELECT ROUND(AVG(average_cost_per_kg_piasters)) as avg_cost FROM raw_coffee_stock WHERE average_cost_per_kg_piasters > 0'),
      db.prepare("SELECT unit_cost_piasters FROM purchase_items WHERE item_type='raw_coffee' AND unit_cost_piasters > 0 ORDER BY id DESC LIMIT 1")
    ]);
    const r = bRes[0];
    const pkRes = bRes[1];
    const stkRes = bRes[2];
    const finRes = bRes[3];
    const globalRawRow = bRes[4]?.results?.[0];
    const lastPurRaw = bRes[5]?.results?.[0];

    const pkgs = pkRes.results || [];
    const pk250 = pkgs.find(x => Number(x.net_weight_grams) === 250) || pkgs[0] || { id: 1, pkg_cost: 0 };
    const pk125 = pkgs.find(x => Number(x.net_weight_grams) === 125) || pkgs[1] || { id: 2, pkg_cost: 0 };
    const stks = stkRes.results || [];
    const fins = finRes.results || [];
    const fallbackRawKg = Number(globalRawRow?.avg_cost || 0) || Number(lastPurRaw?.unit_cost_piasters || 0);

    const enriched = (r.results || []).map(p => {
      const manualKg = Number(p.manual_final_cost_kg_piasters || 0);
      const effRawKg = Number(p.raw_cost_kg || 0) || fallbackRawKg;
      const stk250 = stks.find(s => Number(s.product_id) === Number(p.id) && Number(s.packaging_type_id) === Number(pk250.id));
      const stk125 = stks.find(s => Number(s.product_id) === Number(p.id) && Number(s.packaging_type_id) === Number(pk125.id));
      const fin250 = fins.find(f => Number(f.product_id) === Number(p.id) && Number(f.packaging_type_id) === Number(pk250.id));
      const fin125 = fins.find(f => Number(f.product_id) === Number(p.id) && Number(f.packaging_type_id) === Number(pk125.id));

      const stk250Cost = (stk250 && Number(stk250.quantity_units) > 0) ? Number(stk250.average_cost_per_unit_piasters || 0) : 0;
      const stk125Cost = (stk125 && Number(stk125.quantity_units) > 0) ? Number(stk125.average_cost_per_unit_piasters || 0) : 0;

      const calc250 = effRawKg > 0 ? (Math.round(effRawKg * 0.25) + Number(pk250.pkg_cost || 0) + stk250Cost) : 0;
      const calc125 = effRawKg > 0 ? (Math.round(effRawKg * 0.125) + Number(pk125.pkg_cost || 0) + stk125Cost) : 0;

      const final250 = manualKg > 0 ? Math.round(manualKg * 0.25) : Math.max(Number(fin250?.average_cost_per_unit_piasters || 0), calc250);
      const final125 = manualKg > 0 ? Math.round(manualKg * 0.125) : Math.max(Number(fin125?.average_cost_per_unit_piasters || 0), calc125);
      const finalKg = manualKg > 0 ? manualKg : (final250 * 4);

      return {
        ...p,
        effective_raw_cost_kg_piasters: effRawKg,
        final_cost_250_piasters: final250,
        final_cost_125_piasters: final125,
        final_cost_kg_piasters: finalKg
      };
    });

    return json({ products: enriched });
  }
  if (path === '/api/products' && m === 'POST') {
    const b = await req.json();
    const name = String(b.name || '').trim();
    const sku = String(b.sku || '').trim().toUpperCase() || ('MLK-' + Date.now().toString().slice(-4));
    if (!name) return json({ error: 'اسم الصنف مطلوب.' }, 400);
    const manualFinalKg = Math.max(0, Math.round(Number(b.manual_final_cost_kg_piasters || 0)));
    const pct1 = Number(b.profit_percent_1 || 0);
    const pct2 = Number(b.profit_percent_2 ?? pct1);
    let p1 = Math.round(Number(b.sale_price_1_piasters || 0));
    let p2 = Math.round(Number(b.sale_price_2_piasters || p1));
    if (p1 <= 0 && manualFinalKg > 0 && pct1 >= 0) {
      p1 = Math.round(manualFinalKg * (1 + (pct1 / 100)));
    }
    if (p2 <= 0) {
      p2 = (manualFinalKg > 0 && pct2 >= 0) ? Math.round(manualFinalKg * (1 + (pct2 / 100))) : p1;
    }
    const ins = await smartInsert(db, 'coffee_products', {
      sku, name, description: '',
      sale_price_1_piasters: p1, sale_price_2_piasters: p2,
      prev_sale_price_1_piasters: p1, prev_sale_price_2_piasters: p2,
      profit_percent_1: pct1, profit_percent_2: pct2,
      prev_profit_percent_1: pct1, prev_profit_percent_2: pct2,
      manual_final_cost_kg_piasters: manualFinalKg,
      is_active: 1
    }).run();
    const pid = ins.meta?.last_row_id;
    DEFAULT_FK.product_id = pid;
    await smartInsert(db, 'raw_coffee_stock', { product_id: pid, quantity_grams: 0, average_cost_per_kg_piasters: manualFinalKg }).run();
    const pts = await db.prepare('SELECT id, net_weight_grams FROM packaging_types').all();
    for (const pt of (pts.results || [])) {
      const uCost = manualFinalKg > 0 ? Math.round((manualFinalKg * Number(pt.net_weight_grams || 250)) / 1000) : 0;
      await smartInsert(db, 'finished_stock', { product_id: pid, packaging_type_id: pt.id, quantity_units: 0, average_cost_per_unit_piasters: uCost }).run();
      await smartInsert(db, 'sticker_skus', { product_id: pid, packaging_type_id: pt.id, sku: `STK-${pid}-${pt.id}`, quantity_units: 0, average_cost_per_unit_piasters: 500, is_active: 1 }).run();
    }
    stickersSynced = false;
    return json({ success: true, id: pid });
  }
  if (path.match(/^\/api\/products\/\d+$/) && m === 'PUT') {
    const id = toInt(path.split('/')[3]);
    const b = await req.json();
    const cur = await db.prepare('SELECT * FROM coffee_products WHERE id=?').bind(id).first();
    if (!cur) return json({ error: 'الصنف غير موجود.' }, 404);

    await pushPriceHistorySnapshot(db, 'تعديل صنف: ' + (cur.name || id));

    const manualFinalKg = b.manual_final_cost_kg_piasters !== undefined
      ? Math.max(0, Math.round(Number(b.manual_final_cost_kg_piasters || 0)))
      : Number(cur.manual_final_cost_kg_piasters || 0);
    const newPct1 = Number(b.profit_percent_1 || 0);
    const newPct2 = Number(b.profit_percent_2 ?? newPct1);
    let newP1 = Math.round(Number(b.sale_price_1_piasters || 0));
    let newP2 = Math.round(Number(b.sale_price_2_piasters || newP1));

    const baseKg = manualFinalKg > 0 ? manualFinalKg : (await resolveFinalKgCostPiasters(db, id));
    if (newP1 <= 0 && baseKg > 0 && newPct1 >= 0) {
      newP1 = Math.round(baseKg * (1 + (newPct1 / 100)));
    }
    if (newP2 <= 0) {
      newP2 = (baseKg > 0 && newPct2 >= 0) ? Math.round(baseKg * (1 + (newPct2 / 100))) : newP1;
    }

    const priceChanged = (Number(cur.sale_price_1_piasters) !== newP1) || (Number(cur.sale_price_2_piasters) !== newP2);
    const prevP1 = priceChanged ? Number(cur.sale_price_1_piasters || 0) : (Number(cur.prev_sale_price_1_piasters || 0) || Number(cur.sale_price_1_piasters || 0));
    const prevP2 = priceChanged ? Number(cur.sale_price_2_piasters || 0) : (Number(cur.prev_sale_price_2_piasters || 0) || Number(cur.sale_price_2_piasters || 0));
    const prevPct1 = priceChanged ? Number(cur.profit_percent_1 || 0) : Number(cur.prev_profit_percent_1 || 0);
    const prevPct2 = priceChanged ? Number(cur.profit_percent_2 || 0) : Number(cur.prev_profit_percent_2 || 0);

    await db.prepare(`
      UPDATE coffee_products
      SET name=?, sku=?,
          prev_sale_price_1_piasters=?, prev_sale_price_2_piasters=?,
          prev_profit_percent_1=?, prev_profit_percent_2=?,
          sale_price_1_piasters=?, sale_price_2_piasters=?,
          profit_percent_1=?, profit_percent_2=?,
          manual_final_cost_kg_piasters=?,
          updated_at=datetime('now')
      WHERE id=?
    `).bind(
      String(b.name || cur.name || '').trim(),
      String(b.sku || cur.sku || '').trim().toUpperCase(),
      prevP1, prevP2, prevPct1, prevPct2,
      newP1, newP2, newPct1, newPct2,
      manualFinalKg,
      id
    ).run();
    return json({ success: true });
  }
  if (path.match(/^\/api\/products\/\d+\/apply-profit-percent$/) && m === 'POST') {
    const id = toInt(path.split('/')[3]);
    const b = await req.json();
    const targetTier = String(b.target_tier || '1');
    const cur = await db.prepare('SELECT * FROM coffee_products WHERE id=?').bind(id).first();
    if (!cur) return json({ error: 'الصنف غير موجود.' }, 404);

    await pushPriceHistorySnapshot(db, 'تعديل نسبة صنف: ' + (cur.name || id));

    let finalKgCost = Math.round(Number(b.manual_final_cost_kg_piasters || 0));
    if (finalKgCost <= 0) finalKgCost = await resolveFinalKgCostPiasters(db, id);
    if (finalKgCost <= 0) finalKgCost = Number(cur.sale_price_1_piasters || 0);
    if (finalKgCost <= 0) return json({ error: 'حدد التكلفة النهائية للكيلو أولًا لحساب النسبة.' }, 400);

    if (targetTier === '2') {
      const pct2 = Number(b.profit_percent_2 ?? b.profit_percent);
      if (Number.isNaN(pct2) || pct2 < 0) return json({ error: 'أدخل نسبة ربح صحيحة للسعر الثاني.' }, 400);
      const newP2 = Math.round(finalKgCost * (1 + (pct2 / 100)));
      await db.prepare(`
        UPDATE coffee_products
        SET prev_sale_price_2_piasters = CASE WHEN sale_price_2_piasters > 0 THEN sale_price_2_piasters ELSE prev_sale_price_2_piasters END,
            prev_profit_percent_2 = profit_percent_2,
            sale_price_2_piasters = ?,
            profit_percent_2 = ?,
            updated_at = datetime('now')
        WHERE id = ?
      `).bind(newP2, pct2, id).run();
      return json({ success: true, new_sale_price_2_piasters: newP2, final_cost_kg_piasters: finalKgCost });
    }

    const pct1 = Number(b.profit_percent_1 ?? b.profit_percent);
    if (Number.isNaN(pct1) || pct1 < 0) return json({ error: 'أدخل نسبة ربح صحيحة للسعر الأول.' }, 400);
    const newP1 = Math.round(finalKgCost * (1 + (pct1 / 100)));
    await db.prepare(`
      UPDATE coffee_products
      SET prev_sale_price_1_piasters = CASE WHEN sale_price_1_piasters > 0 THEN sale_price_1_piasters ELSE prev_sale_price_1_piasters END,
          prev_profit_percent_1 = profit_percent_1,
          sale_price_1_piasters = ?,
          profit_percent_1 = ?,
          updated_at = datetime('now')
      WHERE id = ?
    `).bind(newP1, pct1, id).run();
    return json({ success: true, new_sale_price_1_piasters: newP1, final_cost_kg_piasters: finalKgCost });
  }
  if (path === '/api/products/bulk-profit-percent' && m === 'POST') {
    const b = await req.json();
    const targetTier = String(b.target_tier || '1');
    const fallbackManualKg = Math.max(0, Math.round(Number(b.fallback_final_cost_kg_piasters || 0)));

    const prods = (await db.prepare('SELECT * FROM coffee_products WHERE is_active=1').all()).results || [];
    const stmts = [];
    let updatedCount = 0;
    let skippedNoCostCount = 0;

    if (targetTier === '2') {
      const pct2 = Number(b.profit_percent_2 ?? b.profit_percent);
      if (Number.isNaN(pct2) || pct2 < 0) return json({ error: 'أدخل نسبة ربح صحيحة للسعر رقم 2.' }, 400);
      await pushPriceHistorySnapshot(db, 'تسعير جماعي للسعر (2) بنسبة ' + pct2 + '%');

      for (const p of prods) {
        let finalKgCost = await resolveFinalKgCostPiasters(db, p.id);
        if (finalKgCost <= 0 && fallbackManualKg > 0) finalKgCost = fallbackManualKg;
        if (finalKgCost <= 0 && Number(p.sale_price_2_piasters || p.sale_price_1_piasters || 0) > 0) {
          finalKgCost = Number(p.sale_price_2_piasters || p.sale_price_1_piasters);
        }
        if (finalKgCost <= 0) {
          skippedNoCostCount++;
          continue;
        }
        const newP2 = Math.round(finalKgCost * (1 + (pct2 / 100)));
        stmts.push(db.prepare(`
          UPDATE coffee_products
          SET prev_sale_price_2_piasters = CASE WHEN sale_price_2_piasters > 0 THEN sale_price_2_piasters ELSE ? END,
              prev_profit_percent_2 = profit_percent_2,
              sale_price_2_piasters = ?,
              profit_percent_2 = ?,
              updated_at = datetime('now')
          WHERE id = ?
        `).bind(newP2, newP2, pct2, p.id));
        updatedCount++;
      }
      if (stmts.length) await db.batch(stmts);
      return json({ success: true, target_tier: '2', updatedCount, skippedNoCostCount });
    }

    const pct1 = Number(b.profit_percent_1 ?? b.profit_percent);
    if (Number.isNaN(pct1) || pct1 < 0) return json({ error: 'أدخل نسبة ربح صحيحة للسعر رقم 1.' }, 400);
    await pushPriceHistorySnapshot(db, 'تسعير جماعي للسعر (1) بنسبة ' + pct1 + '%');

    for (const p of prods) {
      let finalKgCost = await resolveFinalKgCostPiasters(db, p.id);
      if (finalKgCost <= 0 && fallbackManualKg > 0) finalKgCost = fallbackManualKg;
      if (finalKgCost <= 0 && Number(p.sale_price_1_piasters || 0) > 0) finalKgCost = Number(p.sale_price_1_piasters);
      if (finalKgCost <= 0) {
        skippedNoCostCount++;
        continue;
      }
      const newP1 = Math.round(finalKgCost * (1 + (pct1 / 100)));
      stmts.push(db.prepare(`
        UPDATE coffee_products
        SET prev_sale_price_1_piasters = CASE WHEN sale_price_1_piasters > 0 THEN sale_price_1_piasters ELSE ? END,
            prev_profit_percent_1 = profit_percent_1,
            sale_price_1_piasters = ?,
            profit_percent_1 = ?,
            updated_at = datetime('now')
        WHERE id = ?
      `).bind(newP1, newP1, pct1, p.id));
      updatedCount++;
    }
    if (stmts.length) await db.batch(stmts);
    return json({ success: true, target_tier: '1', updatedCount, skippedNoCostCount });
  }
  if (path === '/api/products/revert-all-prices' && m === 'POST') {
    let b = {};
    try { b = await req.json(); } catch (_) {}
    const clientSnap = Array.isArray(b.snapshot_items) ? b.snapshot_items : null;

    const row = await db.prepare("SELECT setting_value FROM settings WHERE setting_key='price_history_stack_json'").first();
    let stack = [];
    if (row && row.setting_value) {
      try { stack = JSON.parse(row.setting_value) || []; } catch (_) { stack = []; }
    }

    const stmts = [];
    if (stack.length > 0) {
      const lastSnap = stack.pop();
      for (const item of (lastSnap.items || [])) {
        if (Number(item.p1) > 0) {
          stmts.push(db.prepare(`
            UPDATE coffee_products
            SET prev_sale_price_1_piasters = sale_price_1_piasters,
                prev_sale_price_2_piasters = sale_price_2_piasters,
                prev_profit_percent_1 = profit_percent_1,
                prev_profit_percent_2 = profit_percent_2,
                sale_price_1_piasters = ?,
                sale_price_2_piasters = ?,
                profit_percent_1 = ?,
                profit_percent_2 = ?,
                updated_at = datetime('now')
            WHERE id = ?
          `).bind(item.p1, item.p2 || item.p1, item.pct1 || 0, item.pct2 || 0, item.id));
        }
      }
      stmts.push(db.prepare("UPDATE settings SET setting_value=?, updated_at=datetime('now') WHERE setting_key='price_history_stack_json'").bind(JSON.stringify(stack)));
    } else if (clientSnap && clientSnap.length > 0) {
      for (const item of clientSnap) {
        if (Number(item.p1) > 0) {
          stmts.push(db.prepare(`
            UPDATE coffee_products
            SET prev_sale_price_1_piasters = sale_price_1_piasters,
                prev_sale_price_2_piasters = sale_price_2_piasters,
                sale_price_1_piasters = ?,
                sale_price_2_piasters = ?,
                profit_percent_1 = ?,
                profit_percent_2 = ?,
                updated_at = datetime('now')
            WHERE id = ?
          `).bind(item.p1, item.p2 || item.p1, item.pct1 || 0, item.pct2 || 0, item.id));
        }
      }
    } else {
      const prods = (await db.prepare('SELECT * FROM coffee_products WHERE is_active=1 AND COALESCE(prev_sale_price_1_piasters, 0) > 0').all()).results || [];
      for (const p of prods) {
        stmts.push(db.prepare(`
          UPDATE coffee_products
          SET sale_price_1_piasters = prev_sale_price_1_piasters,
              sale_price_2_piasters = CASE WHEN COALESCE(prev_sale_price_2_piasters,0) > 0 THEN prev_sale_price_2_piasters ELSE prev_sale_price_1_piasters END,
              profit_percent_1 = COALESCE(prev_profit_percent_1, 0),
              profit_percent_2 = COALESCE(prev_profit_percent_2, 0),
              prev_sale_price_1_piasters = ?,
              prev_sale_price_2_piasters = ?,
              prev_profit_percent_1 = ?,
              prev_profit_percent_2 = ?,
              updated_at = datetime('now')
          WHERE id = ?
        `).bind(
          Number(p.sale_price_1_piasters || 0),
          Number(p.sale_price_2_piasters || 0),
          Number(p.profit_percent_1 || 0),
          Number(p.profit_percent_2 || 0),
          p.id
        ));
      }
    }
    if (!stmts.length) return json({ error: 'لا توجد تعديلات سابقة للتراجع عنها.' }, 400);
    await db.batch(stmts);
    return json({ success: true, revertedCount: stmts.length });
  }
  if (path.match(/^\/api\/products\/\d+\/revert-price$/) && m === 'POST') {
    const id = toInt(path.split('/')[3]);
    let b = {};
    try { b = await req.json(); } catch (_) {}
    const p = await db.prepare('SELECT * FROM coffee_products WHERE id=?').bind(id).first();
    if (!p) return json({ error: 'الصنف غير موجود.' }, 404);
    const targetP1 = Number(p.prev_sale_price_1_piasters || 0) > 0 ? Number(p.prev_sale_price_1_piasters) : Number(b.fallback_p1 || 0);
    const targetP2 = Number(p.prev_sale_price_2_piasters || 0) > 0 ? Number(p.prev_sale_price_2_piasters) : (Number(b.fallback_p2 || 0) || targetP1);
    if (targetP1 <= 0) {
      return json({ error: 'لا يوجد سعر سابق مختلف لهذا الصنف.' }, 400);
    }
    await db.prepare(`
      UPDATE coffee_products
      SET sale_price_1_piasters = ?,
          sale_price_2_piasters = ?,
          profit_percent_1 = COALESCE(prev_profit_percent_1, 0),
          profit_percent_2 = COALESCE(prev_profit_percent_2, 0),
          prev_sale_price_1_piasters = ?,
          prev_sale_price_2_piasters = ?,
          prev_profit_percent_1 = ?,
          prev_profit_percent_2 = ?,
          updated_at = datetime('now')
      WHERE id = ?
    `).bind(
      targetP1,
      targetP2,
      Number(p.sale_price_1_piasters || 0),
      Number(p.sale_price_2_piasters || 0),
      Number(p.profit_percent_1 || 0),
      Number(p.profit_percent_2 || 0),
      id
    ).run();
    return json({ success: true, restored_p1: targetP1, restored_p2: targetP2 });
  }
  if (path.match(/^\/api\/products\/\d+$/) && m === 'DELETE') {
    const id = toInt(path.split('/')[3]);
    await db.batch([
      db.prepare('DELETE FROM finished_stock WHERE product_id=?').bind(id),
      db.prepare('DELETE FROM raw_coffee_stock WHERE product_id=?').bind(id),
      db.prepare('DELETE FROM sticker_skus WHERE product_id=?').bind(id),
      db.prepare('DELETE FROM coffee_products WHERE id=?').bind(id)
    ]);
    return json({ success: true });
  }

  // 3. INVENTORY
  if (path === '/api/inventory' && m === 'GET') {
    await syncProductStickerSkus(db);
    const [raw, pkg, stk, fin] = await db.batch([
      db.prepare('SELECT cp.id as product_id, cp.sku, cp.name, COALESCE(r.quantity_grams,0) as quantity_grams, COALESCE(r.average_cost_per_kg_piasters,0) as average_cost_per_kg_piasters FROM coffee_products cp LEFT JOIN raw_coffee_stock r ON r.product_id=cp.id WHERE cp.is_active=1 ORDER BY COALESCE(r.quantity_grams,0) DESC, cp.id ASC'),
      db.prepare('SELECT pt.id as packaging_type_id, pt.name, pt.net_weight_grams, COALESCE(p.quantity_units,0) as quantity_units, COALESCE(p.average_cost_per_unit_piasters,0) as average_cost_per_unit_piasters FROM packaging_types pt LEFT JOIN packaging_stock p ON p.packaging_type_id=pt.id ORDER BY pt.net_weight_grams DESC'),
      db.prepare('SELECT ss.*, cp.name as product_name, pt.name as packaging_name, pt.net_weight_grams FROM sticker_skus ss JOIN coffee_products cp ON cp.id=ss.product_id JOIN packaging_types pt ON pt.id=ss.packaging_type_id WHERE ss.is_active=1 AND cp.is_active=1 ORDER BY cp.id ASC, pt.net_weight_grams DESC'),
      db.prepare('SELECT cp.id as product_id, cp.name as product_name, cp.sale_price_1_piasters, cp.sale_price_2_piasters, pt.id as packaging_type_id, pt.name as packaging_name, pt.net_weight_grams, COALESCE(fs.quantity_units,0) as quantity_units, COALESCE(fs.average_cost_per_unit_piasters,0) as average_cost_per_unit_piasters FROM coffee_products cp CROSS JOIN packaging_types pt LEFT JOIN finished_stock fs ON fs.product_id=cp.id AND fs.packaging_type_id=pt.id WHERE cp.is_active=1 AND pt.is_active=1 ORDER BY COALESCE(fs.quantity_units,0) DESC, cp.id ASC, pt.net_weight_grams DESC')
    ]);
    return json({ raw: raw.results || [], packaging: pkg.results || [], stickers: stk.results || [], finished: fin.results || [] });
  }

  if (path === '/api/inventory/unified-adjust' && m === 'POST') {
    const b = await req.json();
    const stockType = b.stock_type;
    const mode = b.mode || 'set';

    if (stockType === 'finished') {
      const pid = toFk(b.product_id);
      if (!pid) return json({ error: 'يرجى اختيار صنف البن أولًا.' }, 400);
      const q250 = Math.max(0, Math.round(Number(b.qty_250 || 0)));
      const q125 = Math.max(0, Math.round(Number(b.qty_125 || 0)));

      if (mode === 'pack') {
        const pkgs = (await db.prepare('SELECT id, net_weight_grams FROM packaging_types').all()).results || [];
        const pk250 = pkgs.find(x => Number(x.net_weight_grams) === 250);
        const pk125 = pkgs.find(x => Number(x.net_weight_grams) === 125);
        const stk250Val = b.sticker_sku_id_250;
        const stk125Val = b.sticker_sku_id_125;
        const items = [];
        if (pk250 && q250 > 0) {
          const noStk250 = (stk250Val === 'none' || stk250Val === 0 || stk250Val === '0');
          items.push({ packaging_type_id: pk250.id, quantity_units: q250, no_sticker: noStk250, sticker_sku_id: noStk250 ? null : toFk(stk250Val) });
        }
        if (pk125 && q125 > 0) {
          const noStk125 = (stk125Val === 'none' || stk125Val === 0 || stk125Val === '0');
          items.push({ packaging_type_id: pk125.id, quantity_units: q125, no_sticker: noStk125, sticker_sku_id: noStk125 ? null : toFk(stk125Val) });
        }
        if (!items.length) return json({ error: 'أدخل عدد برطمانات الربع أو الثمن المراد تعبئتها.' }, 400);
        return await createAndPostProductionBatch(db, user, {
          product_id: pid,
          items,
          override_cost_per_kg_piasters: Math.max(0, Math.round(Number(b.cost_per_kg_piasters || 0))),
          production_date: today(),
          notes: 'تعبئة من شاشة المخزون'
        });
      }

      const costPerKgPiasters = Math.max(0, Math.round(Number(b.cost_per_kg_piasters || 0)));
      const pkgs = (await db.prepare('SELECT id, net_weight_grams FROM packaging_types').all()).results || [];
      const pk250 = pkgs.find(x => Number(x.net_weight_grams) === 250);
      const pk125 = pkgs.find(x => Number(x.net_weight_grams) === 125);
      const stmts = [];

      if (pk250) {
        const cur250 = await db.prepare('SELECT * FROM finished_stock WHERE product_id=? AND packaging_type_id=?').bind(pid, pk250.id).first();
        const pkgS250 = await db.prepare('SELECT average_cost_per_unit_piasters FROM packaging_stock WHERE packaging_type_id=?').bind(pk250.id).first();
        const stkS250 = await db.prepare('SELECT average_cost_per_unit_piasters, quantity_units FROM sticker_skus WHERE product_id=? AND packaging_type_id=?').bind(pid, pk250.id).first();
        const addPkg250 = Number(pkgS250?.average_cost_per_unit_piasters || 0);
        const addStk250 = Number(stkS250?.quantity_units || 0) > 0 ? Number(stkS250?.average_cost_per_unit_piasters || 0) : 0;
        const cost250 = costPerKgPiasters > 0 ? (Math.round(costPerKgPiasters * 0.25) + addPkg250 + addStk250) : Number(cur250?.average_cost_per_unit_piasters || 0);
        const final250 = mode === 'add' ? (Number(cur250?.quantity_units || 0) + q250) : q250;
        stmts.push(
          cur250 ? db.prepare("UPDATE finished_stock SET quantity_units=?, average_cost_per_unit_piasters=?, updated_at=datetime('now') WHERE product_id=? AND packaging_type_id=?").bind(final250, cost250, pid, pk250.id)
                 : smartInsert(db, 'finished_stock', { product_id: pid, packaging_type_id: pk250.id, quantity_units: final250, average_cost_per_unit_piasters: cost250 }),
          prepStockMove(db, { stock_type: 'finished', product_id: pid, packaging_type_id: pk250.id, quantity_delta: final250, unit_cost_piasters: cost250, movement_reason: 'opening', notes: 'رصيد افتتاحي معبأ ربع كيلو (0.25 كجم)', created_by: user.id })
        );
      }

      if (pk125) {
        const cur125 = await db.prepare('SELECT * FROM finished_stock WHERE product_id=? AND packaging_type_id=?').bind(pid, pk125.id).first();
        const pkgS125 = await db.prepare('SELECT average_cost_per_unit_piasters FROM packaging_stock WHERE packaging_type_id=?').bind(pk125.id).first();
        const stkS125 = await db.prepare('SELECT average_cost_per_unit_piasters, quantity_units FROM sticker_skus WHERE product_id=? AND packaging_type_id=?').bind(pid, pk125.id).first();
        const addPkg125 = Number(pkgS125?.average_cost_per_unit_piasters || 0);
        const addStk125 = Number(stkS125?.quantity_units || 0) > 0 ? Number(stkS125?.average_cost_per_unit_piasters || 0) : 0;
        const cost125 = costPerKgPiasters > 0 ? (Math.round(costPerKgPiasters * 0.125) + addPkg125 + addStk125) : Number(cur125?.average_cost_per_unit_piasters || 0);
        const final125 = mode === 'add' ? (Number(cur125?.quantity_units || 0) + q125) : q125;
        stmts.push(
          cur125 ? db.prepare("UPDATE finished_stock SET quantity_units=?, average_cost_per_unit_piasters=?, updated_at=datetime('now') WHERE product_id=? AND packaging_type_id=?").bind(final125, cost125, pid, pk125.id)
                 : smartInsert(db, 'finished_stock', { product_id: pid, packaging_type_id: pk125.id, quantity_units: final125, average_cost_per_unit_piasters: cost125 }),
          prepStockMove(db, { stock_type: 'finished', product_id: pid, packaging_type_id: pk125.id, quantity_delta: final125, unit_cost_piasters: cost125, movement_reason: 'opening', notes: 'رصيد افتتاحي معبأ ثمن كيلو (0.125 كجم)', created_by: user.id })
        );
      }

      if (stmts.length) await db.batch(stmts);
      return json({ success: true });
    }

    if (stockType === 'raw_coffee') {
      const pid = toFk(b.product_id);
      if (!pid) return json({ error: 'يرجى اختيار صنف البن أولًا.' }, 400);
      const weightGrams = Math.max(0, Math.round(Number(b.weight_grams || 0)));
      const costPerKgPiasters = Math.max(0, Math.round(Number(b.cost_per_kg_piasters || 0)));
      const cur = await db.prepare('SELECT * FROM raw_coffee_stock WHERE product_id=?').bind(pid).first();
      const finalGrams = mode === 'add' ? (Number(cur?.quantity_grams || 0) + weightGrams) : weightGrams;
      const finalCost = costPerKgPiasters > 0 ? costPerKgPiasters : Number(cur?.average_cost_per_kg_piasters || 0);
      await db.batch([
        cur ? db.prepare("UPDATE raw_coffee_stock SET quantity_grams=?, average_cost_per_kg_piasters=?, updated_at=datetime('now') WHERE product_id=?").bind(finalGrams, finalCost, pid)
            : smartInsert(db, 'raw_coffee_stock', { product_id: pid, quantity_grams: finalGrams, average_cost_per_kg_piasters: finalCost }),
        prepStockMove(db, { stock_type: 'raw_coffee', product_id: pid, quantity_delta: finalGrams, unit_cost_piasters: finalCost, movement_reason: 'opening', notes: 'رصيد بن خام بالوزن', created_by: user.id })
      ]);
      return json({ success: true });
    }

    if (stockType === 'packaging') {
      const pkid = toFk(b.packaging_type_id);
      const qty = Math.max(0, Math.round(Number(b.new_quantity || 0)));
      const cost = Math.max(0, Math.round(Number(b.unit_cost_piasters || 0)));
      const cur = await db.prepare('SELECT * FROM packaging_stock WHERE packaging_type_id=?').bind(pkid).first();
      const finalQty = mode === 'add' ? (Number(cur?.quantity_units || 0) + qty) : qty;
      const finalCost = cost > 0 ? cost : Number(cur?.average_cost_per_unit_piasters || 0);
      if (cur) {
        await db.prepare("UPDATE packaging_stock SET quantity_units=?, average_cost_per_unit_piasters=?, updated_at=datetime('now') WHERE packaging_type_id=?").bind(finalQty, finalCost, pkid).run();
      } else {
        await smartInsert(db, 'packaging_stock', { packaging_type_id: pkid, quantity_units: finalQty, average_cost_per_unit_piasters: finalCost }).run();
      }
      return json({ success: true });
    }

    if (stockType === 'sticker') {
      const pid = toFk(b.product_id), pkid = toFk(b.packaging_type_id);
      const qty = Math.max(0, Math.round(Number(b.new_quantity || 0)));
      const cost = Math.max(0, Math.round(Number(b.unit_cost_piasters || 0)));
      const sku = 'STK-' + pid + '-' + pkid;
      const ex = await db.prepare('SELECT * FROM sticker_skus WHERE product_id=? AND packaging_type_id=?').bind(pid, pkid).first();
      const finalQty = mode === 'add' ? (Number(ex?.quantity_units || 0) + qty) : qty;
      const finalCost = cost > 0 ? cost : Number(ex?.average_cost_per_unit_piasters || 500);
      if (ex) await db.prepare('UPDATE sticker_skus SET quantity_units=?, average_cost_per_unit_piasters=?, is_active=1 WHERE id=?').bind(finalQty, finalCost, ex.id).run();
      else await smartInsert(db, 'sticker_skus', { product_id: pid, packaging_type_id: pkid, sku, quantity_units: finalQty, average_cost_per_unit_piasters: finalCost, is_active: 1 }).run();
      return json({ success: true });
    }

    return json({ error: 'نوع المخزون غير معروف' }, 400);
  }

  if (path === '/api/inventory/sticker-sku' && m === 'POST') {
    const b = await req.json();
    const pid = toFk(b.product_id), pkid = toFk(b.packaging_type_id);
    const qty = Math.max(0, Math.round(Number(b.quantity_units || 0)));
    const cost = Math.max(0, Math.round(Number(b.unit_cost_piasters || 0)));
    const mode = b.mode || 'set';
    const sku = String(b.sku || '').trim().toUpperCase() || ('STK-' + pid + '-' + pkid);
    if (!pid || !pkid) return json({ error: 'اختر الصنف والعبوة.' }, 400);
    const ex = await db.prepare('SELECT * FROM sticker_skus WHERE product_id=? AND packaging_type_id=?').bind(pid, pkid).first();
    if (ex) {
      const finalQty = mode === 'add' ? (Number(ex.quantity_units || 0) + qty) : qty;
      const finalCost = cost > 0 ? cost : Number(ex.average_cost_per_unit_piasters || 0);
      await db.prepare('UPDATE sticker_skus SET sku=?, quantity_units=?, average_cost_per_unit_piasters=?, is_active=1 WHERE id=?').bind(sku, finalQty, finalCost, ex.id).run();
      return json({ success: true, id: ex.id });
    }
    await smartInsert(db, 'sticker_skus', { product_id: pid, packaging_type_id: pkid, sku, quantity_units: qty, average_cost_per_unit_piasters: cost, is_active: 1 }).run();
    return json({ success: true });
  }

  if (path.match(/^\/api\/inventory\/sticker-sku\/\d+$/) && m === 'DELETE') {
    await db.prepare('UPDATE sticker_skus SET quantity_units=0 WHERE id=?').bind(toInt(path.split('/')[4])).run();
    return json({ success: true });
  }

  // 4. PURCHASES
  if (path === '/api/purchases' && m === 'GET') {
    const r = await db.prepare("SELECT p.*, p.purchase_number, COALESCE(s.name,'مورد عام') as supplier_name FROM purchases p LEFT JOIN suppliers s ON s.id=p.supplier_id ORDER BY p.id DESC LIMIT 150").all();
    return json({ purchases: r.results || [] });
  }
  if (path.match(/^\/api\/purchases\/\d+$/) && m === 'GET') {
    const id = toInt(path.split('/')[3]);
    const pur = await db.prepare("SELECT p.*, p.purchase_number, COALESCE(s.name,'مورد عام') as supplier_name FROM purchases p LEFT JOIN suppliers s ON s.id=p.supplier_id WHERE p.id=?").bind(id).first();
    const items = await db.prepare("SELECT pi.*, cp.name as product_name, pt.name as packaging_name FROM purchase_items pi LEFT JOIN coffee_products cp ON cp.id=pi.product_id LEFT JOIN packaging_types pt ON pt.id=pi.packaging_type_id WHERE pi.purchase_id=?").bind(id).all();
    return json({ purchase: pur, items: items.results || [] });
  }
  if (path === '/api/purchases' && m === 'POST') {
    const b = await req.json();
    const items = Array.isArray(b.items) ? b.items : [];
    if (!items.length) return json({ error: 'أضف بندًا واحدًا على الأقل.' }, 400);
    let sub = 0;
    const norm = [];
    for (const it of items) {
      const q = Math.round(Number(it.quantity || 0)), uc = Math.round(Number(it.unit_cost_piasters || 0));
      if (q <= 0) return json({ error: 'الوزن أو الكمية يجب أن تكون أكبر من صفر.' }, 400);
      const lt = it.item_type === 'raw_coffee' ? Math.round((q * uc) / 1000) : (q * uc);
      sub += lt;
      norm.push({ ...it, quantity: q, unit_cost_piasters: uc, line_total_piasters: lt });
    }
    const disc = Math.max(0, Math.round(Number(b.discount_piasters || 0)));
    const tot = Math.max(0, sub - disc);
    const paid = Math.max(0, Math.round(Number(b.paid_piasters || 0)));
    const pNum = String(b.purchase_number || ('PUR-' + Date.now().toString().slice(-6)));

    let supId = toFk(b.supplier_id) || DEFAULT_FK.supplier_id;
    if (!supId) {
      const sIns = await smartInsert(db, 'suppliers', { name: 'مورد عام / نقدي', phone: '', address: '', notes: '' }).run();
      supId = sIns.meta?.last_row_id;
      DEFAULT_FK.supplier_id = supId;
    }

    const ins = await smartInsert(db, 'purchases', {
      purchase_number: pNum,
      supplier_id: supId,
      purchase_date: b.purchase_date || today(),
      status: 'draft',
      subtotal_piasters: sub,
      discount_piasters: disc,
      total_piasters: tot,
      paid_piasters: paid,
      notes: String(b.notes || ''),
      created_by: user.id
    }).run();
    const pid = ins.meta?.last_row_id;
    await db.batch(norm.map(n => smartInsert(db, 'purchase_items', {
      purchase_id: pid,
      item_type: n.item_type,
      product_id: toFk(n.product_id),
      packaging_type_id: toFk(n.packaging_type_id),
      sticker_sku_id: toFk(n.sticker_sku_id),
      quantity: n.quantity,
      raw_coffee_grams: n.quantity,
      unit_cost_piasters: n.unit_cost_piasters,
      line_total_piasters: n.line_total_piasters,
      notes: String(n.product_name || '')
    })));
    return await postPurchase(db, user, pid);
  }
  if (path.match(/^\/api\/purchases\/\d+$/) && m === 'DELETE') {
    const id = toInt(path.split('/')[3]);
    const rev = await buildReverseStockStatements(db, 'purchase', id);
    const stmts = [...rev.stmts];
    stmts.push(db.prepare("DELETE FROM cash_movements WHERE reference_type='purchase' AND reference_id=?").bind(id));
    stmts.push(db.prepare('DELETE FROM purchase_items WHERE purchase_id=?').bind(id));
    stmts.push(db.prepare('DELETE FROM purchases WHERE id=?').bind(id));
    await db.batch(stmts);
    return json({ success: true });
  }

  // 5. PRODUCTION
  if (path === '/api/production' && m === 'GET') {
    const r = await db.prepare('SELECT pb.*, pb.batch_number, cp.name as product_name FROM production_batches pb JOIN coffee_products cp ON cp.id=pb.product_id ORDER BY pb.id DESC LIMIT 150').all();
    return json({ batches: r.results || [] });
  }
  if (path.match(/^\/api\/production\/\d+$/) && m === 'GET') {
    const id = toInt(path.split('/')[3]);
    const batch = await db.prepare('SELECT pb.*, pb.batch_number, cp.name as product_name FROM production_batches pb JOIN coffee_products cp ON cp.id=pb.product_id WHERE pb.id=?').bind(id).first();
    const items = await db.prepare('SELECT pi.*, pt.name as packaging_name, pt.net_weight_grams, ss.sku as sticker_sku, cp_stk.name as sticker_product_name FROM production_items pi JOIN packaging_types pt ON pt.id=pi.packaging_type_id LEFT JOIN sticker_skus ss ON ss.id=pi.sticker_sku_id LEFT JOIN coffee_products cp_stk ON cp_stk.id=ss.product_id WHERE pi.batch_id=?').bind(id).all();
    return json({ batch, items: items.results || [] });
  }
  if (path === '/api/production' && m === 'POST') {
    const b = await req.json();
    return await createAndPostProductionBatch(db, user, b);
  }
  if (path.match(/^\/api\/production\/\d+$/) && m === 'DELETE') {
    const id = toInt(path.split('/')[3]);
    const rev = await buildReverseStockStatements(db, 'production_batch', id);
    const stmts = [...rev.stmts];
    if (!rev.hadMovements) {
      const b = await db.prepare('SELECT * FROM production_batches WHERE id=?').bind(id).first();
      const items = (await db.prepare('SELECT * FROM production_items WHERE batch_id=?').bind(id).all()).results || [];
      if (b) {
        for (const it of items) {
          stmts.push(db.prepare("UPDATE finished_stock SET quantity_units = MAX(0, quantity_units - ?), updated_at=datetime('now') WHERE product_id=? AND packaging_type_id=?").bind(Number(it.quantity_units || 0), b.product_id, it.packaging_type_id));
        }
      }
    }
    stmts.push(db.prepare('DELETE FROM production_items WHERE batch_id=?').bind(id));
    stmts.push(db.prepare('DELETE FROM production_batches WHERE id=?').bind(id));
    await db.batch(stmts);
    return json({ success: true });
  }

  // 6. SALES & INVOICES
  if (path === '/api/sales' && m === 'GET') {
    const r = await db.prepare(`
      SELECT si.*, si.invoice_number,
        COALESCE(c.name,'عميل نقدي') as customer_name,
        c.phone as customer_phone,
        COALESCE((
          SELECT SUM(sii.quantity_units * CASE
            WHEN COALESCE(sii.unit_cost_piasters,0) > 0 THEN sii.unit_cost_piasters
            ELSE COALESCE((SELECT fs.average_cost_per_unit_piasters FROM finished_stock fs WHERE fs.product_id=sii.product_id AND fs.packaging_type_id=sii.packaging_type_id LIMIT 1), 0)
          END)
          FROM sales_invoice_items sii WHERE sii.invoice_id = si.id
        ), 0) as total_cost_piasters
      FROM sales_invoices si
      LEFT JOIN customers c ON c.id=si.customer_id
      WHERE COALESCE(si.invoice_number, '') NOT LIKE 'DEBT-%'
      ORDER BY si.id DESC LIMIT 150
    `).all();
    return json({ invoices: r.results || [] });
  }
  if (path.match(/^\/api\/sales\/\d+$/) && m === 'GET') {
    const id = toInt(path.split('/')[3]);
    const inv = await db.prepare("SELECT si.*, si.invoice_number, COALESCE(c.name,'عميل نقدي') as customer_name, c.phone as customer_phone, COALESCE(NULLIF(si.customer_address,''), c.address, '') as customer_address FROM sales_invoices si LEFT JOIN customers c ON c.id=si.customer_id WHERE si.id=?").bind(id).first();
    const items = await db.prepare('SELECT sii.*, cp.name as product_name, pt.name as packaging_name, pt.net_weight_grams FROM sales_invoice_items sii JOIN coffee_products cp ON cp.id=sii.product_id JOIN packaging_types pt ON pt.id=sii.packaging_type_id WHERE sii.invoice_id=?').bind(id).all();
    return json({ invoice: inv, items: items.results || [] });
  }
  if (path === '/api/sales' && m === 'POST') {
    const b = await req.json();
    let cid = toFk(b.customer_id);
    const custAddr = String(b.new_customer_address || '').trim();
    if (!cid && b.new_customer_name) {
      const ci = await smartInsert(db, 'customers', { name: String(b.new_customer_name).trim(), phone: String(b.new_customer_phone || ''), address: custAddr }).run();
      cid = ci.meta?.last_row_id;
    } else if (cid && custAddr) {
      try { await db.prepare("UPDATE customers SET address=? WHERE id=? AND (address IS NULL OR address='')").bind(custAddr, cid).run(); } catch (_) {}
    }
    const items = Array.isArray(b.items) ? b.items : [];
    if (!items.length) return json({ error: 'أضف صنفًا واحدًا على الأقل للفاتورة.' }, 400);

    for (const it of items) {
      const pid = toFk(it.product_id), pkid = toFk(it.packaging_type_id), q = Math.round(Number(it.quantity_units || 0));
      if (!pid || !pkid || q <= 0) continue;
      const fs = await db.prepare('SELECT * FROM finished_stock WHERE product_id=? AND packaging_type_id=?').bind(pid, pkid).first();
      if (!fs || Number(fs.quantity_units) < q) {
        const prod = await db.prepare('SELECT name FROM coffee_products WHERE id=?').bind(pid).first();
        const pt = await db.prepare('SELECT name FROM packaging_types WHERE id=?').bind(pkid).first();
        return json({ error: 'الرصيد المعبأ في المخزون غير كافٍ للصنف (' + (prod?.name || '') + ' - ' + (pt?.name || '') + ')! المتاح (' + (fs?.quantity_units || 0) + ') برطمان والمطلوب (' + q + ') برطمان.' }, 400);
      }
    }

    let sub = 0;
    const prep = [];
    for (const it of items) {
      const pid = toFk(it.product_id), pkid = toFk(it.packaging_type_id), q = Math.round(Number(it.quantity_units || 0)), sp = Math.round(Number(it.unit_sale_price_piasters || 0));
      if (!pid || !pkid || q <= 0) continue;
      const uc = await resolveFinalUnitCostPiasters(db, pid, pkid);
      const lt = q * sp;
      sub += lt;
      prep.push({ pid, pkid, q, sp, uc, lt, tier: toInt(it.price_tier, 1) });
    }
    const disc = Math.max(0, Math.round(Number(b.discount_piasters || 0)));
    const tot = Math.max(0, sub - disc);
    const paid = Math.max(0, Math.round(Number(b.paid_piasters ?? tot)));
    if (paid < tot && !cid) return json({ error: 'الفاتورة الآجلة تتطلب اختيار عميل أو كتابة اسم العميل الجديد لتسجيل المتبقي في المدينون.' }, 400);

    const invNum = String(b.invoice_number || ('INV-' + Date.now().toString().slice(-6)));
    const ins = await smartInsert(db, 'sales_invoices', {
      invoice_number: invNum,
      invoice_no: invNum,
      customer_id: cid,
      customer_address: custAddr,
      invoice_date: b.invoice_date || today(),
      status: 'draft',
      subtotal_piasters: sub,
      discount_piasters: disc,
      total_piasters: tot,
      paid_piasters: paid,
      notes: String(b.notes || ''),
      created_by: user.id
    }).run();
    const iid = ins.meta?.last_row_id;
    await db.batch(prep.map(p => smartInsert(db, 'sales_invoice_items', {
      invoice_id: iid,
      product_id: p.pid,
      packaging_type_id: p.pkid,
      quantity_units: p.q,
      unit_sale_price_piasters: p.sp,
      unit_cost_piasters: p.uc,
      line_total_piasters: p.lt,
      price_tier: p.tier
    })));
    const postRes = await postSale(db, user, iid);
    const postData = await postRes.json();
    if (!postRes.ok) return json(postData, postRes.status);
    return json({ success: true, id: iid, invoice_number: invNum });
  }
  if (path.match(/^\/api\/sales\/\d+$/) && m === 'DELETE') {
    const id = toInt(path.split('/')[3]);
    const rev = await buildReverseStockStatements(db, 'sales_invoice', id);
    const stmts = [...rev.stmts];
    stmts.push(db.prepare("DELETE FROM cash_movements WHERE reference_type='sales_invoice' AND reference_id=?").bind(id));
    stmts.push(db.prepare('DELETE FROM customer_payments WHERE invoice_id=?').bind(id));
    stmts.push(db.prepare('DELETE FROM sales_invoice_items WHERE invoice_id=?').bind(id));
    stmts.push(db.prepare('DELETE FROM sales_invoices WHERE id=?').bind(id));
    await db.batch(stmts);
    return json({ success: true });
  }

  // 7. DEBTORS & CUSTOMERS
  if (path === '/api/customers' && m === 'GET') {
    const r = await db.prepare(`
      SELECT c.*,
        COALESCE(agg.total_sales, 0) as total_sales,
        COALESCE(agg.total_paid, 0) as total_paid,
        (SELECT notes FROM sales_invoices si2 WHERE si2.customer_id=c.id AND si2.status='posted' ORDER BY si2.id DESC LIMIT 1) as last_note
      FROM customers c
      LEFT JOIN (
        SELECT customer_id, SUM(total_piasters) as total_sales, SUM(paid_piasters) as total_paid
        FROM sales_invoices
        WHERE status='posted'
        GROUP BY customer_id
      ) agg ON agg.customer_id = c.id
      ORDER BY c.id DESC
    `).all();
    return json({ customers: (r.results || []).map(x => ({ ...x, balance: Math.max(0, Number(x.total_sales) - Number(x.total_paid)) })) });
  }

  if (path === '/api/debtors/direct-debt' && m === 'POST') {
    const b = await req.json();
    let cid = toFk(b.customer_id);
    const personName = String(b.person_name || '').trim();
    const phone = String(b.phone || '').trim();
    const amountPiasters = Math.round(Number(b.amount_piasters || 0));
    const paidNowPiasters = Math.max(0, Math.round(Number(b.paid_piasters || 0)));
    const debtDate = b.debt_date || today();
    const notes = String(b.notes || 'مديونية مسجلة مباشرة').trim();

    if (amountPiasters <= 0) return json({ error: 'يرجى إدخال المبلغ المطلوب تسجيله.' }, 400);

    if (!cid) {
      if (!personName) return json({ error: 'يرجى كتابة اسم الشخص (فلان) أو اختياره من القائمة.' }, 400);
      const ex = await db.prepare('SELECT id FROM customers WHERE name = ?').bind(personName).first();
      if (ex) {
        cid = ex.id;
      } else {
        const insCust = await smartInsert(db, 'customers', { name: personName, phone, address: '', notes }).run();
        cid = insCust.meta?.last_row_id;
      }
    }

    const debtNum = 'DEBT-' + Date.now().toString().slice(-6);
    const insDebt = await smartInsert(db, 'sales_invoices', {
      invoice_number: debtNum,
      invoice_no: debtNum,
      customer_id: cid,
      invoice_date: debtDate,
      status: 'posted',
      subtotal_piasters: amountPiasters,
      discount_piasters: 0,
      total_piasters: amountPiasters,
      paid_piasters: paidNowPiasters,
      notes: notes,
      created_by: user.id
    }).run();

    if (paidNowPiasters > 0) {
      await db.batch([
        smartInsert(db, 'customer_payments', { customer_id: cid, invoice_id: insDebt.meta?.last_row_id, payment_date: debtDate, amount_piasters: paidNowPiasters, payment_method: 'نقدي', notes, created_by: user.id }),
        prepCashMove(db, { movement_date: debtDate, direction: 'in', movement_type: 'customer_payment', amount_piasters: paidNowPiasters, reference_type: 'customer', reference_id: cid, description: 'دفعة مقدمة من ' + (personName || 'مدين'), created_by: user.id })
      ]);
    }

    return json({ success: true, customer_id: cid });
  }

  if (path.match(/^\/api\/customers\/\d+\/statement$/) && m === 'GET') {
    const cid = toInt(path.split('/')[3]);
    const cust = await db.prepare('SELECT * FROM customers WHERE id=?').bind(cid).first();
    if (!cust) return json({ error: 'الاسم غير موجود.' }, 404);
    const [invs, pays] = await Promise.all([
      db.prepare("SELECT * FROM sales_invoices WHERE customer_id=? AND status='posted' ORDER BY invoice_date DESC, id DESC").bind(cid).all(),
      db.prepare("SELECT * FROM customer_payments WHERE customer_id=? ORDER BY payment_date DESC, id DESC").bind(cid).all()
    ]);
    const list = invs.results || [];
    const totSales = list.reduce((s, x) => s + Number(x.total_piasters || 0), 0);
    const totPaid = list.reduce((s, x) => s + Number(x.paid_piasters || 0), 0);
    return json({
      customer: cust,
      total_piasters: totSales,
      paid_piasters: totPaid,
      remaining_piasters: Math.max(0, totSales - totPaid),
      entries: list,
      payments: pays.results || []
    });
  }

  if (path === '/api/customers' && m === 'POST') {
    const b = await req.json();
    const name = String(b.name || '').trim();
    if (!name) return json({ error: 'اسم العميل مطلوب.' }, 400);
    await smartInsert(db, 'customers', {
      name,
      phone: String(b.phone || '').trim(),
      address: String(b.address || '').trim(),
      notes: String(b.notes || '').trim()
    }).run();
    return json({ success: true });
  }

  if (path.match(/^\/api\/customers\/\d+$/) && m === 'PUT') {
    const cid = toInt(path.split('/')[3]);
    const b = await req.json();
    const name = String(b.name || '').trim();
    if (!name) return json({ error: 'اسم العميل مطلوب.' }, 400);
    await db.prepare('UPDATE customers SET name=?, phone=?, address=?, notes=? WHERE id=?')
      .bind(name, String(b.phone || '').trim(), String(b.address || '').trim(), String(b.notes || '').trim(), cid).run();
    return json({ success: true });
  }

  if (path.match(/^\/api\/customers\/\d+$/) && m === 'DELETE') {
    const cid = toInt(path.split('/')[3]);
    await db.batch([
      db.prepare('DELETE FROM customer_payments WHERE customer_id=?').bind(cid),
      db.prepare('DELETE FROM sales_invoices WHERE customer_id=?').bind(cid),
      db.prepare('DELETE FROM customers WHERE id=?').bind(cid)
    ]);
    return json({ success: true });
  }

  if (path === '/api/customers/payments' && m === 'POST') {
    const b = await req.json();
    const cid = toFk(b.customer_id), amt = Math.round(Number(b.amount_piasters || 0)), dt = b.payment_date || today();
    if (!cid || amt <= 0) return json({ error: 'الاسم والمبلغ مطلوبان.' }, 400);
    const cust = await db.prepare('SELECT name FROM customers WHERE id=?').bind(cid).first();
    const open = (await db.prepare("SELECT * FROM sales_invoices WHERE customer_id=? AND status='posted' AND paid_piasters < total_piasters ORDER BY invoice_date ASC, id ASC").bind(cid).all()).results || [];
    const stmts = [];
    let left = amt;
    for (const inv of open) {
      if (left <= 0) break;
      const alloc = Math.min(left, Number(inv.total_piasters) - Number(inv.paid_piasters));
      stmts.push(db.prepare('UPDATE sales_invoices SET paid_piasters = paid_piasters + ? WHERE id=?').bind(alloc, inv.id));
      left -= alloc;
    }
    stmts.push(
      smartInsert(db, 'customer_payments', { customer_id: cid, payment_date: dt, amount_piasters: amt, payment_method: 'نقدي', notes: b.notes || '', created_by: user.id }),
      prepCashMove(db, { movement_date: dt, direction: 'in', movement_type: 'customer_payment', amount_piasters: amt, reference_type: 'customer', reference_id: cid, description: 'تحصيل من ' + (cust?.name || 'عميل') + (b.notes ? (' - ' + b.notes) : ''), created_by: user.id })
    );
    await db.batch(stmts);
    return json({ success: true });
  }

  // 8. SUPPLIERS
  if (path === '/api/suppliers' && m === 'GET') {
    const r = await db.prepare("SELECT s.*, COALESCE((SELECT SUM(total_piasters) FROM purchases p WHERE p.supplier_id=s.id AND p.status='posted'),0) as total_purchases, COALESCE((SELECT SUM(paid_piasters) FROM purchases p WHERE p.supplier_id=s.id AND p.status='posted'),0) as total_paid FROM suppliers s ORDER BY s.id DESC").all();
    return json({ suppliers: (r.results || []).map(x => ({ ...x, balance: Math.max(0, Number(x.total_purchases) - Number(x.total_paid)) })) });
  }
  if (path === '/api/suppliers' && m === 'POST') {
    const b = await req.json();
    if (!b.name) return json({ error: 'اسم المورد مطلوب.' }, 400);
    await smartInsert(db, 'suppliers', { name: b.name, phone: b.phone || '', address: b.address || '', notes: '' }).run();
    return json({ success: true });
  }
  if (path.match(/^\/api\/suppliers\/\d+$/) && m === 'DELETE') {
    await db.prepare('DELETE FROM suppliers WHERE id=?').bind(toInt(path.split('/')[3])).run();
    return json({ success: true });
  }

  // 9. EXPENSES
  if (path === '/api/expenses' && m === 'GET') {
    const [e, c] = await Promise.all([
      db.prepare('SELECT e.*, ec.name as category_name FROM expenses e LEFT JOIN expense_categories ec ON ec.id=e.category_id ORDER BY e.id DESC LIMIT 150').all(),
      db.prepare('SELECT * FROM expense_categories ORDER BY id ASC').all()
    ]);
    return json({ expenses: e.results || [], categories: c.results || [] });
  }
  if (path === '/api/expenses' && m === 'POST') {
    const b = await req.json();
    const amt = Math.round(Number(b.amount_piasters || 0)), dt = b.expense_date || today(), catId = toFk(b.category_id) || DEFAULT_FK.category_id;
    if (!catId || amt <= 0) return json({ error: 'التصنيف والمبلغ مطلوبان.' }, 400);
    const ins = await smartInsert(db, 'expenses', { category_id: catId, expense_date: dt, description: b.description || '', amount_piasters: amt, affects_profit: 1, payment_method: 'نقدي', created_by: user.id }).run();
    await prepCashMove(db, { movement_date: dt, direction: 'out', movement_type: 'expense', amount_piasters: amt, reference_type: 'expense', reference_id: ins.meta?.last_row_id, description: 'مصروف: ' + (b.description || ''), created_by: user.id }).run();
    return json({ success: true });
  }
  if (path.match(/^\/api\/expenses\/\d+$/) && m === 'DELETE') {
    const id = toInt(path.split('/')[3]);
    await db.batch([
      db.prepare("DELETE FROM cash_movements WHERE reference_type='expense' AND reference_id=?").bind(id),
      db.prepare('DELETE FROM expenses WHERE id=?').bind(id)
    ]);
    return json({ success: true });
  }

  // 10. CASHBOOK
  if (path === '/api/cash' && m === 'GET') {
    const [movs, tot] = await Promise.all([
      db.prepare('SELECT cm.*, u.full_name as user_name FROM cash_movements cm LEFT JOIN users u ON u.id=cm.created_by ORDER BY cm.id DESC LIMIT 200').all(),
      db.prepare("SELECT COALESCE(SUM(CASE WHEN movement_type IN ('opening','opening_balance') AND direction='in' THEN amount_piasters WHEN movement_type IN ('opening','opening_balance') AND direction='out' THEN -amount_piasters ELSE 0 END),0) as open_bal, COALESCE(SUM(CASE WHEN movement_type NOT IN ('opening','opening_balance') AND direction='in' THEN amount_piasters ELSE 0 END),0) as tin, COALESCE(SUM(CASE WHEN movement_type NOT IN ('opening','opening_balance') AND direction='out' THEN amount_piasters ELSE 0 END),0) as tout FROM cash_movements").first()
    ]);
    const op = Number(tot?.open_bal || 0), tin = Number(tot?.tin || 0), tout = Number(tot?.tout || 0);
    return json({ summary: { opening: op, receipts: tin, payments: tout, closing: op + tin - tout }, movements: movs.results || [] });
  }
  if (path === '/api/cash/movement' && m === 'POST') {
    const b = await req.json();
    const amt = Math.round(Number(b.amount_piasters || 0));
    if (amt <= 0) return json({ error: 'المبلغ مطلوب.' }, 400);
    await prepCashMove(db, {
      movement_date: b.movement_date || today(),
      direction: b.direction || 'in',
      movement_type: b.movement_type || 'deposit',
      amount_piasters: amt,
      reference_type: 'manual',
      description: b.description || '',
      created_by: user.id
    }).run();
    return json({ success: true });
  }
  if (path.match(/^\/api\/cash\/movement\/\d+$/) && m === 'DELETE') {
    await db.prepare('DELETE FROM cash_movements WHERE id=?').bind(toInt(path.split('/')[4])).run();
    return json({ success: true });
  }

  // 11. REPORTS
  if (path.startsWith('/api/reports/') && m === 'GET') {
    return await getReportData(db, path.split('/')[3], url.searchParams);
  }

  // 12. USERS
  if (path === '/api/users' && m === 'GET') {
    const [u, a] = await Promise.all([
      db.prepare('SELECT u.id, u.full_name, u.username, u.role_id, u.is_active, r.name as role_name FROM users u LEFT JOIN roles r ON r.id=u.role_id ORDER BY u.id ASC').all(),
      db.prepare('SELECT a.*, u.full_name as user_name FROM audit_log a LEFT JOIN users u ON u.id=a.user_id ORDER BY a.id DESC LIMIT 60').all()
    ]);
    return json({ users: u.results || [], audit: a.results || [] });
  }
  if (path === '/api/users' && m === 'POST') {
    const b = await req.json();
    if (!b.full_name || !b.username || !b.password) return json({ error: 'بيانات غير مكتملة.' }, 400);
    await smartInsert(db, 'users', { full_name: b.full_name, username: b.username, password_hash: await hashPw(b.password), role_id: toFk(b.role_id) || DEFAULT_FK.role_id || 2, is_active: 1 }).run();
    return json({ success: true });
  }

  // 13. SETTINGS
  if (path === '/api/settings' && m === 'PUT') {
    const b = await req.json();
    const existingKeys = new Set(((await db.prepare('SELECT setting_key FROM settings').all()).results || []).map(x => x.setting_key));
    const stmts = [];
    for (const [k, v] of Object.entries(b)) {
      if (existingKeys.has(k)) stmts.push(db.prepare("UPDATE settings SET setting_value=?, updated_at=datetime('now') WHERE setting_key=?").bind(String(v ?? ''), k));
      else stmts.push(smartInsert(db, 'settings', { setting_key: k, setting_value: String(v ?? '') }));
    }
    if (stmts.length) await db.batch(stmts);
    return json({ success: true });
  }

  return json({ error: 'المسار غير موجود' }, 404);
}

/* ============================================================================
 * 4. POSTING TRANSACTIONS (PURCHASES, PRODUCTION WITH OPTIONAL STICKER, SALES)
 * ============================================================================ */
async function postPurchase(db, user, id) {
  const pur = await db.prepare('SELECT * FROM purchases WHERE id=?').bind(id).first();
  const items = (await db.prepare('SELECT * FROM purchase_items WHERE purchase_id=?').bind(id).all()).results || [];
  const stmts = [db.prepare("UPDATE purchases SET status='posted' WHERE id=?").bind(id)];

  for (const it of items) {
    const q = Number(it.quantity), uc = Number(it.unit_cost_piasters);
    if (it.item_type === 'raw_coffee' && it.product_id) {
      const cur = await db.prepare('SELECT * FROM raw_coffee_stock WHERE product_id=?').bind(it.product_id).first();
      const oq = cur ? Number(cur.quantity_grams) : 0, oc = cur ? Number(cur.average_cost_per_kg_piasters) : 0;
      const nq = oq + q, nc = nq > 0 ? Math.round(((oq * oc) + (q * uc)) / nq) : uc;
      stmts.push(
        cur ? db.prepare("UPDATE raw_coffee_stock SET quantity_grams=?, average_cost_per_kg_piasters=?, updated_at=datetime('now') WHERE product_id=?").bind(nq, nc, it.product_id)
            : smartInsert(db, 'raw_coffee_stock', { product_id: it.product_id, quantity_grams: nq, average_cost_per_kg_piasters: nc }),
        prepStockMove(db, { movement_date: pur.purchase_date, stock_type: 'raw_coffee', product_id: it.product_id, quantity_delta: q, unit_cost_piasters: uc, movement_reason: 'purchase', reference_type: 'purchase', reference_id: id, notes: 'شراء ' + pur.purchase_number, created_by: user.id })
      );
    } else if (it.item_type === 'packaging' && it.packaging_type_id) {
      const cur = await db.prepare('SELECT * FROM packaging_stock WHERE packaging_type_id=?').bind(it.packaging_type_id).first();
      const oq = cur ? Number(cur.quantity_units) : 0, oc = cur ? Number(cur.average_cost_per_unit_piasters) : 0;
      const nq = oq + q, nc = nq > 0 ? Math.round(((oq * oc) + (q * uc)) / nq) : uc;
      stmts.push(
        cur ? db.prepare("UPDATE packaging_stock SET quantity_units=?, average_cost_per_unit_piasters=?, updated_at=datetime('now') WHERE packaging_type_id=?").bind(nq, nc, it.packaging_type_id)
            : smartInsert(db, 'packaging_stock', { packaging_type_id: it.packaging_type_id, quantity_units: nq, average_cost_per_unit_piasters: nc }),
        prepStockMove(db, { movement_date: pur.purchase_date, stock_type: 'packaging', packaging_type_id: it.packaging_type_id, quantity_delta: q, unit_cost_piasters: uc, movement_reason: 'purchase', reference_type: 'purchase', reference_id: id, notes: 'شراء ' + pur.purchase_number, created_by: user.id })
      );
    } else if (it.item_type === 'sticker' && it.product_id && it.packaging_type_id) {
      const cur = await db.prepare('SELECT * FROM sticker_skus WHERE product_id=? AND packaging_type_id=?').bind(it.product_id, it.packaging_type_id).first();
      const oq = cur ? Number(cur.quantity_units) : 0, oc = cur ? Number(cur.average_cost_per_unit_piasters) : 0;
      const nq = oq + q, nc = nq > 0 ? Math.round(((oq * oc) + (q * uc)) / nq) : uc;
      stmts.push(
        cur ? db.prepare('UPDATE sticker_skus SET quantity_units=?, average_cost_per_unit_piasters=?, is_active=1 WHERE id=?').bind(nq, nc, cur.id)
            : smartInsert(db, 'sticker_skus', { product_id: it.product_id, packaging_type_id: it.packaging_type_id, sku: `STK-${it.product_id}-${it.packaging_type_id}`, quantity_units: nq, average_cost_per_unit_piasters: nc, is_active: 1 }),
        prepStockMove(db, { movement_date: pur.purchase_date, stock_type: 'sticker', product_id: it.product_id, packaging_type_id: it.packaging_type_id, sticker_sku_id: cur?.id, quantity_delta: q, unit_cost_piasters: uc, movement_reason: 'purchase', reference_type: 'purchase', reference_id: id, notes: 'شراء استيكر ' + pur.purchase_number, created_by: user.id })
      );
    }
  }
  if (Number(pur.paid_piasters) > 0) {
    stmts.push(prepCashMove(db, { movement_date: pur.purchase_date, direction: 'out', movement_type: 'purchase_payment', amount_piasters: Number(pur.paid_piasters), reference_type: 'purchase', reference_id: id, description: 'سداد مشتريات ' + pur.purchase_number, created_by: user.id }));
  }
  await db.batch(stmts);
  return json({ success: true });
}

async function createAndPostProductionBatch(db, user, b) {
  const pid = toFk(b.product_id);
  const items = (b.items || []).filter(x => Number(x.quantity_units) > 0);
  if (!pid || !items.length) return json({ error: 'اختر الصنف وعدد برطمانات الربع أو الثمن المراد تعبئتها.' }, 400);

  const prod = await db.prepare('SELECT * FROM coffee_products WHERE id=?').bind(pid).first();
  if (!prod) return json({ error: 'الصنف غير موجود.' }, 404);

  const rawRow = await db.prepare('SELECT * FROM raw_coffee_stock WHERE product_id=?').bind(pid).first();
  const availRawGrams = Number(rawRow?.quantity_grams || 0);
  const rawCostKg = Number(b.override_cost_per_kg_piasters || rawRow?.average_cost_per_kg_piasters || 0);

  let finGrams = 0;
  let totalPkgCostPiasters = 0;
  let totalStickerCostPiasters = 0;
  const prep = [];
  const stickerDemandById = {};

  for (const it of items) {
    const pkid = toFk(it.packaging_type_id), q = Math.round(Number(it.quantity_units));
    if (!pkid || q <= 0) continue;

    const pt = await db.prepare('SELECT * FROM packaging_types WHERE id=?').bind(pkid).first();
    const netGrams = Number(pt?.net_weight_grams || 250);
    const w = q * netGrams;
    finGrams += w;

    const pkgStock = await db.prepare('SELECT * FROM packaging_stock WHERE packaging_type_id=?').bind(pkid).first();
    const availPkgUnits = Number(pkgStock?.quantity_units || 0);
    if (availPkgUnits < q) {
      return json({
        error: `رصيد العبوات الفارغة (${pt?.name || ''}) غير كافٍ للتعبئة! المتاح حاليًا (${availPkgUnits} عبوة) والمطلوب (${q} عبوة). يرجى إضافة رصيد للعبوات الفارغة أولًا.`
      }, 400);
    }
    const pkgUnitCost = Number(pkgStock?.average_cost_per_unit_piasters || 0);

    const noSticker = Boolean(
      it.no_sticker === true ||
      it.sticker_sku_id === 'none' ||
      it.sticker_sku_id === 0 ||
      it.sticker_sku_id === '0'
    );

    let stkRow = null;
    let stkUnitCost = 0;
    let stkDisplayName = 'بدون استيكر';

    if (!noSticker) {
      const customStkId = toFk(it.sticker_sku_id);
      if (customStkId) {
        stkRow = await db.prepare('SELECT ss.*, cp.name as stk_prod_name, pt.name as stk_pkg_name FROM sticker_skus ss LEFT JOIN coffee_products cp ON cp.id=ss.product_id LEFT JOIN packaging_types pt ON pt.id=ss.packaging_type_id WHERE ss.id=?').bind(customStkId).first();
      }
      if (!stkRow) {
        stkRow = await db.prepare('SELECT ss.*, cp.name as stk_prod_name, pt.name as stk_pkg_name FROM sticker_skus ss LEFT JOIN coffee_products cp ON cp.id=ss.product_id LEFT JOIN packaging_types pt ON pt.id=ss.packaging_type_id WHERE ss.product_id=? AND ss.packaging_type_id=?').bind(pid, pkid).first();
      }

      const availStkUnits = Number(stkRow?.quantity_units || 0);
      const prevDemanded = stickerDemandById[stkRow?.id || 0] || 0;
      stkDisplayName = stkRow ? `${stkRow.stk_prod_name || prod.name} - ${stkRow.stk_pkg_name || pt?.name || ''}` : `${prod.name} - ${pt?.name || ''}`;

      if (!stkRow || availStkUnits < (prevDemanded + q)) {
        return json({
          error: `رصيد الاستيكر المختار (${stkDisplayName}) غير كافٍ للتعبئة! المتاح حاليًا (${availStkUnits} استيكر) والمطلوب (${prevDemanded + q} استيكر). يمكنك تزويد رصيد الاستيكر أو اختيار "بدون استيكر".`
        }, 400);
      }
      stickerDemandById[stkRow.id] = prevDemanded + q;
      stkUnitCost = Number(stkRow?.average_cost_per_unit_piasters || 0);
    }

    const coffeeLineCost = Math.round((w * rawCostKg) / 1000);
    const pkgLineCost = q * pkgUnitCost;
    const stkLineCost = noSticker ? 0 : (q * stkUnitCost);
    const totalItemCost = coffeeLineCost + pkgLineCost + stkLineCost;
    const fullUnitCost = q > 0 ? Math.round(totalItemCost / q) : 0;

    totalPkgCostPiasters += pkgLineCost;
    totalStickerCostPiasters += stkLineCost;

    prep.push({
      pkid,
      ptName: pt?.name || '',
      q,
      w,
      pkgUnitCost,
      stkUnitCost,
      noSticker,
      stkId: stkRow ? stkRow.id : null,
      stkProdId: stkRow ? stkRow.product_id : pid,
      stkPkgId: stkRow ? stkRow.packaging_type_id : pkid,
      stkDisplayName,
      totalItemCost,
      fullUnitCost
    });
  }

  const rawGramsUsed = Math.max(1, Math.round(Number(b.raw_coffee_used_grams || finGrams)));

  if (availRawGrams < rawGramsUsed) {
    const availKg = +(availRawGrams / 1000).toFixed(3);
    const reqKg = +(rawGramsUsed / 1000).toFixed(3);
    return json({
      error: `رصيد البن الخام للصنف (${prod.name}) غير كافٍ للتعبئة! المتاح في مخزون الخام (${availKg} كجم) والمطلوب تعبئته (${reqKg} كجم). يرجى إضافة مشتريات أو رصيد بن خام أولًا.`
    }, 400);
  }

  const rawCoffeeCostPiasters = Math.round((rawGramsUsed * rawCostKg) / 1000);
  const grandTotalCostPiasters = rawCoffeeCostPiasters + totalPkgCostPiasters + totalStickerCostPiasters;
  const prodDate = b.production_date || today();
  const bNum = String(b.batch_number || ('PRD-' + Date.now().toString().slice(-6)));

  const ins = await smartInsert(db, 'production_batches', {
    batch_number: bNum,
    product_id: pid,
    raw_coffee_grams: rawGramsUsed,
    raw_coffee_used_grams: rawGramsUsed,
    total_finished_weight_grams: finGrams,
    raw_coffee_cost_piasters: rawCoffeeCostPiasters,
    packaging_cost_piasters: totalPkgCostPiasters,
    sticker_cost_piasters: totalStickerCostPiasters,
    total_cost_piasters: grandTotalCostPiasters,
    status: 'posted',
    production_date: prodDate,
    notes: String(b.notes || ''),
    created_by: user.id
  }).run();
  const bid = ins.meta?.last_row_id;

  const stmts = [];

  for (const p of prep) {
    stmts.push(smartInsert(db, 'production_items', {
      batch_id: bid,
      product_id: pid,
      packaging_type_id: p.pkid,
      sticker_sku_id: p.noSticker ? null : p.stkId,
      quantity_units: p.q,
      weight_grams: p.w,
      raw_coffee_grams: p.w,
      packaging_unit_cost_piasters: p.pkgUnitCost,
      sticker_unit_cost_piasters: p.stkUnitCost,
      total_item_cost_piasters: p.totalItemCost
    }));
  }

  stmts.push(
    db.prepare("UPDATE raw_coffee_stock SET quantity_grams = MAX(0, quantity_grams - ?), updated_at=datetime('now') WHERE product_id=?").bind(rawGramsUsed, pid),
    prepStockMove(db, {
      movement_date: prodDate,
      stock_type: 'raw_coffee',
      product_id: pid,
      quantity_delta: -rawGramsUsed,
      unit_cost_piasters: rawCostKg,
      movement_reason: 'production_consume',
      reference_type: 'production_batch',
      reference_id: bid,
      notes: `خصم بن خام لتعبئة ${bNum} (${prod.name})`,
      created_by: user.id
    })
  );

  for (const p of prep) {
    stmts.push(
      db.prepare("UPDATE packaging_stock SET quantity_units = MAX(0, quantity_units - ?), updated_at=datetime('now') WHERE packaging_type_id=?").bind(p.q, p.pkid),
      prepStockMove(db, {
        movement_date: prodDate,
        stock_type: 'packaging',
        product_id: pid,
        packaging_type_id: p.pkid,
        quantity_delta: -p.q,
        unit_cost_piasters: p.pkgUnitCost,
        movement_reason: 'production_consume',
        reference_type: 'production_batch',
        reference_id: bid,
        notes: `خصم عبوات (${p.ptName}) لتعبئة ${bNum}`,
        created_by: user.id
      })
    );

    if (!p.noSticker && p.stkId) {
      stmts.push(
        db.prepare("UPDATE sticker_skus SET quantity_units = MAX(0, quantity_units - ?) WHERE id=?").bind(p.q, p.stkId),
        prepStockMove(db, {
          movement_date: prodDate,
          stock_type: 'sticker',
          product_id: p.stkProdId,
          packaging_type_id: p.stkPkgId,
          sticker_sku_id: p.stkId,
          quantity_delta: -p.q,
          unit_cost_piasters: p.stkUnitCost,
          movement_reason: 'production_consume',
          reference_type: 'production_batch',
          reference_id: bid,
          notes: `خصم استيكر (${p.stkDisplayName}) لتعبئة ${bNum}`,
          created_by: user.id
        })
      );
    }

    const fs = await db.prepare('SELECT * FROM finished_stock WHERE product_id=? AND packaging_type_id=?').bind(pid, p.pkid).first();
    const oq = fs ? Number(fs.quantity_units) : 0;
    const oc = fs ? Number(fs.average_cost_per_unit_piasters) : 0;
    const nq = oq + p.q;
    const nc = (nq > 0 && p.totalItemCost > 0) ? Math.round(((oq * oc) + p.totalItemCost) / nq) : (p.fullUnitCost || oc);

    stmts.push(
      fs ? db.prepare("UPDATE finished_stock SET quantity_units=?, average_cost_per_unit_piasters=?, updated_at=datetime('now') WHERE product_id=? AND packaging_type_id=?").bind(nq, nc, pid, p.pkid)
         : smartInsert(db, 'finished_stock', { product_id: pid, packaging_type_id: p.pkid, quantity_units: nq, average_cost_per_unit_piasters: nc }),
      prepStockMove(db, {
        movement_date: prodDate,
        stock_type: 'finished',
        product_id: pid,
        packaging_type_id: p.pkid,
        quantity_delta: p.q,
        unit_cost_piasters: p.fullUnitCost,
        movement_reason: 'production_output',
        reference_type: 'production_batch',
        reference_id: bid,
        notes: `إنتاج معبأ (${prod.name} - ${p.ptName} - ${p.stkDisplayName}) دفعة ${bNum}`,
        created_by: user.id
      })
    );
  }

  await db.batch(stmts);
  return json({ success: true, id: bid, batch_number: bNum });
}

async function postSale(db, user, id) {
  const inv = await db.prepare('SELECT * FROM sales_invoices WHERE id=?').bind(id).first();
  const items = (await db.prepare('SELECT * FROM sales_invoice_items WHERE invoice_id=?').bind(id).all()).results || [];
  const stmts = [db.prepare("UPDATE sales_invoices SET status='posted' WHERE id=?").bind(id)];

  for (const it of items) {
    const fs = await db.prepare('SELECT * FROM finished_stock WHERE product_id=? AND packaging_type_id=?').bind(it.product_id, it.packaging_type_id).first();
    if (!fs || Number(fs.quantity_units) < Number(it.quantity_units)) {
      return json({ error: 'الرصيد المعبأ في المخزون غير كافٍ! المتاح (' + (fs?.quantity_units || 0) + ') برطمان والمطلوب (' + it.quantity_units + ') برطمان.' }, 400);
    }
    const uc = await resolveFinalUnitCostPiasters(db, it.product_id, it.packaging_type_id);
    stmts.push(
      db.prepare("UPDATE finished_stock SET quantity_units = quantity_units - ?, updated_at=datetime('now') WHERE product_id=? AND packaging_type_id=?").bind(Number(it.quantity_units), it.product_id, it.packaging_type_id),
      db.prepare('UPDATE sales_invoice_items SET unit_cost_piasters=? WHERE id=?').bind(uc, it.id),
      prepStockMove(db, { movement_date: inv.invoice_date, stock_type: 'finished', product_id: it.product_id, packaging_type_id: it.packaging_type_id, quantity_delta: -Number(it.quantity_units), unit_cost_piasters: uc, movement_reason: 'sale', reference_type: 'sales_invoice', reference_id: id, notes: 'بيع ' + inv.invoice_number, created_by: user.id })
    );
  }
  if (Number(inv.paid_piasters) > 0) {
    if (inv.customer_id) {
      stmts.push(smartInsert(db, 'customer_payments', { customer_id: inv.customer_id, invoice_id: id, payment_date: inv.invoice_date, amount_piasters: Number(inv.paid_piasters), payment_method: 'نقدي', notes: 'فاتورة ' + inv.invoice_number, created_by: user.id }));
    }
    stmts.push(prepCashMove(db, { movement_date: inv.invoice_date, direction: 'in', movement_type: 'sale_collection', amount_piasters: Number(inv.paid_piasters), reference_type: 'sales_invoice', reference_id: id, description: 'تحصيل فاتورة ' + inv.invoice_number, created_by: user.id }));
  }
  await db.batch(stmts);
  return json({ success: true });
}

/* ============================================================================
 * 5. ALL 21 REPORTS ENGINE (INCLUDES #21 COST CALCULATION BREAKDOWN)
 * ============================================================================ */
async function getReportData(db, type, params) {
  const from = params.get('from') || '';
  const to = params.get('to') || '';
  const df = (col) => {
    let s = ''; const a = [];
    if (from) { s += ' AND substr(' + col + ',1,10) >= ?'; a.push(from); }
    if (to) { s += ' AND substr(' + col + ',1,10) <= ?'; a.push(to); }
    return { s, a };
  };

  const finalUnitCostSql = `CASE WHEN COALESCE(sii.unit_cost_piasters,0) > 0 THEN sii.unit_cost_piasters ELSE COALESCE((SELECT fs.average_cost_per_unit_piasters FROM finished_stock fs WHERE fs.product_id=sii.product_id AND fs.packaging_type_id=sii.packaging_type_id LIMIT 1),0) END`;

  const queries = {
    '1': () => { const f = df('si.invoice_date'); return db.prepare("SELECT si.invoice_number as 'رقم الفاتورة', si.invoice_date as 'التاريخ', COALESCE(c.name,'عميل نقدي') as 'العميل', si.total_piasters as 'الإجمالي_قرش', COALESCE((SELECT SUM(sii.quantity_units * (" + finalUnitCostSql + ")) FROM sales_invoice_items sii WHERE sii.invoice_id=si.id),0) as 'تكلفة المنتج النهائي_قرش', (si.total_piasters - COALESCE((SELECT SUM(sii.quantity_units * (" + finalUnitCostSql + ")) FROM sales_invoice_items sii WHERE sii.invoice_id=si.id),0)) as 'هامش الربح_قرش', si.paid_piasters as 'المدفوع_قرش', (si.total_piasters-si.paid_piasters) as 'المتبقي_قرش' FROM sales_invoices si LEFT JOIN customers c ON c.id=si.customer_id WHERE si.status='posted' AND COALESCE(si.invoice_number, '') NOT LIKE 'DEBT-%'" + f.s + " ORDER BY si.id DESC").bind(...f.a); },
    '2': () => { const f = df('invoice_date'); return db.prepare("SELECT substr(invoice_date,1,10) as 'اليوم', COUNT(*) as 'عدد الفواتير', SUM(total_piasters) as 'المبيعات_قرش', SUM(paid_piasters) as 'المحصل_قرش', SUM(total_piasters-paid_piasters) as 'الآجل_قرش' FROM sales_invoices WHERE status='posted' AND COALESCE(invoice_number, '') NOT LIKE 'DEBT-%'" + f.s + " GROUP BY substr(invoice_date,1,10) ORDER BY 1 DESC").bind(...f.a); },
    '3': () => { const f = df('invoice_date'); return db.prepare("SELECT substr(invoice_date,1,7) as 'الشهر', COUNT(*) as 'عدد الفواتير', SUM(total_piasters) as 'المبيعات_قرش', SUM(paid_piasters) as 'المحصل_قرش', SUM(total_piasters-paid_piasters) as 'الآجل_قرش' FROM sales_invoices WHERE status='posted' AND COALESCE(invoice_number, '') NOT LIKE 'DEBT-%'" + f.s + " GROUP BY substr(invoice_date,1,7) ORDER BY 1 DESC").bind(...f.a); },
    '4': () => { const f = df('movement_date'); return db.prepare("SELECT movement_date as 'التاريخ', movement_type as 'النوع', description as 'البيان', amount_piasters as 'المبلغ_قرش' FROM cash_movements WHERE direction='in' AND movement_type IN ('sale_collection','sales_collection','customer_payment')" + f.s + " ORDER BY id DESC").bind(...f.a); },
    '5': () => { const f = df('si.invoice_date'); return db.prepare("SELECT si.invoice_number as 'الرقم', si.invoice_date as 'التاريخ', COALESCE(c.name,'عميل نقدي') as 'الاسم', si.notes as 'البيان', si.total_piasters as 'الإجمالي_قرش', si.paid_piasters as 'المدفوع_قرش', (si.total_piasters-si.paid_piasters) as 'المتبقي_قرش' FROM sales_invoices si LEFT JOIN customers c ON c.id=si.customer_id WHERE 1=1" + f.s + " ORDER BY si.id DESC").bind(...f.a); },
    '6': () => db.prepare("SELECT c.name as 'اسم المدين', c.phone as 'الهاتف', SUM(si.total_piasters) as 'إجمالي المسجل عليه_قرش', SUM(si.paid_piasters) as 'المسدد_قرش', SUM(si.total_piasters-si.paid_piasters) as 'المتبقي عليه_قرش' FROM customers c JOIN sales_invoices si ON si.customer_id=c.id AND si.status='posted' GROUP BY c.id HAVING SUM(si.total_piasters-si.paid_piasters)>0 ORDER BY 5 DESC"),
    '7': () => { const f = df('si.invoice_date'); return db.prepare("SELECT c.name as 'الاسم', si.invoice_number as 'المرجع', si.invoice_date as 'التاريخ', si.notes as 'البيان', si.total_piasters as 'المبلغ_قرش', si.paid_piasters as 'المدفوع_قرش', (si.total_piasters-si.paid_piasters) as 'المتبقي_قرش' FROM sales_invoices si JOIN customers c ON c.id=si.customer_id WHERE si.status='posted'" + f.s + " ORDER BY c.id, si.id DESC").bind(...f.a); },
    '8': () => { const f = df('p.purchase_date'); return db.prepare("SELECT p.purchase_number as 'رقم المشتريات', p.purchase_date as 'التاريخ', COALESCE(s.name,'مورد عام') as 'المورد', p.total_piasters as 'الإجمالي_قرش', p.paid_piasters as 'المدفوع_قرش', (p.total_piasters-p.paid_piasters) as 'المتبقي_قرش' FROM purchases p LEFT JOIN suppliers s ON s.id=p.supplier_id WHERE p.status='posted'" + f.s + " ORDER BY p.id DESC").bind(...f.a); },
    '9': () => db.prepare("SELECT s.name as 'المورد', s.phone as 'الهاتف', COALESCE(SUM(p.total_piasters),0) as 'إجمالي المشتريات_قرش', COALESCE(SUM(p.paid_piasters),0) as 'المدفوع_قرش', COALESCE(SUM(p.total_piasters-p.paid_piasters),0) as 'المتبقي للمورد_قرش' FROM suppliers s LEFT JOIN purchases p ON p.supplier_id=s.id AND p.status='posted' GROUP BY s.id ORDER BY 5 DESC"),
    '10': () => db.prepare("SELECT cp.sku as 'SKU', cp.name as 'الصنف', ROUND(COALESCE(r.quantity_grams,0)/1000.0, 3) as 'الوزن بالكيلو', COALESCE(r.average_cost_per_kg_piasters,0) as 'تكلفة الكيلو_قرش', ROUND((COALESCE(r.quantity_grams,0)*COALESCE(r.average_cost_per_kg_piasters,0))/1000.0) as 'قيمة المخزون_قرش' FROM coffee_products cp LEFT JOIN raw_coffee_stock r ON r.product_id=cp.id WHERE cp.is_active=1"),
    '11': () => db.prepare("SELECT pt.name as 'العبوة', ROUND(pt.net_weight_grams/1000.0, 3) as 'سعة البرطمان (كجم)', COALESCE(ps.quantity_units,0) as 'العدد', COALESCE(ps.average_cost_per_unit_piasters,0) as 'تكلفة البرطمان_قرش', (COALESCE(ps.quantity_units,0)*COALESCE(ps.average_cost_per_unit_piasters,0)) as 'القيمة_قرش' FROM packaging_types pt LEFT JOIN packaging_stock ps ON ps.packaging_type_id=pt.id"),
    '12': () => db.prepare("SELECT ss.sku as 'SKU', cp.name as 'الصنف', pt.name as 'العبوة', ss.quantity_units as 'العدد', ss.average_cost_per_unit_piasters as 'تكلفة الاستيكر_قرش', (ss.quantity_units*ss.average_cost_per_unit_piasters) as 'القيمة_قرش' FROM sticker_skus ss JOIN coffee_products cp ON cp.id=ss.product_id JOIN packaging_types pt ON pt.id=ss.packaging_type_id WHERE cp.is_active=1"),
    '14': () => { const f = df('COALESCE(sm.movement_date, sm.created_at)'); return db.prepare("SELECT COALESCE(sm.movement_date, sm.created_at) as 'التاريخ', sm.stock_type as 'نوع المخزون', COALESCE(cp.name,'-') as 'الصنف', COALESCE(pt.name,'-') as 'العبوة', sm.quantity_delta as 'الكمية/الوزن', sm.notes as 'ملاحظات' FROM stock_movements sm LEFT JOIN coffee_products cp ON cp.id=sm.product_id LEFT JOIN packaging_types pt ON pt.id=sm.packaging_type_id WHERE 1=1" + f.s + " ORDER BY sm.id DESC LIMIT 200").bind(...f.a); },
    '15': () => { const f = df('pb.production_date'); return db.prepare("SELECT pb.batch_number as 'رقم الدفعة', pb.production_date as 'التاريخ', cp.name as 'الصنف', ROUND(pb.total_finished_weight_grams/1000.0, 3) as 'الوزن المعبأ (كجم)' FROM production_batches pb JOIN coffee_products cp ON cp.id=pb.product_id WHERE 1=1" + f.s + " ORDER BY pb.id DESC").bind(...f.a); },
    '16': () => { const f = df('pb.production_date'); return db.prepare("SELECT pb.batch_number as 'رقم الدفعة', cp.name as 'الصنف', ROUND(pb.total_finished_weight_grams/1000.0, 3) as 'الوزن (كجم)', pb.raw_coffee_cost_piasters as 'تكلفة البن_قرش', pb.packaging_cost_piasters as 'تكلفة العبوات_قرش', pb.sticker_cost_piasters as 'تكلفة الاستيكر_قرش', pb.total_cost_piasters as 'التكلفة الكلية_قرش' FROM production_batches pb JOIN coffee_products cp ON cp.id=pb.product_id WHERE 1=1" + f.s + " ORDER BY pb.id DESC").bind(...f.a); },
    '17': () => { const f = df('e.expense_date'); return db.prepare("SELECT e.expense_date as 'التاريخ', ec.name as 'التصنيف', e.description as 'الوصف', e.amount_piasters as 'المبلغ_قرش' FROM expenses e LEFT JOIN expense_categories ec ON ec.id=e.category_id WHERE 1=1" + f.s + " ORDER BY e.id DESC").bind(...f.a); },
    '18': () => { const f = df('movement_date'); return db.prepare("SELECT movement_date as 'التاريخ', direction as 'الاتجاه', movement_type as 'النوع', description as 'البيان', amount_piasters as 'المبلغ_قرش' FROM cash_movements WHERE 1=1" + f.s + " ORDER BY id DESC").bind(...f.a); },
    '20': () => { const f = df('si.invoice_date'); return db.prepare("SELECT cp.name as 'الصنف', ROUND(SUM(sii.quantity_units * pt.net_weight_grams)/1000.0, 3) as 'إجمالي الوزن المباع (كجم)', SUM(sii.quantity_units) as 'عدد البرطمانات', SUM(sii.line_total_piasters) as 'إجمالي المبيعات_قرش', SUM(sii.quantity_units * (" + finalUnitCostSql + ")) as 'تكلفة المنتج النهائي_قرش', SUM(sii.line_total_piasters - (sii.quantity_units * (" + finalUnitCostSql + "))) as 'هامش الربح_قرش' FROM sales_invoice_items sii JOIN sales_invoices si ON si.id=sii.invoice_id JOIN coffee_products cp ON cp.id=sii.product_id JOIN packaging_types pt ON pt.id=sii.packaging_type_id WHERE si.status='posted' AND COALESCE(si.invoice_number, '') NOT LIKE 'DEBT-%'" + f.s + " GROUP BY sii.product_id ORDER BY 2 DESC").bind(...f.a); }
  };

  if (type === '13') {
    const finRes = await db.prepare(`
      SELECT
        cp.id as product_id,
        cp.name as product_name,
        COALESCE(cp.sale_price_1_piasters, 0) as sale_price_1_piasters,
        COALESCE(cp.sale_price_2_piasters, 0) as sale_price_2_piasters,
        pt.id as packaging_type_id,
        pt.name as packaging_name,
        COALESCE(pt.net_weight_grams, 250) as net_weight_grams,
        COALESCE(fs.quantity_units, 0) as quantity_units,
        COALESCE(fs.average_cost_per_unit_piasters, 0) as fs_unit_cost_piasters
      FROM coffee_products cp
      CROSS JOIN packaging_types pt
      LEFT JOIN finished_stock fs ON fs.product_id = cp.id AND fs.packaging_type_id = pt.id
      WHERE cp.is_active = 1 AND pt.is_active = 1
      ORDER BY COALESCE(fs.quantity_units, 0) DESC, cp.id ASC, pt.net_weight_grams DESC
    `).all();

    const rows = [];
    for (const r of (finRes.results || [])) {
      const qty = Number(r.quantity_units || 0);
      const netG = Number(r.net_weight_grams || 250);
      const resolvedCost = await resolveFinalUnitCostPiasters(db, r.product_id, r.packaging_type_id);
      const unitCost = Math.max(Number(r.fs_unit_cost_piasters || 0), resolvedCost);
      const saleKg = Number(r.sale_price_1_piasters || 0);
      const unitSale = Math.round((saleKg * netG) / 1000);
      const invCostVal = qty * unitCost;
      const totalSaleVal = qty * unitSale;
      const expectedProfit = totalSaleVal - invCostVal;

      rows.push({
        'الصنف': r.product_name,
        'البرطمان': r.packaging_name,
        'عدد البرطمانات': qty,
        'إجمالي الوزن (كجم)': +((qty * netG) / 1000).toFixed(3),
        'تكلفة البرطمان النهائية (ج.م)': (unitCost / 100).toFixed(2) + ' ج.م',
        'سعر بيع الكيلو (ج.م)': (saleKg / 100).toFixed(2) + ' ج.م',
        'سعر بيع البرطمان (ج.م)': (unitSale / 100).toFixed(2) + ' ج.م',
        'قيمة المخزون بالتكلفة_قرش': invCostVal,
        'إجمالي فلوس البيع_قرش': totalSaleVal,
        'صافي الربح المتوقع_قرش': expectedProfit
      });
    }
    return json({ rows });
  }

  if (type === '19') {
    const fSale = df('si.invoice_date'), fExp = df('expense_date');
    const sRow = await db.prepare("SELECT COALESCE(SUM(si.total_piasters),0) as rev FROM sales_invoices si WHERE si.status='posted' AND COALESCE(si.invoice_number, '') NOT LIKE 'DEBT-%'" + fSale.s).bind(...fSale.a).first();
    const cRow = await db.prepare("SELECT COALESCE(SUM(sii.quantity_units * (" + finalUnitCostSql + ")),0) as cogs FROM sales_invoice_items sii JOIN sales_invoices si ON si.id=sii.invoice_id WHERE si.status='posted' AND COALESCE(si.invoice_number, '') NOT LIKE 'DEBT-%'" + fSale.s).bind(...fSale.a).first();
    const eRow = await db.prepare("SELECT COALESCE(SUM(amount_piasters),0) as exp FROM expenses WHERE COALESCE(affects_profit,1)=1" + fExp.s).bind(...fExp.a).first();
    const rev = Number(sRow?.rev || 0), cogs = Number(cRow?.cogs || 0), exp = Number(eRow?.exp || 0);
    return json({
      rows: [
        { 'البند المالي': '1. إجمالي المبيعات المرحلة', 'القيمة_قرش': rev },
        { 'البند المالي': '2. تكلفة المنتج النهائي المباع (بن خام + عبوة + استيكر)', 'القيمة_قرش': cogs },
        { 'البند المالي': '3. مجمل الربح / هامش الربح (المبيعات - تكلفة المنتج النهائي)', 'القيمة_قرش': rev - cogs },
        { 'البند المالي': '4. إجمالي المصروفات التشغيلية', 'القيمة_قرش': exp },
        { 'البند المالي': '5. صافي الربح النهائي (بعد خصم المصروفات)', 'القيمة_قرش': rev - cogs - exp }
      ]
    });
  }

  // REPORT 21: حسابات سعر التكلفة (قبل وبعد التكلفة وطريقة الحساب)
  if (type === '21') {
    const [prodsRes, rawRes, pkgsRes, stksRes, finRes, globalRawRow, lastPurRaw] = await db.batch([
      db.prepare('SELECT * FROM coffee_products WHERE is_active=1 ORDER BY id ASC'),
      db.prepare('SELECT product_id, average_cost_per_kg_piasters FROM raw_coffee_stock'),
      db.prepare('SELECT pt.id, pt.name, pt.net_weight_grams, COALESCE(ps.average_cost_per_unit_piasters,0) as pkg_cost FROM packaging_types pt LEFT JOIN packaging_stock ps ON ps.packaging_type_id=pt.id'),
      db.prepare('SELECT product_id, packaging_type_id, quantity_units, average_cost_per_unit_piasters FROM sticker_skus WHERE is_active=1'),
      db.prepare('SELECT product_id, packaging_type_id, average_cost_per_unit_piasters FROM finished_stock'),
      db.prepare('SELECT ROUND(AVG(average_cost_per_kg_piasters)) as avg_cost FROM raw_coffee_stock WHERE average_cost_per_kg_piasters > 0'),
      db.prepare("SELECT unit_cost_piasters FROM purchase_items WHERE item_type='raw_coffee' AND unit_cost_piasters > 0 ORDER BY id DESC LIMIT 1")
    ]);
    const prods = prodsRes.results || [];
    const raws = rawRes.results || [];
    const pkgs = pkgsRes.results || [];
    const stks = stksRes.results || [];
    const fins = finRes.results || [];
    const fallbackRawKg = Number(globalRawRow?.results?.[0]?.avg_cost || 0) || Number(lastPurRaw?.results?.[0]?.unit_cost_piasters || 0);

    const pk250 = pkgs.find(x => Number(x.net_weight_grams) === 250) || pkgs[0] || { id: 1, pkg_cost: 0 };
    const pk125 = pkgs.find(x => Number(x.net_weight_grams) === 125) || pkgs[1] || { id: 2, pkg_cost: 0 };
    const pkg250Cost = Math.round(Number(pk250.pkg_cost || 0));
    const pkg125Cost = Math.round(Number(pk125.pkg_cost || 0));
    const pkgKgCost = pkg250Cost * 4;

    const fmtEgp = (p) => (Number(p || 0) / 100).toFixed(2);
    const rows = [];

    for (const p of prods) {
      const rRow = raws.find(r => Number(r.product_id) === Number(p.id));
      const directRawKg = Math.round(Number(rRow?.average_cost_per_kg_piasters || 0));
      const usedFallback = directRawKg <= 0 && fallbackRawKg > 0;
      const effRawKg = directRawKg > 0 ? directRawKg : fallbackRawKg;

      const stk250Row = stks.find(s => Number(s.product_id) === Number(p.id) && Number(s.packaging_type_id) === Number(pk250.id));
      const stk125Row = stks.find(s => Number(s.product_id) === Number(p.id) && Number(s.packaging_type_id) === Number(pk125.id));
      const stk250Cost = (stk250Row && Number(stk250Row.quantity_units) > 0) ? Math.round(Number(stk250Row.average_cost_per_unit_piasters || 0)) : 0;
      const stk125Cost = (stk125Row && Number(stk125Row.quantity_units) > 0) ? Math.round(Number(stk125Row.average_cost_per_unit_piasters || 0)) : 0;
      const stkKgCost = stk250Cost * 4;

      const fin250Row = fins.find(f => Number(f.product_id) === Number(p.id) && Number(f.packaging_type_id) === Number(pk250.id));
      const fin125Row = fins.find(f => Number(f.product_id) === Number(p.id) && Number(f.packaging_type_id) === Number(pk125.id));
      const manualKg = Math.round(Number(p.manual_final_cost_kg_piasters || 0));

      const calc250 = effRawKg > 0 ? (Math.round(effRawKg * 0.25) + pkg250Cost + stk250Cost) : 0;
      const calc125 = effRawKg > 0 ? (Math.round(effRawKg * 0.125) + pkg125Cost + stk125Cost) : 0;
      const calcKg = calc250 * 4;

      const final250 = manualKg > 0 ? Math.round(manualKg * 0.25) : Math.max(Number(fin250Row?.average_cost_per_unit_piasters || 0), calc250);
      const final125 = manualKg > 0 ? Math.round(manualKg * 0.125) : Math.max(Number(fin125Row?.average_cost_per_unit_piasters || 0), calc125);
      const finalKg = manualKg > 0 ? manualKg : (final250 > 0 ? final250 * 4 : effRawKg);
      const diffKg = Math.max(0, finalKg - effRawKg);

      let howText = '';
      if (manualKg > 0) {
        howText = `تكلفة نهائية يدوية مسجلة للصنف (${fmtEgp(manualKg)} ج.م/كجم) ← الربع: ${fmtEgp(final250)} ج.م | الثمن: ${fmtEgp(final125)} ج.م`;
      } else if (effRawKg > 0) {
        howText = `بن خام (${fmtEgp(effRawKg)} ج.م/كجم${usedFallback ? ' [متوسط عام]' : ''}) + 4 عبوات ربع (4 × ${fmtEgp(pkg250Cost)} = ${fmtEgp(pkgKgCost)} ج.م) + 4 استيكرات (4 × ${fmtEgp(stk250Cost)} = ${fmtEgp(stkKgCost)} ج.م) = ${fmtEgp(calcKg)} ج.م/كجم`;
        if (finalKg > calcKg) {
          howText += ` | أعلى تكلفة دفعة إنتاج مسجلة بالمخزون: ${fmtEgp(finalKg)} ج.م/كجم`;
        }
      } else {
        howText = 'لم تُسجل تكلفة بن خام أو تكلفة يدوية لهذا الصنف بعد';
      }

      rows.push({
        'الصنف': p.name,
        'سعر كيلو البن قبل التكلفة (الخام)_قرش': effRawKg,
        'تكلفة العبوات للكيلو (4 ربع)_قرش': pkgKgCost,
        'تكلفة الاستيكرات للكيلو (4 ربع)_قرش': stkKgCost,
        'سعر الكيلو بعد التكلفة (النهائي)_قرش': finalKg,
        'الفرق المضاف على الكيلو_قرش': diffKg,
        'تكلفة برطمان الربع (250 جم)_قرش': final250,
        'تكلفة برطمان الثمن (125 جم)_قرش': final125,
        'طريقة حساب التكلفة (اتحسبت إزاي)': howText
      });
    }
    return json({ rows });
  }

  if (queries[type]) {
    const res = await queries[type]().all();
    return json({ rows: res.results || [] });
  }
  return json({ rows: [] });
}

/* ============================================================================
 * 6. FRONTEND v5.5 (ROYAL LOGO SHIMMER + SOUND CONTROLS + COST REPORT #21)
 * ============================================================================ */
function renderHtml() {
  return String.raw`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <meta name="theme-color" content="#d4af37" />
  <title>مَلَكِي | MALAKY MANAGEMENT v5.5</title>
  <link rel="manifest" href="/manifest.json" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@600;700;800;900&display=swap" rel="stylesheet" media="print" onload="this.media='all'" />
  <style id="dynamic-print-page"></style>
  <style>
    :root {
      --bg: #f5f3f7; --card: #ffffff; --card2: #ede9f2; --gold: #9a6728; --gold2: #d4af37;
      --teal: #0d9488; --purple: #7c3aed;
      --gold-bright: #f6d786; --text: #1b1622; --muted: #5d536b; --border: #d8cee6; --ok: #0d9488; --err: #dc2626;
      --btn-txt: #ffffff; --shadow: 0 4px 16px rgba(124, 58, 237, 0.08);
      --royal-accent-grad: linear-gradient(135deg, #0d9488 0%, #6d28d9 65%, #9a6728 100%);
      --gold-grad: linear-gradient(135deg, #8c5a2b 0%, #d4af37 50%, #7d4e22 100%);
      --shimmer-color: rgba(246, 215, 134, 0.38);
    }
    body.theme-dark {
      --bg: #090b10; --card: #11151f; --card2: #181e2c; --gold: #d4af37; --gold2: #f6d786;
      --teal: #2dd4bf; --purple: #a855f7;
      --gold-bright: #ffe699; --text: #f3effa; --muted: #9ca3b8; --border: rgba(212, 175, 55, 0.28); --ok: #2dd4bf; --err: #f87171;
      --btn-txt: #090b10; --shadow: 0 6px 24px rgba(0, 0, 0, 0.65);
      --royal-accent-grad: linear-gradient(135deg, #2dd4bf 0%, #a855f7 68%, #d4af37 100%);
      --gold-grad: linear-gradient(135deg, #2dd4bf 0%, #8b5cf6 58%, #d4af37 100%);
      --shimmer-color: rgba(255, 235, 165, 0.34);
    }

    @keyframes malakyShimmerSweep {
      0% { transform: translateX(130%) skewX(-22deg); }
      55%, 100% { transform: translateX(-160%) skewX(-22deg); }
    }
    @keyframes malakyRoyalGlow {
      0%, 100% { box-shadow: 0 0 10px rgba(212, 175, 55, 0.32), 0 0 2px rgba(246, 215, 134, 0.45); }
      50% { box-shadow: 0 0 20px rgba(212, 175, 55, 0.65), 0 0 8px rgba(246, 215, 134, 0.7); }
    }
    @keyframes malakyBorderPulse {
      0%, 100% { border-color: var(--gold); }
      50% { border-color: var(--gold2); }
    }

    * { box-sizing:border-box; margin:0; padding:0; font-family:'Cairo',Tahoma,sans-serif; -webkit-tap-highlight-color:transparent; }
    body { background:var(--bg); color:var(--text); min-height:100vh; display:flex; flex-direction:column; overflow-x:hidden; }
    body.theme-dark {
      background-image:
        radial-gradient(circle at 16% 18%, rgba(45, 212, 191, 0.13), transparent 42%),
        radial-gradient(circle at 84% 22%, rgba(168, 85, 247, 0.14), transparent 42%),
        radial-gradient(circle at 50% 85%, rgba(212, 175, 55, 0.08), transparent 45%);
      background-attachment: fixed;
    }
    .app-wrap { display:flex; min-height:100vh; position:relative; }
    .sidebar-backdrop { display:none; position:fixed; inset:0; background:rgba(0,0,0,0.55); z-index:998; }
    .sidebar-backdrop.open { display:block; }
    .sidebar { width:272px; background:var(--card); border-left:1.5px solid var(--border); display:flex; flex-direction:column; transition:transform 0.18s ease-out; will-change:transform; z-index:999; flex-shrink:0; }

    .brand {
      padding:14px; border-bottom:1.5px solid var(--gold); text-align:center;
      background:linear-gradient(160deg, #0d1219 0%, #171324 55%, #1c150c 100%);
      color:#f6d786; position:relative; overflow:hidden;
    }
    .brand::after {
      content:''; position:absolute; top:0; left:0; width:45%; height:100%;
      background:linear-gradient(90deg, transparent, rgba(246,215,134,0.18), transparent);
      animation:malakyShimmerSweep 5.5s infinite; pointer-events:none;
    }
    .brand img {
      height:68px; width:68px; object-fit:cover; margin-bottom:6px; border-radius:50%;
      border:2.5px solid #d4af37; animation:malakyRoyalGlow 3.2s ease-in-out infinite;
    }
    .brand h1 { color:#f6d786; font-size:21px; font-weight:900; text-shadow:0 1px 6px rgba(212,175,55,0.4); }

    .nav { flex:1; overflow-y:auto; padding:10px; }
    .nav-btn {
      width:100%; text-align:right; background:transparent; border:1px solid transparent; color:var(--text);
      padding:9px 13px; border-radius:10px; cursor:pointer; font-size:13.5px; font-weight:700;
      margin-bottom:4px; display:flex; align-items:center; justify-content:space-between;
      position:relative; overflow:hidden; transition:transform 0.1s ease, border-color 0.2s ease;
    }
    .nav-btn:hover { border-color:var(--gold); background:var(--card2); }
    .nav-btn.active {
      background:var(--gold-grad); color:var(--btn-txt); font-weight:900;
      box-shadow:0 3px 12px rgba(212,175,55,0.32);
    }
    .nav-btn.active::after {
      content:''; position:absolute; top:0; left:0; width:40%; height:100%;
      background:linear-gradient(90deg, transparent, var(--shimmer-color), transparent);
      animation:malakyShimmerSweep 4.2s infinite; pointer-events:none;
    }

    .main { flex:1; display:flex; flex-direction:column; min-width:0; }
    .topbar {
      position:sticky; top:0; z-index:900; background:var(--card); border-bottom:1.5px solid var(--gold);
      padding:8px 12px; display:flex; justify-content:space-between; align-items:center; gap:6px; flex-wrap:wrap;
      box-shadow:0 3px 14px rgba(212,175,55,0.14);
    }
    .content { padding:12px; flex:1; max-width:1360px; width:100%; margin:0 auto; }
    .grid { display:grid; grid-template-columns:repeat(auto-fit, minmax(165px, 1fr)); gap:10px; margin-bottom:14px; }
    .kpi {
      background:var(--card); border:1px solid var(--border); border-right:4px solid var(--gold);
      border-radius:12px; padding:12px; box-shadow:var(--shadow); position:relative; overflow:hidden;
    }
    .kpi::before {
      content:''; position:absolute; top:0; right:0; width:100%; height:2px;
      background:linear-gradient(90deg, var(--teal), var(--gold2), var(--purple)); opacity:0.85;
    }
    .kpi .lbl { color:var(--muted); font-size:12px; font-weight:700; }
    .kpi .val { color:var(--gold); font-size:18px; font-weight:900; margin-top:4px; }
    .panel {
      background:var(--card); border:1.5px solid var(--border); border-radius:13px;
      padding:14px; margin-bottom:14px; box-shadow:var(--shadow);
    }
    .panel h3 { color:var(--gold); margin-bottom:12px; font-size:15.5px; border-bottom:1px solid var(--border); padding-bottom:8px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:6px; }
    .form-grid { display:grid; grid-template-columns:repeat(auto-fit, minmax(190px, 1fr)); gap:10px; margin-bottom:12px; }
    label { display:block; font-size:12px; color:var(--muted); margin-bottom:4px; font-weight:700; }
    input, select { width:100%; min-height:41px; padding:6px 10px; background:var(--card2); border:1px solid var(--border); border-radius:9px; color:var(--text); font-size:14px; font-weight:600; }
    input:focus, select:focus { outline:none; border-color:var(--gold2); box-shadow:0 0 0 2px rgba(212,175,55,0.22); }

    .combo-wrap { position:relative; width:100%; }
    .combo-input { width:100%; background:var(--card2); border:2px solid var(--gold); border-radius:9px; padding:7px 11px; font-weight:800; font-size:14.5px; color:var(--text); cursor:text; }
    .combo-list { display:none; position:absolute; top:100%; right:0; left:0; min-width:250px; max-height:220px; overflow-y:auto; background:var(--card); border:2px solid var(--gold); border-radius:9px; z-index:2000; box-shadow:0 8px 20px rgba(0,0,0,0.25); margin-top:3px; }
    .combo-list.open { display:block; }
    .combo-item { padding:9px 11px; border-bottom:1px solid var(--border); cursor:pointer; font-size:13.5px; font-weight:700; display:flex; justify-content:space-between; align-items:center; gap:8px; }
    .combo-item:hover { background:var(--gold); color:var(--btn-txt); }

    .btn {
      background:var(--gold-grad); color:var(--btn-txt); border:1px solid rgba(212,175,55,0.5);
      min-height:38px; padding:6px 13px; border-radius:9px; font-weight:800; cursor:pointer; font-size:13px;
      display:inline-flex; align-items:center; justify-content:center; gap:5px;
      position:relative; overflow:hidden; transition:transform 0.08s ease, box-shadow 0.15s ease;
    }
    .btn:active { transform:scale(0.97); }
    .btn:not(.btn-sec):not(.btn-del)::after {
      content:''; position:absolute; top:0; left:0; width:45%; height:100%;
      background:linear-gradient(90deg, transparent, var(--shimmer-color), transparent);
      animation:malakyShimmerSweep 4.8s infinite; pointer-events:none;
    }
    .btn-sec { background:var(--card2); color:var(--text); border:1px solid var(--border); }
    .btn-sm { min-height:30px; padding:4px 9px; font-size:12px; border-radius:7px; }
    .btn-del { background:rgba(220,38,38,0.14); color:var(--err); border:1px solid var(--err); }
    .bt-pill { display:inline-flex; align-items:center; gap:5px; padding:5px 10px; border-radius:20px; font-size:12px; font-weight:800; cursor:pointer; border:1px solid var(--gold); background:var(--card2); color:var(--text); }
    .bt-pill.connected { background:rgba(13,148,136,0.16); color:var(--ok); border-color:var(--ok); }

    .sound-pill {
      display:inline-flex; align-items:center; gap:5px; padding:3px 9px; border-radius:20px;
      border:1px solid var(--gold); background:var(--card2); color:var(--text);
    }
    .sound-pill button {
      background:none; border:none; cursor:pointer; font-size:15px; padding:2px; color:var(--gold); line-height:1;
    }
    .sound-pill input[type="range"] {
      width:64px; min-height:18px; height:6px; padding:0; accent-color:var(--gold); cursor:pointer; border:none; background:transparent;
    }

    .tbl-wrap { overflow-x:auto; border-radius:10px; border:1px solid var(--border); -webkit-overflow-scrolling:touch; }
    table { width:100%; border-collapse:collapse; font-size:13px; min-width:460px; }
    th, td { padding:8px 9px; border-bottom:1px solid var(--border); text-align:right; }
    th { color:var(--gold); background:var(--card2); font-weight:800; white-space:nowrap; }
    tfoot td { background:var(--card2); font-weight:800; color:var(--gold); border-top:2px solid var(--gold); }
    .more-bar { text-align:center; padding:8px; background:var(--card2); border-top:1px solid var(--border); }
    .toast { position:fixed; bottom:74px; left:16px; right:16px; max-width:460px; margin:0 auto; padding:11px 15px; border-radius:11px; font-weight:700; z-index:9999; display:none; text-align:center; box-shadow:0 5px 16px rgba(0,0,0,0.3); }
    .menu-toggle { display:none; background:var(--card2); border:1px solid var(--gold); color:var(--gold); padding:6px 11px; border-radius:9px; font-weight:800; cursor:pointer; }
    .bottom-nav { display:none; position:fixed; bottom:0; left:0; right:0; height:60px; background:var(--card); border-top:1.5px solid var(--gold); z-index:950; justify-content:space-around; align-items:center; }
    .bnav-btn { flex:1; background:none; border:none; color:var(--muted); display:flex; flex-direction:column; align-items:center; font-size:11px; font-weight:700; padding:4px 2px; cursor:pointer; }
    .bnav-btn.active { color:var(--gold); background:var(--card2); border-radius:8px; }
    .modal-overlay { display:none; position:fixed; inset:0; background:rgba(0,0,0,0.75); z-index:5000; align-items:center; justify-content:center; padding:12px; overflow-y:auto; }
    .modal-box { background:#fff; color:#000; width:100%; max-width:840px; border-radius:12px; padding:16px; max-height:92vh; overflow-y:auto; border:2px solid #d4af37; }
    @media (max-width: 820px) {
      .sidebar { position:fixed; right:0; top:0; bottom:0; transform:translateX(102%); width:270px; }
      .sidebar.open { transform:translateX(0); }
      .menu-toggle { display:inline-flex; }
      .bottom-nav { display:flex; }
      .main { padding-bottom:66px; }
      .grid { grid-template-columns:repeat(2, 1fr); }
      .form-grid { grid-template-columns:1fr; }
      .sound-pill input[type="range"] { width:48px; }
    }

    /* 1. قالب الطباعة الحرارية */
    .thermal-receipt { width:100%; max-width:576px; box-sizing:border-box; margin:0 auto; padding:6px 4px; direction:rtl; color:#000; background:#fff; font-family:'Cairo',Tahoma,Arial,sans-serif; font-size:14px; font-weight:700; line-height:1.45; }
    .thermal-receipt * { box-sizing:border-box; color:#000; }
    .thermal-receipt .tr-center { text-align:center; }
    .thermal-receipt .tr-logo { display:block; max-width:160px; max-height:95px; margin:0 auto 4px; object-fit:contain; filter:contrast(150%) grayscale(100%); }
    .thermal-receipt .tr-qr { display:block; max-width:130px; max-height:130px; margin:6px auto 4px; object-fit:contain; filter:contrast(180%) grayscale(100%); }
    .thermal-receipt .tr-title { font-size:26px; font-weight:900; margin:0; line-height:1.2; }
    .thermal-receipt .tr-subtitle { font-size:13px; font-weight:800; letter-spacing:1px; margin:0 0 3px; }
    .thermal-receipt .tr-inv-bar { background:#000; color:#fff !important; padding:5px 8px; border-radius:4px; display:flex; justify-content:space-between; align-items:center; font-size:14px; font-weight:800; margin:6px 0; }
    .thermal-receipt .tr-inv-bar * { color:#fff !important; }
    .thermal-receipt .tr-box { border:1.5px solid #000; border-radius:4px; padding:5px 8px; margin:5px 0; }
    .thermal-receipt .tr-tbl-head { background:#000; color:#fff !important; padding:5px 8px; display:flex; justify-content:space-between; font-size:14px; font-weight:800; border-radius:3px; margin-top:6px; }
    .thermal-receipt .tr-tbl-head * { color:#fff !important; }
    .thermal-receipt .tr-rule { border-top:1.5px dashed #000; margin:6px 0; height:0; }
    .thermal-receipt .tr-solid-rule { border-top:2px solid #000; margin:6px 0; height:0; }
    .thermal-receipt .tr-line { display:flex; justify-content:space-between; align-items:center; gap:8px; margin:5px 0; font-size:15px; font-weight:700; line-height:1.55; }
    .thermal-receipt .tr-line strong { font-weight:800; }
    .thermal-receipt .tr-item { padding:9px 2px; border-bottom:1.5px dashed #444; }
    .thermal-receipt .tr-item-top { display:flex; justify-content:space-between; align-items:center; font-size:16px; font-weight:900; margin-bottom:4px; }
    .thermal-receipt .tr-item-sub { font-size:13.5px; font-weight:700; color:#111; line-height:1.5; }
    .thermal-receipt .tr-total { font-size:17px; font-weight:900; border:2px solid #000; padding:6px 8px; border-radius:4px; margin:5px 0; background:#f5f5f5; }
    .thermal-receipt .tr-small { font-size:12.5px; font-weight:700; }

    /* 2. قالب الطباعة الورق العادي الكبير A4 */
    .a4-sheet { width:100%; max-width:210mm; margin:0 auto; padding:12mm; direction:rtl; color:#000; background:#fff; font-family:'Cairo',Tahoma,Arial,sans-serif; font-size:14px; line-height:1.6; border:1px solid #ccc; }
    .a4-sheet * { box-sizing:border-box; color:#000; }
    .a4-header { display:flex; justify-content:space-between; align-items:center; border-bottom:3px solid #000; padding-bottom:12px; margin-bottom:16px; }
    .a4-title { font-size:24px; font-weight:900; }
    .a4-meta { display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:8px; background:#f7f7f7; border:1px solid #000; padding:10px 14px; border-radius:8px; margin-bottom:16px; font-weight:700; }
    .a4-table { width:100%; border-collapse:collapse; margin-bottom:16px; font-size:13.5px; min-width:0 !important; }
    .a4-table th, .a4-table td { border:1px solid #000 !important; padding:8px 10px !important; text-align:right; color:#000 !important; background:#fff !important; }
    .a4-table th { background:#eaeaea !important; font-weight:900; }
    .a4-table tfoot td { background:#f2f2f2 !important; font-weight:900; font-size:14.5px; }
    .a4-footer { margin-top:24px; padding-top:10px; border-top:1px dashed #000; display:flex; justify-content:space-between; font-size:12px; font-weight:700; }
    .a4-header-brand { display:flex; align-items:center; gap:12px; }
    .a4-logo { width:64px; height:64px; border-radius:50%; object-fit:cover; border:2px solid #8c5a2b; flex-shrink:0; background:#0b0806; }
    .modal-box.modal-wide { max-width:1160px; }
    .a4-sheet.a4-compact-fit { width:100%; max-width:287mm; padding:4mm 5mm; font-size:11.5px; line-height:1.35; border:1px solid #bbb; }
    .a4-sheet.a4-compact-fit .a4-header { padding-bottom:6px; margin-bottom:7px; border-bottom-width:2px; }
    .a4-sheet.a4-compact-fit .a4-logo { width:46px; height:46px; }
    .a4-sheet.a4-compact-fit .a4-title { font-size:17px; }
    .a4-sheet.a4-compact-fit .a4-table { width:100% !important; table-layout:fixed; font-size:11px; margin-bottom:6px; border-collapse:collapse; }
    .a4-sheet.a4-compact-fit .a4-table th, .a4-sheet.a4-compact-fit .a4-table td { padding:3.5px 5px !important; vertical-align:middle; white-space:normal !important; word-wrap:break-word; overflow-wrap:break-word; line-height:1.28; }
    .a4-sheet.a4-compact-fit .a4-table th { font-size:10.5px; background:#e5e5e5 !important; }
    .a4-sheet.a4-compact-fit .a4-table tfoot td { font-size:11px; font-weight:900; }
    .a4-sheet.a4-compact-fit .a4-table tr { page-break-inside:avoid; break-inside:avoid; }
    .a4-sheet.a4-compact-fit .a4-footer { margin-top:6px; padding-top:4px; font-size:10.5px; }
    .a4-sheet.a4-compact-fit .col-p { width:12%; }
    .a4-sheet.a4-compact-fit .col-n { width:8%; text-align:center; }
    .a4-sheet.a4-compact-fit .col-how { width:34%; font-size:10px; }

    /* 3. قالب منيو مَلَكِي الفاخر */
    .malaky-menu-sheet {
      width: 100%; max-width: 210mm; margin: 0 auto; padding: 10mm; direction: rtl;
      font-family: 'Cairo', Tahoma, Arial, sans-serif;
      -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; color-adjust: exact !important;
      border-radius: 14px; position: relative; overflow: hidden;
    }
    .malaky-menu-sheet * {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; color-adjust: exact !important;
    }
    .malaky-menu-sheet.theme-cream {
      background: linear-gradient(180deg, #fdfaf3 0%, #f5ede0 100%) !important;
      color: #2b180a !important;
      border: 4px solid #8c5a2b !important;
      box-shadow: inset 0 0 0 3px #fdfaf3, inset 0 0 0 5px #d4af37;
    }
    .malaky-menu-sheet.theme-dark {
      background: linear-gradient(180deg, #120d09 0%, #22160e 100%) !important;
      color: #f9eed8 !important;
      border: 4px solid #d4af37 !important;
      box-shadow: inset 0 0 0 3px #120d09, inset 0 0 0 5px #b8860b;
    }
    .mm-header {
      background: linear-gradient(135deg, #1b0f08 0%, #3d2211 50%, #1b0f08 100%) !important;
      color: #f6d786 !important;
      border: 2px solid #d4af37 !important;
      border-radius: 14px; padding: 18px 20px; text-align: center; margin-bottom: 16px; position: relative;
    }
    .mm-logo-wrap {
      width: 98px; height: 98px; margin: 0 auto 8px;
      border-radius: 50%; border: 3px solid #d4af37 !important;
      background: #0b0806 !important;
      display: flex; align-items: center; justify-content: center;
      overflow: hidden; box-shadow: 0 4px 14px rgba(212,175,55,0.35);
    }
    .mm-logo-wrap img { width: 94px; height: 94px; object-fit: cover; border-radius: 50%; }
    .mm-brand-title { font-size: 32px; font-weight: 900; color: #f6d786 !important; letter-spacing: 0.5px; line-height: 1.2; }
    .mm-brand-sub { font-size: 14px; font-weight: 800; color: #e5c168 !important; letter-spacing: 2px; margin-top: 2px; }
    .mm-slogan-pill {
      display: inline-block; margin-top: 8px; padding: 4px 18px;
      background: linear-gradient(90deg, #b8860b, #d4af37, #b8860b) !important;
      color: #1e1108 !important; font-weight: 900; font-size: 14px; border-radius: 999px;
    }
    .mm-ribbon {
      text-align: center; margin: 10px auto 14px; font-size: 19px; font-weight: 900;
      padding: 7px 16px; border-radius: 10px; border: 1.5px solid #d4af37 !important;
    }
    .theme-cream .mm-ribbon { background: #efe4d2 !important; color: #5c3415 !important; }
    .theme-dark .mm-ribbon { background: #2f1e13 !important; color: #f6d786 !important; }
    .mm-table { width: 100%; border-collapse: separate; border-spacing: 0 8px; min-width: 0 !important; }
    .mm-table th {
      background: linear-gradient(90deg, #2b180c, #4d2d18, #2b180c) !important;
      color: #f6d786 !important; font-size: 15px; font-weight: 900;
      padding: 11px 12px !important; border: none !important; text-align: center;
    }
    .mm-table th:first-child { text-align: right; border-radius: 0 10px 10px 0; padding-right: 16px !important; }
    .mm-table th:last-child { border-radius: 10px 0 0 10px; }
    .mm-row td {
      padding: 11px 12px !important; font-size: 16px; font-weight: 800; text-align: center;
      border-top: 1.5px solid #d4af37 !important; border-bottom: 1.5px solid #d4af37 !important;
    }
    .theme-cream .mm-row td { background: #ffffff !important; color: #2b180a !important; }
    .theme-cream .mm-row:nth-child(even) td { background: #faf3e6 !important; }
    .theme-dark .mm-row td { background: #21150d !important; color: #fcefd2 !important; }
    .theme-dark .mm-row:nth-child(even) td { background: #2c1c11 !important; }
    .mm-row td:first-child {
      text-align: right; padding-right: 16px !important;
      border-right: 4px solid #8c5a2b !important; border-radius: 0 10px 10px 0;
      font-size: 17px; font-weight: 900;
    }
    .theme-dark .mm-row td:first-child { border-right-color: #d4af37 !important; }
    .mm-row td:last-child { border-left: 1.5px solid #d4af37 !important; border-radius: 10px 0 0 10px; }
    .mm-price-badge { display: inline-block; padding: 4px 12px; border-radius: 8px; font-weight: 900; font-size: 16px; min-width: 88px; }
    .theme-cream .mm-price-badge { background: #f4ead8 !important; color: #5c3415 !important; border: 1px solid #d4af37 !important; }
    .theme-cream .mm-price-badge.highlight { background: linear-gradient(135deg, #8c5a2b, #6f451f) !important; color: #ffffff !important; border: 1px solid #5c3415 !important; }
    .theme-dark .mm-price-badge { background: #3b2618 !important; color: #f6d786 !important; border: 1px solid #d4af37 !important; }
    .theme-dark .mm-price-badge.highlight { background: linear-gradient(135deg, #d4af37, #b8860b) !important; color: #1b110b !important; }
    .mm-footer {
      margin-top: 16px; padding: 12px 16px; border-radius: 12px; border: 1.5px solid #d4af37 !important;
      display: flex; justify-content: space-between; align-items: center; gap: 12px; flex-wrap: wrap;
    }
    .theme-cream .mm-footer { background: #1e1108 !important; color: #f6d786 !important; }
    .theme-dark .mm-footer { background: #0f0905 !important; color: #f6d786 !important; }
    .mm-footer * { color: #f6d786 !important; }

    @media print {
      html, body { margin:0 !important; padding:0 !important; background:#fff !important; }
      body * { visibility:hidden !important; }
      #invoice-modal, #invoice-modal * { visibility:visible !important; }
      .app-wrap, #app, .modal-actions, .toast { display:none !important; }
      .modal-overlay { position:absolute !important; inset:0 !important; display:block !important; background:#fff !important; padding:0 !important; margin:0 !important; overflow:visible !important; }
      .modal-box { display:block !important; width:100% !important; max-width:none !important; max-height:none !important; overflow:visible !important; padding:0 !important; margin:0 !important; border:0 !important; border-radius:0 !important; box-shadow:none !important; }

      body.print-mode-thermal { width:100% !important; margin:0 !important; padding:0 !important; }
      body.print-mode-thermal #invoice-print-content { width:100% !important; margin:0 !important; padding:0 !important; }
      body.print-mode-thermal .thermal-receipt { width:100% !important; max-width:100% !important; margin:0 !important; padding:1mm 0.5mm !important; transform:none !important; page-break-inside:avoid; }

      body.print-mode-a4 { width:210mm !important; }
      body.print-mode-a4 #invoice-print-content { width:100% !important; max-width:210mm !important; margin:0 auto !important; padding:0 !important; }
      body.print-mode-a4 .a4-sheet { border:none !important; width:100% !important; max-width:100% !important; padding:8mm !important; margin:0 !important; }
      body.print-mode-a4-fit { width:100% !important; margin:0 !important; padding:0 !important; }
      body.print-mode-a4-fit #invoice-print-content { width:100% !important; max-width:100% !important; margin:0 !important; padding:0 !important; overflow:visible !important; }
      body.print-mode-a4-fit .a4-sheet.a4-compact-fit { border:none !important; width:100% !important; max-width:100% !important; padding:0 !important; margin:0 !important; zoom:1 !important; overflow:visible !important; }
      body.print-mode-a4 .malaky-menu-sheet { width:100% !important; max-width:100% !important; padding:8mm !important; margin:0 !important; -webkit-print-color-adjust:exact !important; print-color-adjust:exact !important; }
    }
  </style>
</head>
<body>
  <div id="toast" class="toast"></div>
  <div id="invoice-modal" class="modal-overlay">
    <div class="modal-box">
      <div class="modal-actions" id="modal-print-actions" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:12px;border-bottom:1px solid #ddd;padding-bottom:10px;">
      </div>
      <div id="invoice-print-content"></div>
    </div>
  </div>
  <div id="app"></div>

  <script>
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then(function(regs) { regs.forEach(function(r) { r.unregister(); }); });
      if (window.caches) caches.keys().then(function(keys) { keys.forEach(function(k) { caches.delete(k); }); });
    }

    var DEFAULT_LOGO_DATA_URL = 'data:image/jpeg;base64,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';

    function hardRefreshApp() {
      S.cache = {};
      location.href = location.pathname + '?v=' + Date.now() + '#' + (S.tab || 'dashboard');
    }

    var S = {
      user: null, settings: {}, hasUsers: true, dbError: null, tab: 'dashboard',
      theme: localStorage.getItem('malaky_theme_v2') || 'dark',
      soundVolume: localStorage.getItem('malaky_sound_vol') !== null ? Number(localStorage.getItem('malaky_sound_vol')) : 0.6,
      soundMuted: localStorage.getItem('malaky_sound_muted') === '1',
      sidebarOpen: false, navStack: ['dashboard'],
      expandedLists: {},
      editingProduct: null,
      editingCustomer: null,
      editingPurIdx: -1,
      editingSaleIdx: -1,
      adjType: 'raw_coffee',
      products: [], inventory: { raw:[], packaging:[], stickers:[], finished:[] },
      purchases: [], production: [], sales: [], customers: [], suppliers: [], expenses: [], categories: [],
      cash: { summary:{}, movements:[] }, usersData: { users:[], audit:[] },
      purItems: [], saleItems: [], reportRows: [], currentReport: '1', menuTheme: 'dark', menuTier: '1', menuCols: 'all',
      cache: {},
      btDevice: null, btChar: null, btChars: [], btCharInfos: [], btSelectedCharIdx: 0, btDebugLog: '', btName: localStorage.getItem('malaky_bt_name') || '',
      btPaperDots: Number(localStorage.getItem('malaky_bt_dots_v3') || 384),
      btCmdMode: localStorage.getItem('malaky_bt_cmd_mode') || 'escpos',
      btSpeedMode: localStorage.getItem('malaky_bt_speed') || 'safe',
      btDriverMethod: localStorage.getItem('malaky_bt_driver') || 'auto',
      lastThermalSaleId: null
    };

    if (S.theme === 'dark') document.body.classList.add('theme-dark');
    function toggleTheme() {
      S.theme = S.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('malaky_theme_v2', S.theme);
      document.body.classList.toggle('theme-dark', S.theme === 'dark');
      renderMainOnly();
    }

    /* ============================================================================
     * ROYAL UI BUTTON SOUND ENGINE (WEB AUDIO API — VOLUME + MUTE)
     * ============================================================================ */
    function getAudioCtx() {
      try {
        if (!window._malakyAudioCtx) {
          var Ctx = window.AudioContext || window.webkitAudioContext;
          if (!Ctx) return null;
          window._malakyAudioCtx = new Ctx();
        }
        if (window._malakyAudioCtx.state === 'suspended') {
          window._malakyAudioCtx.resume().catch(function() {});
        }
        return window._malakyAudioCtx;
      } catch (_) { return null; }
    }

    function playBtnSound(kind) {
      if (S.soundMuted || S.soundVolume <= 0) return;
      var ctx = getAudioCtx();
      if (!ctx) return;
      try {
        var now = ctx.currentTime;
        var osc = ctx.createOscillator();
        var gain = ctx.createGain();
        var vol = Math.min(1, Math.max(0, S.soundVolume)) * 0.22;

        if (kind === 'primary') {
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(640, now);
          osc.frequency.exponentialRampToValueAtTime(980, now + 0.055);
          gain.gain.setValueAtTime(vol, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.075);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now);
          osc.stop(now + 0.08);
        } else if (kind === 'delete') {
          osc.type = 'sine';
          osc.frequency.setValueAtTime(340, now);
          osc.frequency.exponentialRampToValueAtTime(190, now + 0.055);
          gain.gain.setValueAtTime(vol, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now);
          osc.stop(now + 0.065);
        } else {
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(760, now);
          osc.frequency.exponentialRampToValueAtTime(420, now + 0.042);
          gain.gain.setValueAtTime(vol * 0.85, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.048);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now);
          osc.stop(now + 0.05);
        }
      } catch (_) {}
    }

    function updateSoundControlsUi() {
      var isMuted = S.soundMuted || S.soundVolume <= 0;
      var pct = Math.round((S.soundVolume || 0) * 100);
      var icon = isMuted ? '🔇' : (pct < 45 ? '🔉' : '🔊');
      var muteBtn = document.getElementById('topbar-mute-btn');
      var slider = document.getElementById('topbar-vol-slider');
      var setSlider = document.getElementById('settings-vol-slider');
      var setLbl = document.getElementById('settings-vol-lbl');
      var setMuteBtn = document.getElementById('settings-mute-btn');
      if (muteBtn) muteBtn.textContent = icon;
      if (slider) slider.value = isMuted ? 0 : pct;
      if (setSlider) setSlider.value = isMuted ? 0 : pct;
      if (setLbl) setLbl.textContent = isMuted ? 'مكتوم (0%)' : (pct + '%');
      if (setMuteBtn) setMuteBtn.textContent = isMuted ? '🔊 إلغاء كتم الصوت' : '🔇 كتم الصوت';
    }

    function setSoundVolume(val) {
      var num = Math.max(0, Math.min(100, Number(val || 0)));
      S.soundVolume = num / 100;
      S.soundMuted = (num === 0);
      localStorage.setItem('malaky_sound_vol', String(S.soundVolume));
      localStorage.setItem('malaky_sound_muted', S.soundMuted ? '1' : '0');
      updateSoundControlsUi();
      if (!S.soundMuted) playBtnSound('normal');
    }

    function toggleSoundMute() {
      if (S.soundMuted) {
        S.soundMuted = false;
        if (S.soundVolume <= 0) {
          S.soundVolume = 0.6;
          localStorage.setItem('malaky_sound_vol', '0.6');
        }
      } else {
        S.soundMuted = true;
      }
      localStorage.setItem('malaky_sound_muted', S.soundMuted ? '1' : '0');
      updateSoundControlsUi();
      if (!S.soundMuted) playBtnSound('primary');
    }

    document.addEventListener('click', function(e) {
      var btn = e.target.closest('button, .btn, .nav-btn, .bnav-btn, .bt-pill, .menu-toggle, .combo-item');
      if (!btn) return;
      if (btn.id === 'topbar-mute-btn' || btn.id === 'settings-mute-btn') return;
      if (btn.classList.contains('btn-del')) playBtnSound('delete');
      else if (btn.classList.contains('btn') && !btn.classList.contains('btn-sec')) playBtnSound('primary');
      else playBtnSound('normal');
    }, true);

    function egp(p) { return (Number(p || 0) / 100).toFixed(2) + ' ج.م'; }
    function toPiasters(v) { return Math.round(Number(v || 0) * 100); }
    function gramsToKgNum(g) { return +(Number(g || 0) / 1000).toFixed(3); }
    function fmtWeight(g) {
      var gr = Number(g || 0);
      var kg = +(gr / 1000).toFixed(3);
      return kg + ' كجم';
    }

    function notify(msg, isErr) {
      var t = document.getElementById('toast');
      if (!t) return;
      t.textContent = msg;
      t.style.background = isErr ? '#dc2626' : '#0d9488';
      t.style.color = '#fff';
      t.style.display = 'block';
      clearTimeout(window._tt);
      window._tt = setTimeout(function() { t.style.display = 'none'; }, 4000);
    }

    async function api(path, opts) {
      opts = opts || {};
      var method = (opts.method || 'GET').toUpperCase();
      if (method !== 'GET') {
        S.cache = {};
      }
      var res = await fetch(path, Object.assign({ headers: { 'Content-Type': 'application/json' }, cache: 'no-store' }, opts));
      var data = await res.json();
      if (!res.ok) throw new Error(data.error || 'حدث خطأ');
      return data;
    }

    async function cachedGet(path, ttlMs) {
      ttlMs = ttlMs || 20000;
      var now = Date.now();
      if (S.cache[path] && (now - S.cache[path].ts < ttlMs)) {
        return S.cache[path].data;
      }
      var d = await api(path);
      S.cache[path] = { ts: now, data: d };
      return d;
    }

    function getDefaultSystemFinalKgCostPiasters() {
      var rawRows = (S.inventory.raw || []).filter(function(r) { return Number(r.average_cost_per_kg_piasters || 0) > 0; });
      var avgRawKg = 0;
      if (rawRows.length) {
        avgRawKg = Math.round(rawRows.reduce(function(s, r) { return s + Number(r.average_cost_per_kg_piasters || 0); }, 0) / rawRows.length);
      } else {
        var pWithRaw = (S.products || []).find(function(p) { return Number(p.effective_raw_cost_kg_piasters || p.raw_cost_kg || 0) > 0; });
        if (pWithRaw) avgRawKg = Number(pWithRaw.effective_raw_cost_kg_piasters || pWithRaw.raw_cost_kg || 0);
      }
      var pkg250 = (S.inventory.packaging || []).find(function(pk) { return Number(pk.net_weight_grams) === 250; });
      var pkgCostKg = Math.round(Number(pkg250?.average_cost_per_unit_piasters || 0) * 4);
      var stkRows = (S.inventory.stickers || []).filter(function(s) { return Number(s.quantity_units || 0) > 0 && Number(s.net_weight_grams) === 250; });
      var stkCostKg = stkRows.length ? Math.round(Number(stkRows[0].average_cost_per_unit_piasters || 0) * 4) : 0;
      if (avgRawKg > 0) return avgRawKg + pkgCostKg + stkCostKg;
      var anyProdWithCost = (S.products || []).find(function(p) { return Number(p.final_cost_kg_piasters || 0) > 0; });
      if (anyProdWithCost) return Number(anyProdWithCost.final_cost_kg_piasters);
      return 0;
    }

    function getFinalProductUnitCostPiasters(pid, netWeightGrams) {
      var numPid = Number(pid || 0);
      var wGrams = Number(netWeightGrams || 250);
      var prod = (S.products || []).find(function(p) { return Number(p.id) === numPid; });
      if (prod && Number(prod.manual_final_cost_kg_piasters || 0) > 0) {
        return Math.round((Number(prod.manual_final_cost_kg_piasters) * wGrams) / 1000);
      }
      if (prod) {
        if (wGrams === 250 && Number(prod.final_cost_250_piasters || 0) > 0) return Math.round(Number(prod.final_cost_250_piasters));
        if (wGrams === 125 && Number(prod.final_cost_125_piasters || 0) > 0) return Math.round(Number(prod.final_cost_125_piasters));
      }
      var finRow = (S.inventory.finished || []).find(function(f) {
        return Number(f.product_id) === numPid && Number(f.net_weight_grams) === wGrams;
      });
      var fsCost = Math.round(Number(finRow?.average_cost_per_unit_piasters || 0));

      var rawRow = (S.inventory.raw || []).find(function(r) { return Number(r.product_id) === numPid; });
      var rawKgCost = Number(rawRow?.average_cost_per_kg_piasters || prod?.effective_raw_cost_kg_piasters || prod?.raw_cost_kg || 0);
      var coffeePart = Math.round((rawKgCost * wGrams) / 1000);

      var pkgRow = (S.inventory.packaging || []).find(function(pk) { return Number(pk.net_weight_grams) === wGrams; });
      var pkgPart = Math.round(Number(pkgRow?.average_cost_per_unit_piasters || 0));

      var stkRow = (S.inventory.stickers || []).find(function(s) {
        return Number(s.product_id) === numPid && Number(s.net_weight_grams) === wGrams;
      });
      var stkPart = (stkRow && Number(stkRow.quantity_units) > 0) ? Math.round(Number(stkRow.average_cost_per_unit_piasters || 0)) : 0;

      var calcCost = rawKgCost > 0 ? (coffeePart + pkgPart + stkPart) : 0;
      var best = Math.max(fsCost, calcCost);
      if (best > 0) return best;

      var defSysKg = getDefaultSystemFinalKgCostPiasters();
      if (defSysKg > 0) return Math.round((defSysKg * wGrams) / 1000);
      return 0;
    }

    function getFinalProductKgCostPiasters(pid) {
      var numPid = Number(pid || 0);
      if (numPid > 0) {
        var prod = (S.products || []).find(function(p) { return Number(p.id) === numPid; });
        if (prod && Number(prod.manual_final_cost_kg_piasters || 0) > 0) return Number(prod.manual_final_cost_kg_piasters);
        if (prod && Number(prod.final_cost_kg_piasters || 0) > 0) return Number(prod.final_cost_kg_piasters);
        var c250 = getFinalProductUnitCostPiasters(numPid, 250);
        if (c250 > 0) return c250 * 4;
      }
      var manualCostEgp = Number(document.getElementById('p-base-final-cost')?.value || 0);
      if (manualCostEgp > 0) return Math.round(manualCostEgp * 100);
      return getDefaultSystemFinalKgCostPiasters();
    }

    /* ============================================================================
     * MULTI-METHOD BLUETOOTH THERMAL PRINTER ENGINE FOR XPRINTER XP-P323B
     * ============================================================================ */
    var BT_SERVICE_UUIDS = [
      '000018f0-0000-1000-8000-00805f9b34fb',
      '0000ff00-0000-1000-8000-00805f9b34fb',
      '49535343-fe7d-4ae5-8fa9-9fafd205e455',
      'e7810a71-73ae-499d-8c15-faa9aef0c3f2',
      '0000fee7-0000-1000-8000-00805f9b34fb',
      '0000ffe0-0000-1000-8000-00805f9b34fb',
      '0000ffe5-0000-1000-8000-00805f9b34fb',
      '0000fff0-0000-1000-8000-00805f9b34fb',
      '0000ae00-0000-1000-8000-00805f9b34fb',
      '0000ae30-0000-1000-8000-00805f9b34fb',
      '6e400001-b5a3-f393-e0a9-e50e24dcca9e',
      '00001101-0000-1000-8000-00805f9b34fb',
      '0000af00-0000-1000-8000-00805f9b34fb',
      '0000ffb0-0000-1000-8000-00805f9b34fb'
    ];

    var BT_PREFERRED_CHAR_UUIDS = [
      '00002af1-0000-1000-8000-00805f9b34fb',
      '0000ff02-0000-1000-8000-00805f9b34fb',
      '49535343-8841-43f4-a8d4-ecbe34729bb3',
      '49535343-1e4d-4bd9-ba61-23c647249616',
      'bef8d6c9-9c21-4c9e-b632-bd58c1009f9f',
      '0000ffe1-0000-1000-8000-00805f9b34fb',
      '0000ffe9-0000-1000-8000-00805f9b34fb',
      '0000fff2-0000-1000-8000-00805f9b34fb',
      '0000ae01-0000-1000-8000-00805f9b34fb',
      '6e400002-b5a3-f393-e0a9-e50e24dcca9e',
      '0000fec7-0000-1000-8000-00805f9b34fb'
    ];

    async function discoverPrinterChars(server) {
      var services = await server.getPrimaryServices();
      var writableChars = [];
      for (var i = 0; i < services.length; i++) {
        var srv = services[i];
        var srvUuid = String(srv.uuid || '').toLowerCase();
        if (srvUuid.indexOf('00001800') === 0 || srvUuid.indexOf('00001801') === 0 || srvUuid.indexOf('0000180a') === 0) continue;
        try {
          var chars = await srv.getCharacteristics();
          for (var j = 0; j < chars.length; j++) {
            var c = chars[j];
            var cUuid = String(c.uuid || '').toLowerCase();
            if (cUuid.indexOf('00002a00') === 0) continue;
            if (c.properties && (c.properties.writeWithoutResponse || c.properties.write)) {
              var priority = 20;
              var prefIdx = BT_PREFERRED_CHAR_UUIDS.indexOf(cUuid);
              if (prefIdx !== -1) priority = prefIdx;
              else if (c.properties.writeWithoutResponse && !c.properties.notify) priority = 12;
              writableChars.push({ char: c, uuid: cUuid, srvUuid: srvUuid, priority: priority });
            }
          }
        } catch (_) {}
      }
      writableChars.sort(function(a, b) { return a.priority - b.priority; });
      return writableChars;
    }

    async function connectBluetoothPrinter() {
      if (!navigator.bluetooth) {
        notify('متصفحك لا يدعم Web Bluetooth المباشر. استخدم زر "طباعة عبر تطبيق الطابعة / RawBT" وسيعمل فورًا!', true);
        return false;
      }
      try {
        if (S.btDevice && S.btDevice.gatt && S.btDevice.gatt.connected && S.btChars && S.btChars.length) {
          return true;
        }
        if (S.btDevice && S.btDevice.gatt) {
          try {
            notify('⚡ جارٍ إعادة الاتصال بـ ' + (S.btName || 'الطابعة') + '...');
            var srvRe = await S.btDevice.gatt.connect();
            var reChars = await discoverPrinterChars(srvRe);
            if (reChars.length) {
              S.btCharInfos = reChars;
              S.btSelectedCharIdx = 0;
              S.btChar = reChars[0].char;
              S.btChars = reChars.map(function(x) { return x.char; });
              updateBtStatusButtons();
              notify('✅ تم إعادة الاتصال بالطابعة!');
              return true;
            }
          } catch (_) {}
        }

        notify('جارٍ البحث عن طابعة البلوتوث...');
        var device = await navigator.bluetooth.requestDevice({
          acceptAllDevices: true,
          optionalServices: BT_SERVICE_UUIDS
        });
        S.btDevice = device;
        S.btName = device.name || 'XP-P323B';
        localStorage.setItem('malaky_bt_name', S.btName);

        device.addEventListener('gattserverdisconnected', function() {
          S.btChar = null;
          S.btChars = [];
          updateBtStatusButtons();
        });

        var server = await device.gatt.connect();
        var writableChars = await discoverPrinterChars(server);

        if (!writableChars.length) {
          throw new Error('لم يتم العور على قناة BLE. إذا كانت الطابعة مربوطة بتطبيق آخر، افصلها منه أو استخدم زر "طباعة RawBT / مشاركة للطابعة".');
        }

        S.btCharInfos = writableChars;
        S.btSelectedCharIdx = 0;
        S.btChar = writableChars[0].char;
        S.btChars = writableChars.map(function(x) { return x.char; });
        updateBtStatusButtons();
        notify('✅ تم الربط مع الطابعة: ' + S.btName + ' (' + writableChars.length + ' قناة جاهزة)');
        return true;
      } catch (e) {
        if (e && e.name === 'NotFoundError') {
          notify('تم إلغاء اختيار الطابعة.', true);
        } else {
          notify('تعذر ربط BLE المباشر: ' + (e.message || e) + ' — يمكنك الطباعة فورًا بزر RawBT أو مشاركة الفاتورة!', true);
        }
        return false;
      }
    }

    function updateBtStatusButtons() {
      var isConn = Boolean(S.btDevice && S.btDevice.gatt && S.btDevice.gatt.connected && S.btChars && S.btChars.length);
      var btn = document.getElementById('topbar-bt-btn');
      if (btn) {
        btn.className = 'bt-pill ' + (isConn ? 'connected' : '');
        btn.innerHTML = isConn ? ('🖨️ متصلة: ' + (S.btName || 'بلوتوث')) : '🖨️ ربط طابعة بلوتوث';
      }
    }

    var _btSendQueue = Promise.resolve();

    async function writeBytesToCharacteristic(ch, bytes) {
      var canWriteWithResp = Boolean(ch.properties && ch.properties.write && ch.writeValueWithResponse);
      var canWriteGeneric = Boolean(ch.writeValue);
      var canNoResp = Boolean(ch.properties && ch.properties.writeWithoutResponse && ch.writeValueWithoutResponse);
      var isSafe = S.btSpeedMode === 'safe';

      var useAckWrite = canWriteWithResp && !ch._forceNoResp;
      var chunkSize = useAckWrite ? (isSafe ? 64 : 100) : (isSafe ? 32 : 64);
      var pktDelay = useAckWrite ? 6 : (isSafe ? 18 : 11);
      var drainDelay = useAckWrite ? 18 : (isSafe ? 48 : 28);
      var total = bytes.length;
      var offset = 0;
      var pktIdx = 0;
      var busyRetries = 0;

      while (offset < total) {
        var slice = bytes.subarray(offset, Math.min(total, offset + chunkSize));
        try {
          if (useAckWrite) {
            await ch.writeValueWithResponse(slice);
            if (pktIdx % 10 === 9) {
              await new Promise(function(r) { setTimeout(r, drainDelay); });
            } else if (pktDelay > 0) {
              await new Promise(function(r) { setTimeout(r, pktDelay); });
            }
          } else if (canNoResp) {
            await ch.writeValueWithoutResponse(slice);
            await new Promise(function(r) {
              setTimeout(r, (pktIdx % 6 === 5) ? drainDelay : pktDelay);
            });
          } else if (canWriteGeneric) {
            await ch.writeValue(slice);
            await new Promise(function(r) { setTimeout(r, 12); });
          } else {
            throw new Error('Characteristic not writable');
          }
          offset += slice.length;
          pktIdx++;
          busyRetries = 0;
        } catch (err) {
          var msg = String((err && err.message) || err || '').toLowerCase();
          if (useAckWrite && canNoResp && offset === 0) {
            ch._forceNoResp = true;
            useAckWrite = false;
            chunkSize = 32;
            pktDelay = 18;
            drainDelay = 48;
            continue;
          }
          if (chunkSize > 20 && offset === 0) {
            chunkSize = 20;
            continue;
          }
          if ((msg.indexOf('in progress') !== -1 || msg.indexOf('busy') !== -1 || msg.indexOf('gatt') !== -1) && busyRetries < 12) {
            busyRetries++;
            await new Promise(function(r) { setTimeout(r, 45); });
            continue;
          }
          err._btOffset = offset;
          throw err;
        }
      }
    }

    function sendRawPrinterBytes(bytes) {
      var run = async function() {
        if (!S.btDevice || !S.btDevice.gatt || !S.btDevice.gatt.connected || !S.btChars || !S.btChars.length) {
          var ok = await connectBluetoothPrinter();
          if (!ok) return false;
        }
        var lastErr = null;
        var sentAny = false;
        var maxChannelsToTry = S.btUserLockedChar ? 1 : Math.min(2, S.btChars.length);
        for (var i = 0; i < S.btChars.length; i++) {
          var ch = S.btChars[i];
          try {
            await writeBytesToCharacteristic(ch, bytes);
            sentAny = true;
            if (ch.properties && ch.properties.write && !ch._forceNoResp) {
              return true;
            }
            if (i + 1 >= maxChannelsToTry) {
              return true;
            }
          } catch (err) {
            lastErr = err;
          }
        }
        if (sentAny) return true;
        throw lastErr || new Error('فشل إرسال البيانات للطابعة');
      };
      var p = _btSendQueue.then(run, run);
      _btSendQueue = p.catch(function() {});
      return p;
    }

    function uint8ToBase64(u8) {
      var binary = '';
      var chunk = 8192;
      for (var i = 0; i < u8.length; i += chunk) {
        binary += String.fromCharCode.apply(null, u8.subarray(i, i + chunk));
      }
      return btoa(binary);
    }

    async function printViaRawBtBridge(saleId, forceProto) {
      try {
        var id = saleId || S.lastThermalSaleId;
        if (!id) return notify('اختر الفاتورة أولًا', true);
        notify('📲 جارٍ إرسال الفاتورة لتطبيق RawBT للطباعة البلوتوث...');
        var d = (S.cache && S.cache['/api/sales/' + id] && S.cache['/api/sales/' + id].data) || await cachedGet('/api/sales/' + id, 30000);
        if (!d || !d.invoice) return notify('الفاتورة غير موجودة', true);
        var proto = forceProto || resolvePrinterProtocol();
        var payload = await buildPrinterPayload(d.invoice, d.items || [], proto);
        var b64 = uint8ToBase64(payload);
        var isAndroid = /android/i.test(navigator.userAgent || '');
        if (isAndroid) {
          window.location.href = 'intent:base64,' + b64 + '#Intent;scheme=rawbt;package=ru.a402d.rawbtprinter;end;';
        } else {
          window.location.href = 'rawbt:base64,' + b64;
        }
      } catch (e) {
        notify('خطأ في RawBT: ' + (e.message || e), true);
      }
    }

    async function shareInvoiceToPrinterApp(saleId) {
      try {
        var id = saleId || S.lastThermalSaleId;
        if (!id) return notify('اختر الفاتورة أولًا', true);
        notify('📤 جارٍ تجهيز الفاتورة لإرسالها لتطبيق الطابعة...');
        var d = (S.cache && S.cache['/api/sales/' + id] && S.cache['/api/sales/' + id].data) || await cachedGet('/api/sales/' + id, 30000);
        if (!d || !d.invoice) return notify('الفاتورة غير موجودة', true);
        var mono = await renderInvoiceToCanvasAndMono(d.invoice, d.items || [], S.btPaperDots || 576);
        var outCanvas = document.createElement('canvas');
        outCanvas.width = mono.widthDots;
        outCanvas.height = mono.finalHeight;
        var outCtx = outCanvas.getContext('2d');
        outCtx.fillStyle = '#ffffff';
        outCtx.fillRect(0, 0, outCanvas.width, outCanvas.height);
        outCtx.drawImage(mono.canvas, 0, 0, mono.widthDots, mono.finalHeight, 0, 0, mono.widthDots, mono.finalHeight);

        var fileName = 'malaky-invoice-' + (d.invoice.invoice_number || id) + '.png';
        outCanvas.toBlob(async function(blob) {
          if (!blob) return notify('تعذر تجهيز الفاتورة', true);
          var file = new File([blob], fileName, { type: 'image/png' });
          if (navigator.canShare && navigator.canShare({ files: [file] })) {
            try {
              await navigator.share({
                files: [file],
                title: 'فاتورة مَلَكِي ' + (d.invoice.invoice_number || '')
              });
              return;
            } catch (_) {}
          }
          var url = URL.createObjectURL(blob);
          var a = document.createElement('a');
          a.href = url;
          a.download = fileName;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          setTimeout(function() { URL.revokeObjectURL(url); }, 2500);
          notify('تم تنزيل صورة الفاتورة، افتحها بتطبيق الطابعة');
        }, 'image/png');
      } catch (e) {
        notify('تعذر مشاركة الفاتورة: ' + (e.message || e), true);
      }
    }

    var _imgCache = {};
    function loadImageElement(src) {
      if (!src) return Promise.resolve(null);
      if (_imgCache[src]) return Promise.resolve(_imgCache[src]);
      return new Promise(function(resolve) {
        var done = false;
        var timer = setTimeout(function() { if (!done) { done = true; resolve(null); } }, 400);
        var img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = function() { if (!done) { done = true; clearTimeout(timer); _imgCache[src] = img; resolve(img); } };
        img.onerror = function() { if (!done) { done = true; clearTimeout(timer); resolve(null); } };
        img.src = src;
      });
    }

    async function renderInvoiceToCanvasAndMono(inv, items, forceWidthDots) {
      var widthDots = Number(forceWidthDots || S.btPaperDots || 576);
      var scale = widthDots / 576;
      function sz(px) { return Math.max(11, Math.round(px * scale)); }

      var bytesPerLine = widthDots / 8;
      var pad = Math.round(10 * scale);
      var contentW = widthDots - (pad * 2);

      var st = S.settings || {};
      var imgs = await Promise.all([loadImageElement(st.logo_data_url || DEFAULT_LOGO_DATA_URL), loadImageElement(st.qr_data_url)]);
      var logoImg = imgs[0];
      var qrImg = imgs[1];

      var logoH = 0, logoW = 0;
      if (logoImg && logoImg.width > 0 && logoImg.height > 0) {
        var maxLW = Math.round(190 * scale);
        var maxLH = Math.round(100 * scale);
        var ratio = Math.min(maxLW / logoImg.width, maxLH / logoImg.height);
        logoW = Math.round(logoImg.width * ratio);
        logoH = Math.round(logoImg.height * ratio);
      }

      var qrSize = 0;
      if (qrImg && qrImg.width > 0 && qrImg.height > 0) {
        qrSize = Math.round(130 * scale);
      }

      var estHeight = Math.round((680 + (logoH ? logoH + 22 : 0) + (qrSize ? qrSize + 24 : 0) + (items.length * 98) + (inv.notes ? 70 : 0) + (inv.customer_address ? 45 : 0)) * scale) + 120;
      var canvas = document.createElement('canvas');
      canvas.width = widthDots;
      canvas.height = estHeight;
      var ctx = canvas.getContext('2d');

      ctx.direction = 'rtl';
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, widthDots, estHeight);
      ctx.fillStyle = '#000000';
      ctx.strokeStyle = '#000000';
      ctx.textBaseline = 'top';

      var y = Math.round(10 * scale);

      function drawText(txt, x, yPos, align, fontSize, weight, color, maxW) {
        var str = String(txt || '');
        var col = color || '#000000';
        ctx.font = '900 ' + fontSize + 'px "Cairo", Tahoma, Arial, sans-serif';
        ctx.textAlign = align || 'right';
        ctx.fillStyle = col;
        if (maxW) {
          ctx.fillText(str, x, yPos, maxW);
          if (col === '#000000') ctx.fillText(str, x + 0.55, yPos, maxW);
        } else {
          ctx.fillText(str, x, yPos);
          if (col === '#000000') ctx.fillText(str, x + 0.55, yPos);
        }
      }

      function drawCentered(text, fontSize, lineH) {
        drawText(text, widthDots / 2, y, 'center', fontSize, '900', '#000000', contentW);
        y += lineH;
      }

      function drawSolidRule(thickness) {
        y += sz(7);
        var th = thickness || 3;
        ctx.fillStyle = '#000000';
        ctx.fillRect(pad, y, contentW, th);
        y += th + sz(9);
      }

      function drawDashedRule() {
        y += sz(7);
        ctx.beginPath();
        ctx.setLineDash([sz(7), sz(4)]);
        ctx.lineWidth = Math.max(2.2, Math.round(2.4 * scale));
        ctx.moveTo(pad, y);
        ctx.lineTo(widthDots - pad, y);
        ctx.strokeStyle = '#000000';
        ctx.stroke();
        ctx.setLineDash([]);
        y += sz(9);
      }

      function drawPair(label, val, isBox) {
        if (isBox) {
          var boxH = sz(46);
          ctx.lineWidth = Math.max(3, Math.round(3.2 * scale));
          ctx.strokeStyle = '#000000';
          ctx.strokeRect(pad, y, contentW, boxH);
          var ty = y + sz(10);
          drawText(label, widthDots - pad - sz(10), ty, 'right', sz(22), '900');
          drawText(val, pad + sz(10), ty, 'left', sz(23), '900');
          y += boxH + sz(10);
        } else {
          drawText(label, widthDots - pad, y, 'right', sz(19), '900');
          drawText(val, pad, y, 'left', sz(19), '900');
          y += sz(31);
        }
      }

      if (logoImg && logoW > 0 && logoH > 0) {
        var logoX = Math.round((widthDots - logoW) / 2);
        ctx.drawImage(logoImg, logoX, y, logoW, logoH);
        y += logoH + sz(8);
      }

      drawCentered(st.brand_name_ar || 'مَلَكِي', sz(36), sz(45));
      drawCentered('MALAKY COFFEE', sz(16), sz(24));
      if (st.company_phone) drawCentered('هاتف: ' + st.company_phone, sz(17), sz(26));
      if (st.company_address) drawCentered(st.company_address, sz(16), sz(26));

      y += sz(6);

      var barH = sz(38);
      ctx.fillStyle = '#000000';
      ctx.fillRect(pad, y, contentW, barH);
      drawText('فاتورة: ' + (inv.invoice_number || ''), widthDots - pad - sz(10), y + sz(8), 'right', sz(18), '900', '#ffffff');
      drawText(inv.invoice_date || '', pad + sz(10), y + sz(8), 'left', sz(17), '900', '#ffffff');
      y += barH + sz(10);

      var custLines = 1 + (inv.customer_phone ? 1 : 0) + (inv.customer_address ? 1 : 0);
      var custBoxH = sz(16 + (custLines * 30));
      ctx.lineWidth = Math.max(2.2, Math.round(2.4 * scale));
      ctx.strokeStyle = '#000000';
      ctx.strokeRect(pad, y, contentW, custBoxH);
      var cy = y + sz(9);
      drawText('العميل: ' + (inv.customer_name || 'عميل نقدي'), widthDots - pad - sz(10), cy, 'right', sz(19), '900', '#000000', contentW - sz(20));
      cy += sz(30);
      if (inv.customer_phone) {
        drawText('الهاتف: ' + inv.customer_phone, widthDots - pad - sz(10), cy, 'right', sz(18), '900', '#000000', contentW - sz(20));
        cy += sz(30);
      }
      if (inv.customer_address) {
        drawText('العنوان: ' + inv.customer_address, widthDots - pad - sz(10), cy, 'right', sz(18), '900', '#000000', contentW - sz(20));
      }
      y += custBoxH + sz(10);

      var thH = sz(36);
      ctx.fillStyle = '#000000';
      ctx.fillRect(pad, y, contentW, thH);
      drawText('الصنف والكمية', widthDots - pad - sz(10), y + sz(7), 'right', sz(18), '900', '#ffffff');
      drawText('الإجمالي', pad + sz(10), y + sz(7), 'left', sz(18), '900', '#ffffff');
      y += thH + sz(10);

      for (var i = 0; i < items.length; i++) {
        var it = items[i];
        var wGrams = Number(it.quantity_units || 0) * Number(it.net_weight_grams || 250);
        drawText(String(it.product_name || ''), widthDots - pad, y, 'right', sz(20), '900', '#000000', contentW - sz(125));
        drawText(egp(it.line_total_piasters), pad, y, 'left', sz(20), '900');
        y += sz(31);

        var subLine = (it.packaging_name || '') + ' × ' + it.quantity_units + ' (' + fmtWeight(wGrams) + ') — بسعر: ' + egp(it.unit_sale_price_piasters);
        drawText(subLine, widthDots - pad, y, 'right', sz(17), '900', '#000000', contentW);
        y += sz(27);

        if (i < items.length - 1) drawDashedRule();
      }

      drawSolidRule(2);

      drawPair('الإجمالي:', egp(inv.subtotal_piasters), false);
      if (Number(inv.discount_piasters || 0) > 0) {
        drawPair('الخصم:', egp(inv.discount_piasters), false);
      }
      y += sz(4);
      drawPair('الصافي المطلوب', egp(inv.total_piasters), true);
      drawPair('المدفوع:', egp(inv.paid_piasters), false);
      var rem = Math.max(0, Number(inv.total_piasters || 0) - Number(inv.paid_piasters || 0));
      drawPair('المتبقي:', egp(rem), false);

      if (inv.notes) {
        drawDashedRule();
        drawCentered('ملاحظات: ' + inv.notes, sz(17), sz(26));
      }

      drawSolidRule(2);

      if (qrImg && qrSize > 0) {
        var qrX = Math.round((widthDots - qrSize) / 2);
        ctx.drawImage(qrImg, qrX, y, qrSize, qrSize);
        y += qrSize + sz(8);
      }

      drawCentered(st.invoice_slogan || 'مَلَكِي.. قهوة تروق مزاجك', sz(17), sz(27));
      drawCentered('شكراً لتعاملكم معنا', sz(16), sz(24));

      var finalHeight = Math.min(estHeight, Math.ceil((y + 12) / 8) * 8);
      var imgData = ctx.getImageData(0, 0, widthDots, finalHeight).data;

      return {
        canvas: canvas,
        widthDots: widthDots,
        bytesPerLine: bytesPerLine,
        finalHeight: finalHeight,
        imgData: imgData
      };
    }

    function encodeEscPosBanded(mono) {
      var widthDots = mono.widthDots;
      var bytesPerLine = mono.bytesPerLine;
      var finalHeight = mono.finalHeight;
      var imgData = mono.imgData;

      var chunks = [];
      var totalLen = 0;

      function pushArr(arr) {
        var u = new Uint8Array(arr);
        chunks.push(u);
        totalLen += u.length;
      }

      pushArr([0x1B, 0x40, 0x1C, 0x2E, 0x1D, 0x42, 0x00, 0x1B, 0x61, 0x01]);

      var py = 0;
      while (py < finalHeight) {
        var blankRows = 0;
        while (py + blankRows < finalHeight && blankRows < 240) {
          var rowEmpty = true;
          var rOff = (py + blankRows) * widthDots * 4;
          for (var bxCheck = 0; bxCheck < widthDots; bxCheck++) {
            var pCheck = rOff + (bxCheck * 4);
            if (imgData[pCheck + 3] >= 128) {
              var lumCheck = (imgData[pCheck] * 77 + imgData[pCheck + 1] * 150 + imgData[pCheck + 2] * 29) >> 8;
              if (lumCheck < 210) { rowEmpty = false; break; }
            }
          }
          if (!rowEmpty) break;
          blankRows++;
        }
        if (blankRows >= 8) {
          pushArr([0x1B, 0x4A, blankRows]);
          py += blankRows;
          continue;
        }
        var h = Math.min(4, finalHeight - py);
        var bandBytes = new Uint8Array(8 + (bytesPerLine * h));
        bandBytes[0] = 0x1D; bandBytes[1] = 0x76; bandBytes[2] = 0x30; bandBytes[3] = 0x00;
        bandBytes[4] = bytesPerLine & 0xFF; bandBytes[5] = (bytesPerLine >> 8) & 0xFF;
        bandBytes[6] = h & 0xFF; bandBytes[7] = (h >> 8) & 0xFF;
        var idx = 8;
        for (var r = 0; r < h; r++) {
          var rowBase = (py + r) * widthDots * 4;
          for (var bx = 0; bx < bytesPerLine; bx++) {
            var byteVal = 0;
            var pBase = rowBase + (bx * 32);
            for (var bit = 0; bit < 8; bit++) {
              var pIdx = pBase + (bit * 4);
              if (imgData[pIdx + 3] >= 128) {
                var lum = (imgData[pIdx] * 77 + imgData[pIdx + 1] * 150 + imgData[pIdx + 2] * 29) >> 8;
                if (lum < 210) byteVal |= (1 << (7 - bit));
              }
            }
            bandBytes[idx++] = byteVal;
          }
        }
        chunks.push(bandBytes);
        totalLen += bandBytes.length;
        py += h;
      }

      pushArr([0x0A, 0x0A, 0x0A, 0x1D, 0x56, 0x42, 0x00]);

      var out = new Uint8Array(totalLen);
      var off = 0;
      for (var c = 0; c < chunks.length; c++) {
        out.set(chunks[c], off);
        off += chunks[c].length;
      }
      return out;
    }

    function encodeTsplBitmap(mono) {
      var widthDots = mono.widthDots;
      var bytesPerLine = mono.bytesPerLine;
      var finalHeight = mono.finalHeight;
      var imgData = mono.imgData;

      var widthMm = Math.round(widthDots / 8);
      var heightMm = Math.ceil(finalHeight / 8) + 6;
      var enc = new TextEncoder();

      var cmdHeader =
        'SIZE ' + widthMm + ' mm,' + heightMm + ' mm\r\n' +
        'GAP 0 mm,0 mm\r\n' +
        'DIRECTION 1\r\n' +
        'CLS\r\n' +
        'BITMAP 0,0,' + bytesPerLine + ',' + finalHeight + ',0,';

      var headBytes = enc.encode(cmdHeader);
      var tailBytes = enc.encode('\r\nPRINT 1,1\r\n');
      var rawLen = bytesPerLine * finalHeight;

      var out = new Uint8Array(headBytes.length + rawLen + tailBytes.length);
      out.set(headBytes, 0);

      var idx = headBytes.length;
      for (var py = 0; py < finalHeight; py++) {
        var rowBase = py * widthDots * 4;
        for (var bx = 0; bx < bytesPerLine; bx++) {
          var byteVal = 0xFF;
          var pBase = rowBase + (bx * 32);
          for (var bit = 0; bit < 8; bit++) {
            var pIdx = pBase + (bit * 4);
            if (imgData[pIdx + 3] >= 128) {
              var lum = (imgData[pIdx] * 77 + imgData[pIdx + 1] * 150 + imgData[pIdx + 2] * 29) >> 8;
              if (lum < 185) byteVal &= ~(1 << (7 - bit));
            }
          }
          out[idx++] = byteVal;
        }
      }
      out.set(tailBytes, idx);
      return out;
    }

    function encodeCpclBitmap(mono) {
      var widthDots = mono.widthDots;
      var bytesPerLine = mono.bytesPerLine;
      var finalHeight = mono.finalHeight;
      var imgData = mono.imgData;

      var enc = new TextEncoder();
      var hexLines = [];
      for (var py = 0; py < finalHeight; py++) {
        var rowHex = '';
        var rowBase = py * widthDots * 4;
        for (var bx = 0; bx < bytesPerLine; bx++) {
          var byteVal = 0;
          var pBase = rowBase + (bx * 32);
          for (var bit = 0; bit < 8; bit++) {
            var pIdx = pBase + (bit * 4);
            if (imgData[pIdx + 3] >= 128) {
              var lum = (imgData[pIdx] * 77 + imgData[pIdx + 1] * 150 + imgData[pIdx + 2] * 29) >> 8;
              if (lum < 185) byteVal |= (1 << (7 - bit));
            }
          }
          rowHex += byteVal.toString(16).padStart(2, '0').toUpperCase();
        }
        hexLines.push(rowHex);
      }

      var cpclStr = '! 0 200 200 ' + (finalHeight + 40) + ' 1\r\n' +
        'PAGE-WIDTH ' + widthDots + '\r\n' +
        'EG ' + bytesPerLine + ' ' + finalHeight + ' 0 0 ' + hexLines.join('') + '\r\n' +
        'PRINT\r\n';
      return enc.encode(cpclStr);
    }

    function resolvePrinterProtocol() {
      return S.btCmdMode || 'escpos';
    }

    async function buildPrinterPayload(inv, items, forceProtocol) {
      var mono = await renderInvoiceToCanvasAndMono(inv, items);
      var proto = forceProtocol || resolvePrinterProtocol();
      if (proto === 'tspl') return encodeTsplBitmap(mono);
      if (proto === 'cpcl') return encodeCpclBitmap(mono);
      return encodeEscPosBanded(mono);
    }

    async function directBluetoothPrintSale(saleId, forceProto) {
      var id = saleId || S.lastThermalSaleId;
      if (!id) return notify('اختر الفاتورة أولًا', true);

      if (S.btDriverMethod === 'rawbt' && !forceProto) {
        return await printViaRawBtBridge(id);
      }
      if (S.btDriverMethod === 'share' && !forceProto) {
        return await shareInvoiceToPrinterApp(id);
      }

      try {
        var d = (S.cache && S.cache['/api/sales/' + id] && S.cache['/api/sales/' + id].data) || await cachedGet('/api/sales/' + id, 30000);
        if (!d || !d.invoice) return notify('الفاتورة غير موجودة', true);
        var proto = forceProto || resolvePrinterProtocol();
        var payload = await buildPrinterPayload(d.invoice, d.items || [], proto);
        var sent = await sendRawPrinterBytes(payload);
        if (sent) {
          notify('✅ تمت طباعة الفاتورة بنجاح!');
          document.getElementById('invoice-modal').style.display = 'none';
        }
      } catch (e) {
        notify('تعذر الإرسال المباشر عبر BLE (' + (e.message || e) + '). جرب زر "طباعة عبر RawBT" أو "مشاركة لتطبيق الطابعة"!', true);
      }
    }

    async function downloadInvoiceImage(saleId) {
      try {
        var id = saleId || S.lastThermalSaleId;
        if (!id) return notify('اختر الفاتورة أولًا', true);
        notify('🖼️ جارٍ تجهيز صورة الفاتورة...');
        var d = (S.cache && S.cache['/api/sales/' + id] && S.cache['/api/sales/' + id].data) || await cachedGet('/api/sales/' + id, 30000);
        if (!d || !d.invoice) return notify('الفاتورة غير موجودة', true);
        var mono = await renderInvoiceToCanvasAndMono(d.invoice, d.items || [], 576);
        var outCanvas = document.createElement('canvas');
        outCanvas.width = mono.widthDots;
        outCanvas.height = mono.finalHeight;
        var outCtx = outCanvas.getContext('2d');
        outCtx.fillStyle = '#ffffff';
        outCtx.fillRect(0, 0, outCanvas.width, outCanvas.height);
        outCtx.drawImage(mono.canvas, 0, 0, mono.widthDots, mono.finalHeight, 0, 0, mono.widthDots, mono.finalHeight);

        var fileName = 'malaky-invoice-' + (d.invoice.invoice_number || id) + '.png';
        outCanvas.toBlob(function(blob) {
          if (!blob) return notify('تعذر إنشاء صورة الفاتورة', true);
          var url = URL.createObjectURL(blob);
          var a = document.createElement('a');
          a.href = url;
          a.download = fileName;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          setTimeout(function() { URL.revokeObjectURL(url); }, 2500);
          notify('✅ تم تنزيل صورة الفاتورة بنجاح!');
        }, 'image/png');
      } catch (e) {
        notify('خطأ أثناء تنزيل صورة الفاتورة: ' + (e.message || e), true);
      }
    }

    async function printNormalThermalInvoice(saleId) {
      await printInvoice(saleId, true);
    }

    function selectBtChannel(idx) {
      var i = Number(idx || 0);
      if (S.btCharInfos && S.btCharInfos[i]) {
        S.btUserLockedChar = true;
        S.btSelectedCharIdx = i;
        var chosen = S.btCharInfos[i].char;
        S.btChar = chosen;
        localStorage.setItem('malaky_bt_char_uuid', S.btCharInfos[i].uuid);
        S.btChars = [chosen].concat(S.btCharInfos.filter(function(_, k) { return k !== i; }).map(function(x) { return x.char; }));
        notify('تم تثبيت قناة البلوتوث: ' + S.btCharInfos[i].uuid.slice(0, 8));
      }
    }

    async function directBluetoothTextProbe() {
      try {
        if (!S.btDevice || !S.btDevice.gatt || !S.btDevice.gatt.connected || !S.btChars || !S.btChars.length) {
          var ok = await connectBluetoothPrinter();
          if (!ok) return;
        }
        var enc = new TextEncoder();
        var proto = resolvePrinterProtocol();
        var txtCmd = proto === 'tspl'
          ? 'SIZE 50 mm,25 mm\r\nGAP 0 mm,0 mm\r\nCLS\r\nTEXT 20,20,"3",0,1,1,"MALAKY OK"\r\nPRINT 1,1\r\n'
          : (proto === 'cpcl'
            ? '! 0 200 200 120 1\r\nTEXT 4 0 20 20 MALAKY OK\r\nPRINT\r\n'
            : '\x1B@\x1C.MALAKY TEST OK\r\n\r\n\r\n');
        var bytes = enc.encode(txtCmd);
        var ch = S.btChar || S.btChars[0];
        await writeBytesToCharacteristic(ch, bytes);
        notify('✅ تم إرسال سطر الاختبار (' + proto.toUpperCase() + ') على القناة الحالية!');
      } catch (e) {
        notify('فشل اختبار النص: ' + (e.message || e), true);
      }
    }

    async function directBluetoothAutoSweep() {
      var logEl = document.getElementById('bt-debug-log');
      function addLog(msg) {
        S.btDebugLog = (S.btDebugLog ? S.btDebugLog + '\n' : '') + msg;
        if (logEl) logEl.textContent = S.btDebugLog;
      }
      S.btDebugLog = '';
      if (logEl) logEl.textContent = 'جارٍ الاتصال والفحص...';
      try {
        if (!S.btDevice || !S.btDevice.gatt || !S.btDevice.gatt.connected || !S.btCharInfos || !S.btCharInfos.length) {
          var ok = await connectBluetoothPrinter();
          if (!ok) { addLog('❌ فشل الاتصال بالطابعة'); return; }
        }
        addLog('✅ متصل بـ: ' + (S.btName || 'Printer') + ' | عدد القنوات: ' + S.btCharInfos.length);
        var enc = new TextEncoder();
        for (var i = 0; i < S.btCharInfos.length; i++) {
          var ci = S.btCharInfos[i];
          var props = [];
          if (ci.char.properties.write) props.push('W');
          if (ci.char.properties.writeWithoutResponse) props.push('WNR');
          addLog('--- قناة ' + (i + 1) + ': ' + ci.uuid.slice(0, 8) + ' (' + props.join('/') + ') ---');
          var tests = [
            ['ESCPOS', '\x1B@\x1C.CH' + (i + 1) + '-ESCPOS OK\r\n\r\n\r\n'],
            ['TSPL', 'SIZE 50 mm,25 mm\r\nGAP 0 mm,0 mm\r\nCLS\r\nTEXT 20,20,"3",0,1,1,"CH' + (i + 1) + '-TSPL OK"\r\nPRINT 1,1\r\n'],
            ['CPCL', '! 0 200 200 120 1\r\nTEXT 4 0 20 20 CH' + (i + 1) + '-CPCL OK\r\nPRINT\r\n']
          ];
          for (var t = 0; t < tests.length; t++) {
            var modeName = tests[t][0];
            var bytes = enc.encode(tests[t][1]);
            try {
              for (var off = 0; off < bytes.length; off += 20) {
                var sl = bytes.subarray(off, Math.min(bytes.length, off + 20));
                if (ci.char.properties.writeWithoutResponse && ci.char.writeValueWithoutResponse) {
                  await ci.char.writeValueWithoutResponse(sl);
                } else if (ci.char.writeValueWithResponse) {
                  await ci.char.writeValueWithResponse(sl);
                } else {
                  await ci.char.writeValue(sl);
                }
                await new Promise(function(r) { setTimeout(r, 20); });
              }
              addLog('  ✔ أُرسل ' + modeName + ' (' + bytes.length + ' بايت)');
            } catch (err) {
              addLog('  ✖ فشل ' + modeName + ': ' + (err.message || err));
            }
            await new Promise(function(r) { setTimeout(r, 250); });
          }
        }
        addLog('🏁 انتهى الفحص الشامل! انظر للورقة المطبوعة لمعرفة القناة والنظام الناجح.');
        notify('انتهى الفحص الشامل على كل القنوات');
      } catch (e) {
        addLog('❌ خطأ: ' + (e.message || e));
      }
    }

    async function directBluetoothTestPrint(forceProto, viaRawBt) {
      var dummyInv = {
        invoice_number: 'TEST-P323B',
        invoice_date: new Date().toISOString().slice(0, 10),
        customer_name: 'اختبار طابعة XP-P323B',
        subtotal_piasters: 22000,
        discount_piasters: 0,
        total_piasters: 22000,
        paid_piasters: 22000
      };
      var dummyItems = [
        { product_name: 'توليفة مَلَكِي (اختبار)', packaging_name: 'ربع كيلو', quantity_units: 1, net_weight_grams: 250, unit_sale_price_piasters: 22000, line_total_piasters: 22000 }
      ];
      try {
        var proto = forceProto || resolvePrinterProtocol();
        var bytes = await buildPrinterPayload(dummyInv, dummyItems, proto);
        if (viaRawBt) {
          var b64 = uint8ToBase64(bytes);
          window.location.href = 'rawbt:base64,' + b64;
          return;
        }
        notify('🖨️ جارٍ إرسال الاختبار...');
        var ok = await sendRawPrinterBytes(bytes);
        if (ok) notify('✅ تمت طباعة الاختبار بنجاح!');
      } catch (e) {
        notify(e.message || 'فشل اختبار البلوتوث', true);
      }
    }

    function setPrintPageStyle(mode) {
      var styleEl = document.getElementById('dynamic-print-page');
      document.body.classList.remove('print-mode-a4', 'print-mode-thermal', 'print-mode-a4-fit');
      if (mode === 'thermal') {
        var mm = S.btPaperDots === 576 ? '80mm' : '58mm';
        document.body.classList.add('print-mode-thermal');
        if (styleEl) styleEl.innerHTML = '@media print { @page { size: ' + mm + ' auto; margin: 0mm; } }';
      } else if (mode === 'a4-fit') {
        document.body.classList.add('print-mode-a4-fit');
        if (styleEl) styleEl.innerHTML = '@media print { @page { size: A4 landscape; margin: 5mm; } }';
      } else {
        document.body.classList.add('print-mode-a4');
        if (styleEl) styleEl.innerHTML = '@media print { @page { size: A4 portrait; margin: 10mm; } }';
      }
    }

    function limitRows(items, listKey, renderRowFn, colSpan, limit) {
      colSpan = colSpan || 6;
      limit = limit || 2;
      if (!items || !items.length) {
        return { tbody: '<tr><td colspan="' + colSpan + '" style="text-align:center;color:var(--muted);">لا توجد بيانات</td></tr>', moreBtn: '' };
      }
      var isExp = Boolean(S.expandedLists[listKey]);
      var visible = isExp ? items : items.slice(0, limit);
      var tbody = visible.map(renderRowFn).join('');
      var moreBtn = '';
      if (items.length > limit) {
        var rem = items.length - limit;
        var btnTxt = isExp ? '⬆ إخفاء وعرض أول صفين فقط' : ('⬇ عرض باقي القائمة (' + rem + ' إضافي من إجمالي ' + items.length + ')');
        moreBtn = '<div class="more-bar"><button class="btn btn-sec btn-sm" onclick="toggleList(\'' + listKey + '\')">' + btnTxt + '</button></div>';
      }
      return { tbody: tbody, moreBtn: moreBtn };
    }

    function toggleList(key) {
      S.expandedLists[key] = !S.expandedLists[key];
      renderMainOnly();
    }

    function renderProductCombo(idPrefix, onSelectCallbackName, defaultProdId, priceMode) {
      onSelectCallbackName = onSelectCallbackName || '';
      priceMode = priceMode || 'sale';
      var defProd = S.products.find(function(p) { return String(p.id) === String(defaultProdId); }) || S.products[0] || null;
      var defId = defProd ? defProd.id : '';
      var defName = defProd ? defProd.name : '';
      var listHtml = S.products.map(function(p) {
        var cleanName = String(p.name || '').replace(/'/g, '');
        var priceInfo = priceMode === 'cost'
          ? ('الخام: ' + fmtWeight(p.raw_grams) + ' | تكلفة الكيلو: ' + egp(p.raw_cost_kg || 0))
          : ('سعر الكيلو: ' + egp(p.sale_price_1_piasters || 0));
        return '<div class="combo-item" data-search="' + (cleanName + ' ' + p.sku).toLowerCase() + '" onclick="pickComboItem(\'' + idPrefix + '\',' + p.id + ',\'' + cleanName + '\',\'' + onSelectCallbackName + '\')">' +
          '<span>☕ <strong>' + p.name + '</strong></span>' +
          '<span style="color:var(--muted);font-size:12px;">' + priceInfo + '</span>' +
        '</div>';
      }).join('') || '<div class="combo-item">لا توجد أصناف مضافة بعد</div>';

      return '<div class="combo-wrap" id="wrap-' + idPrefix + '">' +
        '<input type="hidden" id="' + idPrefix + '" value="' + defId + '" />' +
        '<input type="text" id="txt-' + idPrefix + '" class="combo-input" value="' + defName + '" placeholder="🔍 اضغط هنا واكتب اسم الصنف..." ' +
          'onfocus="openCombo(\'' + idPrefix + '\')" oninput="filterCombo(\'' + idPrefix + '\', this.value)" autocomplete="off" />' +
        '<div id="list-' + idPrefix + '" class="combo-list">' + listHtml + '</div>' +
      '</div>';
    }

    function renderPersonCombo(idPrefix) {
      var listHtml = S.customers.map(function(c) {
        var cleanName = String(c.name || '').replace(/'/g, '');
        return '<div class="combo-item" data-search="' + (cleanName + ' ' + (c.phone||'')).toLowerCase() + '" onclick="pickPersonCombo(\'' + idPrefix + '\',' + c.id + ',\'' + cleanName + '\',\'' + (c.phone||'') + '\')">' +
          '<span>👤 ' + c.name + '</span>' +
          '<span style="color:var(--gold);font-size:12px;">عليه: ' + egp(c.balance) + '</span>' +
        '</div>';
      }).join('');

      return '<div class="combo-wrap" id="wrap-' + idPrefix + '">' +
        '<input type="hidden" id="' + idPrefix + '-id" value="" />' +
        '<input type="text" id="' + idPrefix + '-name" class="combo-input" placeholder="✍️ اكتب اسم الشخص (فلان) هنا أو اختره من القائمة..." ' +
          'onfocus="openCombo(\'' + idPrefix + '\')" oninput="onPersonType(\'' + idPrefix + '\', this.value)" autocomplete="off" />' +
        '<div id="list-' + idPrefix + '" class="combo-list">' + listHtml + '</div>' +
      '</div>';
    }

    function onPersonType(idPrefix, val) {
      var hid = document.getElementById(idPrefix + '-id');
      if (hid) hid.value = '';
      filterCombo(idPrefix, val);
    }

    function pickPersonCombo(idPrefix, cid, cname, cphone) {
      var hid = document.getElementById(idPrefix + '-id');
      var txt = document.getElementById(idPrefix + '-name');
      var ph = document.getElementById(idPrefix + '-phone');
      var list = document.getElementById('list-' + idPrefix);
      if (hid) hid.value = cid;
      if (txt) txt.value = cname;
      if (ph && cphone) ph.value = cphone;
      if (list) list.classList.remove('open');
    }

    function openCombo(idPrefix) {
      document.querySelectorAll('.combo-list').forEach(function(el) { el.classList.remove('open'); });
      var list = document.getElementById('list-' + idPrefix);
      if (list && list.children.length > 0) {
        list.classList.add('open');
        list.querySelectorAll('.combo-item').forEach(function(it) { it.style.display = 'flex'; });
      }
    }

    function filterCombo(idPrefix, query) {
      var list = document.getElementById('list-' + idPrefix);
      if (!list) return;
      list.classList.add('open');
      var q = (query || '').trim().toLowerCase();
      list.querySelectorAll('.combo-item').forEach(function(it) {
        var s = it.getAttribute('data-search') || '';
        it.style.display = s.indexOf(q) !== -1 ? 'flex' : 'none';
      });
    }

    function pickComboItem(idPrefix, prodId, prodLabel, cbName) {
      var hid = document.getElementById(idPrefix);
      var txt = document.getElementById('txt-' + idPrefix);
      var list = document.getElementById('list-' + idPrefix);
      if (hid) hid.value = prodId;
      if (txt) txt.value = prodLabel;
      if (list) list.classList.remove('open');
      if (cbName && typeof window[cbName] === 'function') window[cbName]();
    }

    document.addEventListener('click', function(e) {
      if (!e.target.closest('.combo-wrap')) {
        document.querySelectorAll('.combo-list').forEach(function(el) { el.classList.remove('open'); });
      }
    });

    function armBackTrap() { try { history.pushState({ trap: true, tab: S.tab }, '', '#' + S.tab); } catch (_) {} }
    function toggleSidebar(force) {
      S.sidebarOpen = typeof force === 'boolean' ? force : !S.sidebarOpen;
      var sb = document.getElementById('sidebar');
      var bd = document.getElementById('sidebar-backdrop');
      if (sb) sb.classList.toggle('open', S.sidebarOpen);
      if (bd) bd.classList.toggle('open', S.sidebarOpen);
    }
    function goBackStep() {
      if (S.sidebarOpen) return toggleSidebar(false);
      if (S.navStack.length > 1) {
        S.navStack.pop();
        loadTab(S.navStack[S.navStack.length - 1] || 'dashboard', false);
      } else if (S.tab !== 'dashboard') {
        S.navStack = ['dashboard'];
        loadTab('dashboard', false);
      }
    }
    window.addEventListener('popstate', function() { if (!S.user) return; armBackTrap(); goBackStep(); });

    async function init() {
      try {
        var st = await api('/api/init-status');
        if (st.dbConnected === false) { S.dbError = st.dbError; return renderAuth(); }
        S.hasUsers = st.hasUsers; S.user = st.user; S.settings = st.settings || {};
        if (!S.user) return renderAuth();
        history.replaceState({ root: true }, '', '#dashboard');
        armBackTrap();
        await loadTab('dashboard', false);
      } catch (e) { notify(e.message, true); renderAuth(); }
    }

    function renderAuth() {
      document.getElementById('app').innerHTML =
        '<div style="max-width:430px;margin:30px auto;padding:16px;">' +
        '<div class="panel" style="border-top:4px solid var(--gold);text-align:center;">' +
          '<img src="' + DEFAULT_LOGO_DATA_URL + '" style="width:92px;height:92px;border-radius:50%;border:2.5px solid var(--gold);margin-bottom:8px;animation:malakyRoyalGlow 3s infinite;" />' +
          '<h1 style="color:var(--gold);font-size:28px;">مَلَكِي | MALAKY v5.5</h1>' +
          '<p style="color:var(--muted);margin-bottom:16px;font-weight:700;">قهوة تروق مزاجك — نظام الإدارة الملكي</p>' +
          '<div style="text-align:right;margin-bottom:10px;"><label>اسم المستخدم</label><input id="l-user" placeholder="admin" /></div>' +
          '<div style="text-align:right;margin-bottom:14px;"><label>كلمة المرور</label><input id="l-pass" type="password" /></div>' +
          '<button class="btn" style="width:100%;" onclick="doLogin()">تسجيل الدخول</button>' +
          '<hr style="border-color:var(--border);margin:16px 0;" />' +
          '<details ' + (!S.hasUsers ? 'open' : '') + ' style="text-align:right;"><summary style="color:var(--gold);cursor:pointer;font-size:13px;font-weight:700;">تفعيل المدير العام (BOOTSTRAP_KEY)</summary>' +
            '<div style="margin-top:10px;">' +
              '<label>مفتاح BOOTSTRAP_KEY</label><input id="b-key" type="password" />' +
              '<label style="margin-top:6px;">اسم المستخدم</label><input id="b-user" value="admin" />' +
              '<label style="margin-top:6px;">كلمة المرور الجديدة</label><input id="b-pass" type="password" />' +
              '<button class="btn btn-sec" style="width:100%;margin-top:10px;" onclick="doBootstrap()">تفعيل المدير</button>' +
            '</div>' +
          '</details>' +
        '</div></div>';
    }

    async function doLogin() {
      try { await api('/api/auth/login', { method:'POST', body:JSON.stringify({ username:document.getElementById('l-user').value, password:document.getElementById('l-pass').value }) }); await init(); } catch (e) { notify(e.message, true); }
    }
    async function doBootstrap() {
      try { await api('/api/bootstrap', { method:'POST', body:JSON.stringify({ bootstrap_key:document.getElementById('b-key').value, full_name:'المدير العام', username:document.getElementById('b-user').value, password:document.getElementById('b-pass').value }) }); notify('تم التفعيل! سجل الدخول الآن.'); } catch (e) { notify(e.message, true); }
    }
    async function doLogout() { await api('/api/auth/logout', { method:'POST' }); S.user = null; renderAuth(); }

    function openCostCalcReport() {
      S.currentReport = '21';
      loadTab('reports');
    }

    async function loadTab(tab, push) {
      if (push === undefined) push = true;
      toggleSidebar(false);
      if (push && tab !== S.tab) { S.navStack.push(tab); armBackTrap(); }
      S.tab = tab;

      var hasWarmData = (tab === 'settings') ||
        (tab === 'dashboard' && S.dash && S.dash.kpis) ||
        ((tab === 'products' || tab === 'inventory') && S.products && S.products.length) ||
        (tab === 'sales' && S.products && S.products.length) ||
        (tab === 'production' && S.products && S.products.length) ||
        (tab === 'purchases' && S.products && S.products.length) ||
        ((tab === 'customers' || tab === 'debtors') && S.customers && S.customers.length);

      if (hasWarmData) {
        renderMainOnly();
        if (tab === 'products') previewProdPrices();
        if (tab === 'production') onProdProductChange();
        if (tab === 'sales') onSaleProductChange();
      }

      try {
        if (tab === 'dashboard') {
          var resDash = await Promise.all([cachedGet('/api/dashboard', 60000), cachedGet('/api/customers', 60000)]);
          S.dash = resDash[0]; S.customers = resDash[1].customers;
        } else if (tab === 'products' || tab === 'inventory') {
          var resInv = await Promise.all([cachedGet('/api/products', 60000), cachedGet('/api/inventory', 60000)]);
          S.products = resInv[0].products; S.inventory = resInv[1];
        } else if (tab === 'purchases') {
          var resPur = await Promise.all([cachedGet('/api/products', 60000), cachedGet('/api/inventory', 60000), cachedGet('/api/purchases', 45000), cachedGet('/api/suppliers', 60000)]);
          S.products = resPur[0].products; S.inventory = resPur[1]; S.purchases = resPur[2].purchases; S.suppliers = resPur[3].suppliers;
        } else if (tab === 'production') {
          var resPrd = await Promise.all([cachedGet('/api/products', 60000), cachedGet('/api/inventory', 60000), cachedGet('/api/production', 45000)]);
          S.products = resPrd[0].products; S.inventory = resPrd[1]; S.production = resPrd[2].batches;
        } else if (tab === 'sales') {
          var resSal = await Promise.all([cachedGet('/api/products', 60000), cachedGet('/api/inventory', 60000), cachedGet('/api/sales', 45000), cachedGet('/api/customers', 60000), cachedGet('/api/dashboard', 60000)]);
          S.products = resSal[0].products; S.inventory = resSal[1]; S.sales = resSal[2].invoices; S.customers = resSal[3].customers; S.dash = resSal[4];
        } else if (tab === 'customers' || tab === 'debtors') {
          S.customers = (await cachedGet('/api/customers', 60000)).customers;
        } else if (tab === 'suppliers') {
          S.suppliers = (await cachedGet('/api/suppliers', 60000)).suppliers;
        } else if (tab === 'expenses') {
          var ex = await cachedGet('/api/expenses', 60000);
          S.expenses = ex.expenses; S.categories = ex.categories;
        } else if (tab === 'cash') {
          S.cash = await cachedGet('/api/cash', 60000);
        } else if (tab === 'reports') {
          await runReport(S.currentReport);
          return;
        } else if (tab === 'users') {
          S.usersData = await cachedGet('/api/users', 90000);
        }
        var activeTag = document.activeElement ? document.activeElement.tagName : '';
        if (!hasWarmData || (activeTag !== 'INPUT' && activeTag !== 'SELECT')) {
          renderMainOnly();
          if (tab === 'products') previewProdPrices();
          if (tab === 'production') onProdProductChange();
          if (tab === 'sales') onSaleProductChange();
        }
      } catch (e) { notify(e.message, true); if (!hasWarmData) renderMainOnly(); }
    }

    function renderMainOnly() {
      var mainEl = document.getElementById('main-content');
      if (!mainEl) return renderShell();
      mainEl.innerHTML = renderTabContent();
      document.querySelectorAll('.nav-btn[data-tab], .bnav-btn[data-tab]').forEach(function(btn) {
        btn.classList.toggle('active', btn.getAttribute('data-tab') === S.tab);
      });
      var backBtn = document.getElementById('topbar-back-btn');
      if (backBtn) backBtn.style.display = S.tab !== 'dashboard' ? 'inline-flex' : 'none';
      updateBtStatusButtons();
      updateSoundControlsUi();
    }

    function renderShell() {
      var tabs = [
        ['dashboard','📊 1. لوحة التحكم والأرباح'],
        ['products','☕ 2. الأصناف والأسعار ونسب الربح'],
        ['inventory','📦 3. المخزون والأوزان'],
        ['purchases','🛒 4. المشتريات'],
        ['production','⚙️ 5. الإنتاج والتعبئة'],
        ['sales','🧾 6. المبيعات والفواتير'],
        ['customers','👥 7. العملاء (تعديل وحذف)'],
        ['debtors','💰 8. المدينون (تسجيل مبلغ باسم فلان)'],
        ['suppliers','🚚 9. الموردون'],
        ['expenses','💸 10. المصروفات'],
        ['cash','🏦 11. الخزنة'],
        ['reports','📈 12. التقارير (21 تقرير)'],
        ['users','🛡️ 13. المستخدمون'],
        ['settings','⚙️ 14. الإعدادات والصوت والطابعة']
      ];
      var logoImg = '<img src="' + (S.settings.logo_data_url || DEFAULT_LOGO_DATA_URL) + '" alt="مَلَكِي" />';
      var navBtns = tabs.map(function(pair) {
        return '<button class="nav-btn ' + (S.tab===pair[0]?'active':'') + '" data-tab="' + pair[0] + '" onclick="loadTab(\'' + pair[0] + '\')">' + pair[1] + '</button>';
      }).join('');

      var isConn = Boolean(S.btDevice && S.btDevice.gatt && S.btDevice.gatt.connected && S.btChar);
      var isMuted = S.soundMuted || S.soundVolume <= 0;
      var volPct = isMuted ? 0 : Math.round((S.soundVolume || 0) * 100);
      var soundIcon = isMuted ? '🔇' : (volPct < 45 ? '🔉' : '🔊');

      document.getElementById('app').innerHTML =
        '<div class="app-wrap">' +
          '<div id="sidebar-backdrop" class="sidebar-backdrop" onclick="toggleSidebar(false)"></div>' +
          '<aside id="sidebar" class="sidebar">' +
            '<div class="brand">' + logoImg + '<h1>👑 مَلَكِي v5.5</h1><p style="color:#e5c168;font-size:12px;font-weight:700;">قهوة تروق مزاجك</p></div>' +
            '<div class="nav">' + navBtns + '</div>' +
          '</aside>' +
          '<div class="main">' +
            '<header class="topbar">' +
              '<div style="display:flex;align-items:center;gap:6px;">' +
                '<button class="menu-toggle" onclick="toggleSidebar()">☰ القائمة</button>' +
                '<button id="topbar-back-btn" class="btn btn-sec btn-sm" style="display:' + (S.tab !== 'dashboard' ? 'inline-flex' : 'none') + ';" onclick="goBackStep()">⬅️ رجوع</button>' +
                '<strong style="color:var(--gold);font-size:14px;">👑 مَلَكِي</strong>' +
              '</div>' +
              '<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">' +
                '<div class="sound-pill" title="التحكم في صوت الأزرار">' +
                  '<button id="topbar-mute-btn" onclick="toggleSoundMute()" title="كتم / تشغيل الصوت">' + soundIcon + '</button>' +
                  '<input id="topbar-vol-slider" type="range" min="0" max="100" value="' + volPct + '" oninput="setSoundVolume(this.value)" title="تعلية / توطية صوت الأزرار" />' +
                '</div>' +
                '<button class="btn btn-sm" style="font-weight:900;" onclick="openCostCalcReport()">📊 حسابات التكلفة</button>' +
                '<button class="btn btn-sm" style="font-weight:900;" onclick="openMalakyMenuModal()">📜 منيو الأسعار</button>' +
                '<button id="topbar-bt-btn" class="bt-pill ' + (isConn ? 'connected' : '') + '" onclick="connectBluetoothPrinter()">' +
                  (isConn ? ('🖨️ متصلة: ' + (S.btName || 'بلوتوث')) : '🖨️ طابعة بلوتوث') +
                '</button>' +
                '<button class="btn btn-sec btn-sm" onclick="hardRefreshApp()">🔄</button>' +
                '<button class="btn btn-sec btn-sm" onclick="toggleTheme()">' + (S.theme==='light'?'🌙':'☀️') + '</button>' +
                '<button class="btn btn-sec btn-sm" onclick="doLogout()">خروج</button>' +
              '</div>' +
            '</header>' +
            '<main class="content" id="main-content">' + renderTabContent() + '</main>' +
          '</div>' +
          '<nav class="bottom-nav">' +
            '<button class="bnav-btn ' + (S.tab==='dashboard'?'active':'') + '" data-tab="dashboard" onclick="loadTab(\'dashboard\')"><span>📊</span><span>الرئيسية</span></button>' +
            '<button class="bnav-btn ' + (S.tab==='sales'?'active':'') + '" data-tab="sales" onclick="loadTab(\'sales\')"><span>🧾</span><span>المبيعات</span></button>' +
            '<button class="bnav-btn ' + (S.tab==='production'?'active':'') + '" data-tab="production" onclick="loadTab(\'production\')"><span>⚙️</span><span>التعبئة</span></button>' +
            '<button class="bnav-btn ' + (S.tab==='reports'?'active':'') + '" data-tab="reports" onclick="openCostCalcReport()"><span>📈</span><span>التكلفة</span></button>' +
            '<button class="bnav-btn" onclick="toggleSidebar()"><span>☰</span><span>الأقسام</span></button>' +
          '</nav>' +
        '</div>';
    }

    function renderTabContent() {
      var t = S.tab;

      // 1. DASHBOARD
      if (t === 'dashboard') {
        var d = S.dash || { kpis:{}, recent_invoices:[] };
        var k = d.kpis || {};
        var debtors = (S.customers || []).filter(function(c) { return Number(c.balance) > 0; });
        var debLim = limitRows(debtors, 'dash_deb', function(c) {
          var cleanName = String(c.name||'').replace(/'/g,'');
          return '<tr><td><strong>' + c.name + '</strong></td><td>' + (c.phone||'-') + '</td><td style="color:var(--err);font-weight:800;">' + egp(c.balance) + '</td><td>' +
            '<button class="btn btn-sm" onclick="quickCollectDebt(' + c.id + ',\'' + cleanName + '\',' + c.balance + ')">💵 تحصيل</button> ' +
            '<button class="btn btn-sec btn-sm" onclick="viewDebtorStatement(' + c.id + ')">📄 كشف A4</button>' +
          '</td></tr>';
        }, 4, 2);

        var invLim = limitRows(d.recent_invoices, 'dash_inv', function(i) {
          return '<tr><td>' + (i.invoice_number || i.invoice_no) + '</td><td>' + i.invoice_date + '</td><td>' + i.customer_name + '</td><td>' + egp(i.total_piasters) + '</td><td>' + egp(i.paid_piasters) + '</td><td style="display:flex;gap:4px;flex-wrap:wrap;">' +
            '<button class="btn btn-sm" style="background:var(--ok);" onclick="directBluetoothPrintSale(' + i.id + ')">🖨️ بلوتوث مباشر</button>' +
            '<button class="btn btn-sm" style="background:#7c3aed;color:#fff;" onclick="printViaRawBtBridge(' + i.id + ')">📲 طباعة RawBT</button>' +
            '<button class="btn btn-sm" style="background:#0284c7;color:#fff;" onclick="shareInvoiceToPrinterApp(' + i.id + ')">📤 إرسال لتطبيق الطابعة</button>' +
            '<button class="btn btn-sm" onclick="printNormalThermalInvoice(' + i.id + ')">🖨️ حراري عادي</button>' +
            '<button class="btn btn-sec btn-sm" onclick="downloadInvoiceImage(' + i.id + ')">🖼️ صورة</button>' +
          '</td></tr>';
        }, 6, 2);

        var marginPct = Number(k.total_sales_all || 0) > 0
          ? ((Number(k.gross_profit || 0) / Number(k.total_sales_all)) * 100).toFixed(1)
          : '0.0';

        return '<div class="grid">' +
          '<div class="kpi"><div class="lbl">مبيعات اليوم</div><div class="val">' + egp(k.sales_today) + '</div></div>' +
          '<div class="kpi"><div class="lbl">تحصيل اليوم</div><div class="val">' + egp(k.collections_today) + '</div></div>' +
          '<div class="kpi"><div class="lbl">إجمالي المبيعات الكلية</div><div class="val">' + egp(k.total_sales_all) + '</div></div>' +
          '<div class="kpi"><div class="lbl">تكلفة المنتج النهائي المباع (بن+عبوة+استيكر)</div><div class="val" style="color:var(--muted);">' + egp(k.total_cogs_all) + '</div></div>' +
          '<div class="kpi" style="border-right-color:var(--ok);"><div class="lbl">📈 هامش الربح (بناءً على تكلفة المنتج النهائي ' + marginPct + '%)</div><div class="val" style="color:var(--ok);">' + egp(k.gross_profit) + '</div></div>' +
          '<div class="kpi"><div class="lbl">إجمالي المصروفات التشغيلية</div><div class="val" style="color:var(--err);">' + egp(k.total_expenses_all) + '</div></div>' +
          '<div class="kpi" style="border-right-color:var(--ok);background:var(--card2);"><div class="lbl">💎 صافي الربح النهائي (بعد خصم المصاريف)</div><div class="val" style="color:var(--ok);font-size:20px;">' + egp(k.net_profit) + '</div></div>' +
          '<div class="kpi" style="cursor:pointer;border-right-color:var(--err);" onclick="loadTab(\'debtors\')"><div class="lbl">💰 إجمالي المدينون (اضغط للفتح)</div><div class="val" style="color:var(--err);">' + egp(k.customer_debts) + '</div></div>' +
        '</div>' +
        '<div class="panel" style="border:2px solid var(--gold);"><h3>💰 ملخص المدينين (الناس اللي عليها فلوس) <button class="btn btn-sm" onclick="loadTab(\'debtors\')">+ تسجيل مبلغ جديد باسم شخص</button></h3>' +
          '<div class="tbl-wrap"><table><thead><tr><th>الاسم</th><th>الهاتف</th><th>المبلغ المتبقي عليه</th><th>تحصيل / كشف</th></tr></thead><tbody>' + debLim.tbody + '</tbody>' +
          '<tfoot><tr><td colspan="2">إجمالي المبالغ المستحقة لدى المدينين (' + debtors.length + ' شخص)</td><td colspan="2">' + egp(k.customer_debts) + '</td></tr></tfoot></table>' + debLim.moreBtn + '</div>' +
        '</div>' +
        '<div class="panel"><h3>آخر فواتير المبيعات (طباعة حرارية بلوتوث مباشر / RawBT / مشاركة لتطبيق الطابعة)</h3><div class="tbl-wrap"><table><thead><tr><th>الفاتورة</th><th>التاريخ</th><th>العميل</th><th>الإجمالي</th><th>المدفوع</th><th>طباعة / صورة</th></tr></thead><tbody>' + invLim.tbody + '</tbody></table>' + invLim.moreBtn + '</div></div>';
      }

      // 2. PRODUCTS
      if (t === 'products') {
        var ep = S.editingProduct;
        var defSysKgCost = getDefaultSystemFinalKgCostPiasters();
        var epFinalKgCost = ep ? getFinalProductKgCostPiasters(ep.id) : defSysKgCost;
        var epPct1 = '';
        var epPct2 = '';
        if (ep) {
          if (epFinalKgCost > 0 && Number(ep.sale_price_1_piasters) > 0) {
            epPct1 = +(((Number(ep.sale_price_1_piasters) - epFinalKgCost) / epFinalKgCost) * 100).toFixed(2);
          } else if (Number(ep.profit_percent_1 || 0) > 0) {
            epPct1 = +(Number(ep.profit_percent_1)).toFixed(2);
          }
          if (epFinalKgCost > 0 && Number(ep.sale_price_2_piasters) > 0) {
            epPct2 = +(((Number(ep.sale_price_2_piasters) - epFinalKgCost) / epFinalKgCost) * 100).toFixed(2);
          } else if (Number(ep.profit_percent_2 || 0) > 0) {
            epPct2 = +(Number(ep.profit_percent_2)).toFixed(2);
          }
        }

        var quickProdSelOpts = '<option value="">➕ إضافة صنف جديد (أو اختر صنفًا من هنا لتعديل سعره ونسبته فورًا)</option>' +
          S.products.map(function(p) {
            return '<option value="' + p.id + '" ' + (ep && Number(ep.id) === Number(p.id) ? 'selected' : '') + '>☕ ' + p.name + ' — السعر الحالي: ' + egp(p.sale_price_1_piasters) + ' / كجم</option>';
          }).join('');

        var pLim = limitRows(S.products, 'prod_list', function(p) {
          var finCost250 = getFinalProductUnitCostPiasters(p.id, 250);
          var finCost125 = getFinalProductUnitCostPiasters(p.id, 125);
          var finKgCost = getFinalProductKgCostPiasters(p.id);
          var curPct1 = finKgCost > 0 ? (((Number(p.sale_price_1_piasters || 0) - finKgCost) / finKgCost) * 100).toFixed(1) : (Number(p.profit_percent_1 || 0)).toFixed(1);
          var curPct2 = finKgCost > 0 ? (((Number(p.sale_price_2_piasters || 0) - finKgCost) / finKgCost) * 100).toFixed(1) : (Number(p.profit_percent_2 || 0)).toFixed(1);
          var prevP1 = Number(p.prev_sale_price_1_piasters || 0);
          var prevP2 = Number(p.prev_sale_price_2_piasters || 0);
          return '<tr>' +
            '<td>' + p.sku + '</td>' +
            '<td><strong>☕ ' + p.name + '</strong></td>' +
            '<td>' +
              '<strong>' + egp(finKgCost) + ' / كجم معبأ</strong><br/>' +
              '<small style="color:var(--muted)">الربع: ' + egp(finCost250) + ' | الثمن: ' + egp(finCost125) + '</small>' +
            '</td>' +
            '<td>' +
              '<strong style="color:var(--gold);font-size:15px;" id="row-price1-disp-' + p.id + '">' + egp(p.sale_price_1_piasters) + ' / كجم</strong> ' +
              '<span style="color:var(--ok);font-size:12px;font-weight:800;">(ربح ' + curPct1 + '%)</span><br/>' +
              '<small style="color:var(--muted)">بيع الربع (1): <strong>' + egp(p.sale_price_1_piasters*0.25) + '</strong> | الثمن: <strong>' + egp(p.sale_price_1_piasters*0.125) + '</strong></small>' +
              (prevP1 > 0 ? ('<br/><small style="color:#d97706;font-weight:800;">سابق (1): ' + egp(prevP1) + '</small>') : '') +
              '<div style="display:flex;gap:4px;align-items:center;margin-top:5px;">' +
                '<input id="row-pct1-' + p.id + '" type="number" step="0.5" value="' + curPct1 + '" placeholder="نسبة 1 %" style="width:74px;padding:4px 6px;font-size:12px;" oninput="onRowPctLiveInput(' + p.id + ', 1, ' + finKgCost + ')" />' +
                '<button class="btn btn-sm" style="background:var(--ok);padding:4px 8px;font-size:11px;" onclick="applyRowProfitPercent(' + p.id + ', 1)">⚡ حفظ % (سعر 1)</button>' +
              '</div>' +
            '</td>' +
            '<td>' +
              '<strong style="color:#a855f7;font-size:15px;" id="row-price2-disp-' + p.id + '">' + egp(p.sale_price_2_piasters) + ' / كجم</strong> ' +
              '<span style="color:var(--ok);font-size:12px;font-weight:800;">(ربح ' + curPct2 + '%)</span><br/>' +
              '<small style="color:var(--muted)">بيع الربع (2): <strong>' + egp(p.sale_price_2_piasters*0.25) + '</strong> | الثمن: <strong>' + egp(p.sale_price_2_piasters*0.125) + '</strong></small>' +
              (prevP2 > 0 ? ('<br/><small style="color:#d97706;font-weight:800;">سابق (2): ' + egp(prevP2) + '</small>') : '') +
              '<div style="display:flex;gap:4px;align-items:center;margin-top:5px;">' +
                '<input id="row-pct2-' + p.id + '" type="number" step="0.5" value="' + curPct2 + '" placeholder="نسبة 2 %" style="width:74px;padding:4px 6px;font-size:12px;" oninput="onRowPctLiveInput(' + p.id + ', 2, ' + finKgCost + ')" />' +
                '<button class="btn btn-sm" style="background:#7c3aed;color:#fff;padding:4px 8px;font-size:11px;" onclick="applyRowProfitPercent(' + p.id + ', 2)">⚡ حفظ % (سعر 2)</button>' +
              '</div>' +
            '</td>' +
            '<td><strong>' + fmtWeight(p.raw_grams) + '</strong></td>' +
            '<td style="display:flex;gap:4px;flex-wrap:wrap;">' +
              '<button class="btn btn-sec btn-sm" onclick="startEditProductById(' + p.id + ')">✏️ تعديل كامل</button>' +
              '<button class="btn btn-sm" style="background:#d97706;color:#fff;" onclick="revertSingleProductPrice(' + p.id + ')">↩️ رجوع لآخر سعر</button>' +
              '<button class="btn btn-del btn-sm" onclick="deleteProduct(' + p.id + ')">🗑️ حذف</button>' +
            '</td>' +
          '</tr>';
        }, 7, 10);

        var totRawGrams = S.products.reduce(function(s, p) { return s + Number(p.raw_grams || 0); }, 0);

        return '<div class="panel" style="border:2px solid var(--ok);background:var(--card);">' +
          '<h3 style="color:var(--ok);">📈 1. التسعير الجماعي لكل المنتجات دفعة واحدة (خانة مستقلة للسعر رقم 1 وخانة مستقلة منفصلة للسعر رقم 2)</h3>' +
          '<div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(290px, 1fr));gap:14px;margin-bottom:12px;">' +

            '<div style="background:var(--card2);border:2px solid var(--ok);border-radius:12px;padding:12px;">' +
              '<div style="font-weight:900;color:var(--ok);font-size:14.5px;margin-bottom:8px;">🟢 أولًا: تسعير جماعي لـ (السعر الأول - رقم 1) لوحده</div>' +
              '<div style="display:flex;gap:5px;flex-wrap:wrap;margin-bottom:8px;align-items:center;">' +
                '<span style="font-size:11.5px;font-weight:800;color:var(--muted);">نسب سريعة للسعر (1):</span>' +
                '<button class="btn btn-sec btn-sm" onclick="setBulkQuickPct1(15)">+15%</button>' +
                '<button class="btn btn-sec btn-sm" onclick="setBulkQuickPct1(20)">+20%</button>' +
                '<button class="btn btn-sec btn-sm" onclick="setBulkQuickPct1(25)">+25%</button>' +
                '<button class="btn btn-sec btn-sm" onclick="setBulkQuickPct1(30)">+30%</button>' +
                '<button class="btn btn-sec btn-sm" onclick="setBulkQuickPct1(35)">+35%</button>' +
                '<button class="btn btn-sec btn-sm" onclick="setBulkQuickPct1(40)">+40%</button>' +
                '<button class="btn btn-sec btn-sm" onclick="setBulkQuickPct1(50)">+50%</button>' +
              '</div>' +
              '<div style="margin-bottom:8px;">' +
                '<label>📊 نسبة الربح الجماعية للسعر رقم (1) فقط (% فوق التكلفة النهائية)</label>' +
                '<input id="bulk-pct1" type="number" step="0.5" placeholder="اكتب نسبة السعر الأول % (مثال: 30)" oninput="previewBulkProfitPercent1()" style="border:2px solid var(--ok);" />' +
              '</div>' +
              '<div id="bulk-live-preview-1" style="font-size:12.5px;background:var(--card);padding:8px;border-radius:8px;margin-bottom:8px;font-weight:800;color:var(--gold);line-height:1.6;">' +
                '💡 اكتب نسبة الربح للسعر رقم (1) هنا لمعاينة وتحديث السعر الأول فقط لكل المنتجات بدون المساس بالسعر الثاني.' +
              '</div>' +
              '<button class="btn" style="background:var(--ok);width:100%;font-size:13.5px;" onclick="applyBulkProfitPercent1()">⚡ تطبيق النسبة على (السعر رقم 1 فقط) لكل المنتجات</button>' +
            '</div>' +

            '<div style="background:var(--card2);border:2px solid #7c3aed;border-radius:12px;padding:12px;">' +
              '<div style="font-weight:900;color:#a855f7;font-size:14.5px;margin-bottom:8px;">🟣 ثانيًا: تسعير جماعي لـ (السعر الثاني - رقم 2) لوحده منفصل</div>' +
              '<div style="display:flex;gap:5px;flex-wrap:wrap;margin-bottom:8px;align-items:center;">' +
                '<span style="font-size:11.5px;font-weight:800;color:var(--muted);">نسب سريعة للسعر (2):</span>' +
                '<button class="btn btn-sec btn-sm" onclick="setBulkQuickPct2(10)">+10%</button>' +
                '<button class="btn btn-sec btn-sm" onclick="setBulkQuickPct2(15)">+15%</button>' +
                '<button class="btn btn-sec btn-sm" onclick="setBulkQuickPct2(20)">+20%</button>' +
                '<button class="btn btn-sec btn-sm" onclick="setBulkQuickPct2(25)">+25%</button>' +
                '<button class="btn btn-sec btn-sm" onclick="setBulkQuickPct2(30)">+30%</button>' +
                '<button class="btn btn-sec btn-sm" onclick="setBulkQuickPct2(35)">+35%</button>' +
                '<button class="btn btn-sec btn-sm" onclick="setBulkQuickPct2(40)">+40%</button>' +
              '</div>' +
              '<div style="margin-bottom:8px;">' +
                '<label>📊 نسبة الربح الجماعية للسعر رقم (2) فقط (% فوق التكلفة النهائية)</label>' +
                '<input id="bulk-pct2" type="number" step="0.5" placeholder="اكتب نسبة السعر الثاني % (مثال: 20)" oninput="previewBulkProfitPercent2()" style="border:2px solid #7c3aed;" />' +
              '</div>' +
              '<div id="bulk-live-preview-2" style="font-size:12.5px;background:var(--card);padding:8px;border-radius:8px;margin-bottom:8px;font-weight:800;color:#a855f7;line-height:1.6;">' +
                '💡 اكتب نسبة الربح للسعر رقم (2) هنا لمعاينة وتحديث السعر الثاني فقط لكل المنتجات بدون المساس بالسعر الأول.' +
              '</div>' +
              '<button class="btn" style="background:#7c3aed;color:#fff;width:100%;font-size:13.5px;" onclick="applyBulkProfitPercent2()">⚡ تطبيق النسبة على (السعر رقم 2 فقط) لكل المنتجات</button>' +
            '</div>' +

          '</div>' +
          '<div style="display:flex;gap:10px;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;background:var(--card2);padding:10px;border-radius:10px;">' +
            '<div style="min-width:240px;flex:1;"><label>💰 تكلفة نهائية افتراضية للكيلو المعبأ (ج.م - تُستخدم للأصناف غير المسجل لها رصيد خام بعد)</label><input id="bulk-fallback-cost" type="number" step="0.01" value="' + (defSysKgCost > 0 ? (defSysKgCost/100).toFixed(2) : '520') + '" oninput="previewBulkProfitPercent1();previewBulkProfitPercent2();" /></div>' +
            '<button class="btn" style="background:#d97706;color:#fff;font-size:14px;min-height:42px;" onclick="revertAllProductsPrices()">↩️ رجوع لآخر سعر قبل التعديل (لكل المنتجات)</button>' +
          '</div>' +
        '</div>' +

        '<div class="panel" style="border:2px solid var(--gold);">' +
          '<h3>' + (ep ? ('✏️ 2. خانة الأسعار ونسبة الربح للصنف: ' + ep.name) : '➕ 2. خانة الأسعار وإضافة / تعديل صنف بنسبة ربح % تحسب السعر دايركت') + '</h3>' +
          '<div style="margin-bottom:10px;background:var(--card2);padding:10px;border-radius:8px;">' +
            '<label style="color:var(--gold);">🔍 اختر صنفًا لتعديل سعره أو نسبة ربحه فورًا (أو اتركه لإضافة صنف جديد)</label>' +
            '<select id="quick-prod-edit-sel" onchange="onQuickSelectProductForEdit(this.value)">' + quickProdSelOpts + '</select>' +
          '</div>' +
          '<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:6px;align-items:center;">' +
            '<span style="font-size:12px;font-weight:800;color:var(--ok);">نسب سريعة للسعر الأول (1) فقط:</span>' +
            '<button class="btn btn-sec btn-sm" onclick="setFormQuickPct(15)">+15%</button>' +
            '<button class="btn btn-sec btn-sm" onclick="setFormQuickPct(20)">+20%</button>' +
            '<button class="btn btn-sec btn-sm" onclick="setFormQuickPct(25)">+25%</button>' +
            '<button class="btn btn-sec btn-sm" onclick="setFormQuickPct(30)">+30%</button>' +
            '<button class="btn btn-sec btn-sm" onclick="setFormQuickPct(35)">+35%</button>' +
            '<button class="btn btn-sec btn-sm" onclick="setFormQuickPct(40)">+40%</button>' +
            '<button class="btn btn-sec btn-sm" onclick="setFormQuickPct(50)">+50%</button>' +
          '</div>' +
          '<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px;align-items:center;">' +
            '<span style="font-size:12px;font-weight:800;color:#a855f7;">نسب سريعة للسعر الثاني (2) فقط:</span>' +
            '<button class="btn btn-sec btn-sm" onclick="setFormQuickPct2(10)">+10%</button>' +
            '<button class="btn btn-sec btn-sm" onclick="setFormQuickPct2(15)">+15%</button>' +
            '<button class="btn btn-sec btn-sm" onclick="setFormQuickPct2(20)">+20%</button>' +
            '<button class="btn btn-sec btn-sm" onclick="setFormQuickPct2(25)">+25%</button>' +
            '<button class="btn btn-sec btn-sm" onclick="setFormQuickPct2(30)">+30%</button>' +
            '<button class="btn btn-sec btn-sm" onclick="setFormQuickPct2(35)">+35%</button>' +
            '<button class="btn btn-sec btn-sm" onclick="setFormQuickPct2(40)">+40%</button>' +
          '</div>' +
          '<div class="form-grid">' +
            '<div><label>اسم الصنف</label><input id="p-name" value="' + (ep ? ep.name : '') + '" placeholder="مثال: كولومبي / سلطان سادة فاتح" /></div>' +
            '<div><label>كود SKU (اختياري)</label><input id="p-sku" value="' + (ep ? ep.sku : '') + '" placeholder="تلقائي" /></div>' +
            '<div><label>💰 التكلفة النهائية للكيلو المعبأ (بن+عبوة+استيكر ج.م)</label><input id="p-base-final-cost" type="number" step="0.01" value="' + (epFinalKgCost > 0 ? (epFinalKgCost/100).toFixed(2) : '520') + '" placeholder="التكلفة النهائية للكيلو" oninput="onProdBaseCostInput()" /></div>' +
            '<div><label style="color:var(--ok);">📈 نسبة الربح للسعر الأول (%) — تحسب السعر دايركت</label><input id="p-pct1" type="number" step="0.1" value="' + epPct1 + '" placeholder="اكتب النسبة % (مثال: 25)" oninput="onProdPct1Input()" style="border:2px solid var(--ok);" /></div>' +
            '<div><label>💵 سعر بيع الكيلو الأول (ج.م) — محسوب دايركت</label><input id="p-p1" type="number" step="0.01" value="' + (ep ? (ep.sale_price_1_piasters/100) : '') + '" oninput="onProdPrice1Input()" /></div>' +
            '<div><label>🏺 سعر بيع برطمان الربع 250 جم الأول (ج.م)</label><input id="p-q1" type="number" step="0.01" value="' + (ep ? ((ep.sale_price_1_piasters*0.25)/100).toFixed(2) : '') + '" oninput="onProdQuarter1Input()" /></div>' +
            '<div><label style="color:var(--ok);">📈 نسبة الربح للسعر الثاني (% - اختياري)</label><input id="p-pct2" type="number" step="0.1" value="' + epPct2 + '" placeholder="اكتب النسبة % (مثال: 20)" oninput="onProdPct2Input()" /></div>' +
            '<div><label>💵 سعر بيع الكيلو الثاني (ج.م - اختياري)</label><input id="p-p2" type="number" step="0.01" value="' + (ep ? (ep.sale_price_2_piasters/100) : '') + '" oninput="onProdPrice2Input()" /></div>' +
            '<div><label>🏺 سعر بيع برطمان الربع 250 جم الثاني (ج.م)</label><input id="p-q2" type="number" step="0.01" value="' + (ep ? ((ep.sale_price_2_piasters*0.25)/100).toFixed(2) : '') + '" oninput="onProdQuarter2Input()" /></div>' +
          '</div>' +
          '<div id="prod-price-hint" style="font-size:13px;color:var(--gold);background:var(--card2);padding:10px;border-radius:8px;margin-bottom:10px;font-weight:800;line-height:1.7;"></div>' +
          '<div style="display:flex;gap:8px;flex-wrap:wrap;">' +
            '<button class="btn" onclick="saveProduct()">' + (ep ? '💾 حفظ التعديل والسعر الجديد' : '+ حفظ الصنف والسعر') + '</button>' +
            (ep ? ('<button class="btn" style="background:#d97706;color:#fff;" onclick="revertSingleProductPrice(' + ep.id + ')">↩️ رجوع لآخر سعر قبل التعديل (' + egp(ep.prev_sale_price_1_piasters || ep.sale_price_1_piasters) + ')</button>') : '') +
            '<button class="btn btn-sec" onclick="resetProdFormBeforeEdit()">↩️ إرجاع الخانات قبل التعديل</button>' +
            (ep ? '<button class="btn btn-sec" onclick="S.editingProduct=null;renderMainOnly()">➕ وضع إضافة صنف جديد</button>' : '') +
          '</div>' +
        '</div>' +

        '<div class="panel"><h3><span>📋 3. قائمة الأصناف والأسعار ونسب الربح (يمكنك كتابة النسبة % أو الرجوع لآخر سعر مباشرة أمام كل صنف)</span>' +
          '<div style="display:flex;gap:6px;flex-wrap:wrap;">' +
            '<button class="btn btn-sm" style="font-weight:900;" onclick="openCostCalcReport()">📊 تقرير حسابات سعر التكلفة (قبل وبعد)</button>' +
            '<button class="btn btn-sm" style="font-weight:900;" onclick="openMalakyMenuModal()">📜 معاينة وطباعة منيو الأسعار الفاخر (بلوجو مَلَكِي)</button>' +
          '</div>' +
        '</h3>' +
          '<div class="tbl-wrap"><table>' +
            '<thead><tr><th>SKU</th><th>اسم الصنف</th><th>التكلفة النهائية للمنتج (بن+عبوة+استيكر)</th><th>سعر البيع (1) + حساب النسبة % دايركت</th><th>سعر البيع (2) + السعر السابق</th><th>وزن الخام</th><th>تعديل / رجوع لآخر سعر / حذف</th></tr></thead>' +
            '<tbody>' + pLim.tbody + '</tbody>' +
            '<tfoot><tr><td colspan="5">الإجمالي الكلي (' + S.products.length + ' صنف)</td><td colspan="2">إجمالي الخام: ' + fmtWeight(totRawGrams) + '</td></tr></tfoot>' +
          '</table>' + pLim.moreBtn + '</div>' +
        '</div>';
      }

      // 3. INVENTORY
      if (t === 'inventory') {
        var inv = S.inventory;

        var groupedFinMap = {};
        inv.finished.forEach(function(f) {
          var prodObj = (S.products || []).find(function(p) { return Number(p.id) === Number(f.product_id); });
          var saleKg1 = Number(f.sale_price_1_piasters || prodObj?.sale_price_1_piasters || 0);
          var saleKg2 = Number(f.sale_price_2_piasters || prodObj?.sale_price_2_piasters || saleKg1);
          if (!groupedFinMap[f.product_id]) {
            groupedFinMap[f.product_id] = {
              product_id: f.product_id, product_name: f.product_name,
              q250: 0, q125: 0, cost250: 0, cost125: 0,
              saleKg1: saleKg1, saleKg2: saleKg2,
              sale250: Math.round(saleKg1 * 0.25), sale125: Math.round(saleKg1 * 0.125),
              total_grams: 0, total_val_piasters: 0, total_sale_piasters: 0
            };
          }
          var g = groupedFinMap[f.product_id];
          var u = Number(f.quantity_units || 0);
          var wG = Number(f.net_weight_grams || 250);
          var c = Math.max(Number(f.average_cost_per_unit_piasters || 0), getFinalProductUnitCostPiasters(f.product_id, wG));
          var unitSale = Math.round((saleKg1 * wG) / 1000);
          if (wG === 250) { g.q250 = u; g.cost250 = c; g.sale250 = unitSale; }
          if (wG === 125) { g.q125 = u; g.cost125 = c; g.sale125 = unitSale; }
          g.total_grams += u * wG;
          g.total_val_piasters += u * c;
          g.total_sale_piasters += u * unitSale;
        });
        var groupedFinList = Object.values(groupedFinMap).sort(function(a, b) { return b.total_grams - a.total_grams; });

        var finTotGrams = groupedFinList.reduce(function(s, x) { return s + x.total_grams; }, 0);
        var finTot250 = groupedFinList.reduce(function(s, x) { return s + x.q250; }, 0);
        var finTot125 = groupedFinList.reduce(function(s, x) { return s + x.q125; }, 0);
        var finTotVal = groupedFinList.reduce(function(s, x) { return s + x.total_val_piasters; }, 0);
        var finTotSaleVal = groupedFinList.reduce(function(s, x) { return s + x.total_sale_piasters; }, 0);
        var finTotExpProfit = finTotSaleVal - finTotVal;

        var rawTotGrams = inv.raw.reduce(function(s, r) { return s + Number(r.quantity_grams || 0); }, 0);
        var rawTotVal = inv.raw.reduce(function(s, r) { return s + Math.round((Number(r.quantity_grams||0)*Number(r.average_cost_per_kg_piasters||0))/1000); }, 0);

        var pkgTotUnits = inv.packaging.reduce(function(s, p) { return s + Number(p.quantity_units || 0); }, 0);
        var pkgTotVal = inv.packaging.reduce(function(s, p) { return s + (Number(p.quantity_units||0)*Number(p.average_cost_per_unit_piasters||0)); }, 0);

        var stkTotUnits = inv.stickers.reduce(function(s, x) { return s + Number(x.quantity_units || 0); }, 0);
        var stkTotVal = inv.stickers.reduce(function(s, x) { return s + (Number(x.quantity_units||0)*Number(x.average_cost_per_unit_piasters||0)); }, 0);

        var rawLim = limitRows(inv.raw, 'inv_raw', function(r) {
          var cleanName = String(r.name || '').replace(/'/g, '');
          return '<tr>' +
            '<td><strong>☕ ' + r.name + '</strong></td>' +
            '<td><strong>' + fmtWeight(r.quantity_grams) + '</strong></td>' +
            '<td>' + egp(r.average_cost_per_kg_piasters) + ' / كجم<br/><small style="color:var(--muted)">الربع خام: ' + egp(r.average_cost_per_kg_piasters*0.25) + ' | الثمن خام: ' + egp(r.average_cost_per_kg_piasters*0.125) + '</small></td>' +
            '<td>' + egp(Math.round((r.quantity_grams*r.average_cost_per_kg_piasters)/1000)) + '</td>' +
            '<td>' +
              '<button class="btn btn-sec btn-sm" onclick="loadIntoSection5(\'raw_coffee\',' + r.product_id + ',\'' + cleanName + '\',0,0,' + r.quantity_grams + ',' + r.average_cost_per_kg_piasters + ')">✏️ تعديل</button> ' +
              '<button class="btn btn-del btn-sm" onclick="zeroCoffeeStock(\'raw_coffee\',' + r.product_id + ')">🗑️ حذف / تصفير</button>' +
            '</td>' +
          '</tr>';
        }, 5, 2);

        var finLim = limitRows(groupedFinList, 'inv_fin', function(g) {
          var cleanName = String(g.product_name || '').replace(/'/g, '');
          var expProfit = g.total_sale_piasters - g.total_val_piasters;
          return '<tr>' +
            '<td><strong>☕ ' + g.product_name + '</strong></td>' +
            '<td><strong style="color:var(--gold);">' + fmtWeight(g.total_grams) + '</strong></td>' +
            '<td>' + g.q250 + ' ربع (0.25 كجم) + ' + g.q125 + ' ثمن (0.125 كجم)</td>' +
            '<td>تكلفة الربع النهائية: <strong>' + egp(g.cost250) + '</strong><br/><small style="color:var(--muted)">تكلفة الثمن النهائية: <strong>' + egp(g.cost125) + '</strong> (الكيلو: ' + egp(g.cost250*4) + ')</small></td>' +
            '<td>' +
              '<strong style="color:var(--gold);">سعر الكيلو: ' + egp(g.saleKg1) + '</strong><br/>' +
              '<small style="color:var(--ok);font-weight:800;">بيع الربع: ' + egp(g.sale250) + ' | بيع الثمن: ' + egp(g.sale125) + '</small>' +
            '</td>' +
            '<td><strong>' + egp(g.total_val_piasters) + '</strong></td>' +
            '<td>' +
              '<strong style="color:var(--ok);font-size:15px;">' + egp(g.total_sale_piasters) + '</strong><br/>' +
              '<small style="color:var(--gold);font-weight:800;">الربح المتوقع: ' + egp(expProfit) + '</small>' +
            '</td>' +
            '<td>' +
              '<button class="btn btn-sec btn-sm" onclick="loadIntoSection5(\'finished\',' + g.product_id + ',\'' + cleanName + '\',' + g.q250 + ',' + g.q125 + ',' + g.total_grams + ',' + (g.cost250*4) + ')">✏️ تعديل</button> ' +
              '<button class="btn btn-del btn-sm" onclick="zeroCoffeeStock(\'finished\',' + g.product_id + ')">🗑️ حذف / تصفير</button>' +
            '</td>' +
          '</tr>';
        }, 8, 10);

        var stkLim = limitRows(inv.stickers, 'inv_stk', function(s) {
          return '<tr>' +
            '<td><strong>☕ ' + s.product_name + '</strong></td><td>' + s.packaging_name + '</td><td><strong>' + s.quantity_units + ' استيكر</strong></td>' +
            '<td>' + egp(s.average_cost_per_unit_piasters) + '</td><td>' + egp(s.quantity_units * s.average_cost_per_unit_piasters) + '</td>' +
            '<td>' +
              '<button class="btn btn-sec btn-sm" onclick="editStickerPrompt(' + s.id + ',' + s.product_id + ',' + s.packaging_type_id + ',' + s.quantity_units + ',' + s.average_cost_per_unit_piasters + ')">✏️ تعديل</button> ' +
              '<button class="btn btn-del btn-sm" onclick="deleteSticker(' + s.id + ')">🗑️ تصفير</button>' +
            '</td>' +
          '</tr>';
        }, 6, 4);

        var pkOpts = inv.packaging.map(function(pk) { return '<option value="' + pk.packaging_type_id + '">' + pk.name + ' (' + gramsToKgNum(pk.net_weight_grams) + ' كجم)</option>'; }).join('');

        var allStickersInv = inv.stickers || [];
        var invStkOpts = '<option value="none">🚫 بدون استيكر (تعبئة بدون خصم استيكر)</option>' +
          allStickersInv.map(function(s) {
            return '<option value="' + s.id + '">🏷️ ' + s.product_name + ' - ' + s.packaging_name + ' (المتاح: ' + s.quantity_units + ')</option>';
          }).join('');

        var sec5Body = '';
        if (S.adjType === 'finished') {
          sec5Body =
            '<div class="form-grid" style="background:var(--card2);padding:12px;border-radius:10px;">' +
              '<div><label>🔍 ابحث واختر الصنف</label>' + renderProductCombo('adj-pid', 'calcSec5Preview', null, 'cost') + '</div>' +
              '<div><label>الوزن بالكيلو (مثال: 1 أو 1.25 أو 1.5)</label><input id="adj-weight-kg" type="number" step="0.125" value="0" placeholder="مثال: 1.25" oninput="onSec5WeightKgInput()" /></div>' +
              '<div><label>كام برطمان ربع كيلو (0.25 كجم)؟</label><input id="adj-q250" type="number" value="0" oninput="calcSec5Preview()" /></div>' +
              '<div><label>🏷️ استيكر الربع (أو اختر بدون استيكر)</label><select id="adj-stk250">' + invStkOpts + '</select></div>' +
              '<div><label>كام برطمان ثمن كيلو (0.125 كجم)؟</label><input id="adj-q125" type="number" value="0" oninput="calcSec5Preview()" /></div>' +
              '<div><label>🏷️ استيكر الثمن (أو اختر بدون استيكر)</label><select id="adj-stk125">' + invStkOpts + '</select></div>' +
              '<div><label>سعر تكلفة الكيلو (ج.م)</label><input id="adj-kgcost" type="number" step="0.01" placeholder="تلقائي من الخام أو اكتبه" oninput="calcSec5Preview()" /></div>' +
            '</div>' +
            '<div id="sec5-preview" style="padding:10px;background:var(--card);border:1px dashed var(--gold);border-radius:9px;margin-bottom:10px;font-weight:800;color:var(--gold);font-size:13px;">' +
              'اختر طريقة الحفظ (تعبئة فعلية بخصم من الخام والعبوات والاستيكر، أو رصيد افتتاحي جاهز).' +
            '</div>';
        } else if (S.adjType === 'raw_coffee') {
          sec5Body =
            '<div class="form-grid" style="background:var(--card2);padding:12px;border-radius:10px;">' +
              '<div><label>🔍 ابحث واختر الصنف</label>' + renderProductCombo('adj-pid', 'calcSec5RawPreview', null, 'cost') + '</div>' +
              '<div><label>وزن البن الخام بالكيلو (مثال: 1 أو 1.25 أو 1.5)</label><input id="adj-raw-kg" type="number" step="0.01" placeholder="مثال: 1.5 أو 5" oninput="calcSec5RawPreview()" /></div>' +
              '<div><label>سعر تكلفة الكيلو (ج.م)</label><input id="adj-kgcost" type="number" step="0.01" placeholder="مثال: 480" oninput="calcSec5RawPreview()" /></div>' +
            '</div>' +
            '<div id="sec5-preview" style="padding:10px;background:var(--card);border:1px dashed var(--gold);border-radius:9px;margin-bottom:10px;font-weight:800;color:var(--gold);font-size:13px;"></div>';
        } else if (S.adjType === 'packaging') {
          sec5Body =
            '<div class="form-grid" style="background:var(--card2);padding:12px;border-radius:10px;">' +
              '<div><label>نوع البرطمان الفارغ</label><select id="adj-pkid">' + pkOpts + '</select></div>' +
              '<div><label>العدد (برطمان)</label><input id="adj-qty" type="number" /></div>' +
              '<div><label>تكلفة البرطمان الواحد (ج.م)</label><input id="adj-ucost" type="number" step="0.01" /></div>' +
            '</div>';
        } else {
          sec5Body =
            '<div class="form-grid" style="background:var(--card2);padding:12px;border-radius:10px;">' +
              '<div><label>🔍 ابحث واختر الصنف (التوليفة)</label>' + renderProductCombo('adj-pid') + '</div>' +
              '<div><label>حجم العبوة</label><select id="adj-pkid">' + pkOpts + '</select></div>' +
              '<div><label>عدد الاستيكرات</label><input id="adj-qty" type="number" /></div>' +
              '<div><label>تكلفة الاستيكر الواحد (ج.م)</label><input id="adj-ucost" type="number" step="0.01" value="5" /></div>' +
            '</div>';
        }

        var modeOptions = S.adjType === 'finished'
          ? ('<option value="pack">⚙️ تعبئة فعلية (يخصم تلقائيًا من البن الخام + العبوات + الاستيكر أو بدون استيكر)</option>' +
             '<option value="set">تعيين رصيد افتتاحي جاهز (بدون خصم من الخام)</option>' +
             '<option value="add">إضافة رصيد جاهز فوق الموجود (بدون خصم من الخام)</option>')
          : ('<option value="set">تعيين / تعديل الرصيد الحالي</option>' +
             '<option value="add">إضافة فوق الرصيد الموجود</option>');

        return '<div class="panel" id="sec5-panel" style="border:2px solid var(--gold);">' +
          '<h3>5. إضافة وتعديل المخزون (البن الخام، العبوات، استيكرات كل توليفة، والمنتج النهائي)</h3>' +
          '<div class="form-grid">' +
            '<div><label>نوع المخزون</label><select id="adj-type" onchange="S.adjType=this.value;renderMainOnly()">' +
              '<option value="raw_coffee" ' + (S.adjType==='raw_coffee'?'selected':'') + '>1. بن خام غير معبأ (بالكيلو 1 أو 1.25 أو 1.5 + سعر الكيلو)</option>' +
              '<option value="packaging" ' + (S.adjType==='packaging'?'selected':'') + '>2. برطمانات فارغة (ربع / ثمن بالعدد)</option>' +
              '<option value="sticker" ' + (S.adjType==='sticker'?'selected':'') + '>3. استيكرات خاصة بكل توليفة (بالعدد)</option>' +
              '<option value="finished" ' + (S.adjType==='finished'?'selected':'') + '>4. منتج نهائي معبأ (تعبئة بخصم تلقائي أو رصيد افتتاحي)</option>' +
            '</select></div>' +
            '<div><label>طريقة الحفظ</label><select id="adj-mode">' + modeOptions + '</select></div>' +
          '</div>' +
          sec5Body +
          '<button class="btn" onclick="submitUnifiedAdjust()">💾 حفظ واعتماد الرصيد</button>' +
        '</div>' +

        '<div class="panel"><h3>1. مخزون البن الخام بالكيلو (يعرض أول صنفين فقط)</h3>' +
          '<div class="tbl-wrap"><table>' +
            '<thead><tr><th>اسم الصنف</th><th>الوزن المتاح (كجم)</th><th>تكلفة الكيلو (والربع والثمن خام)</th><th>قيمة المخزون</th><th>تعديل / حذف</th></tr></thead>' +
            '<tbody>' + rawLim.tbody + '</tbody>' +
            '<tfoot><tr><td>إجمالي البن الخام</td><td>' + fmtWeight(rawTotGrams) + '</td><td>-</td><td colspan="2">' + egp(rawTotVal) + '</td></tr></tfoot>' +
          '</table>' + rawLim.moreBtn + '</div>' +
        '</div>' +

        '<div class="panel"><h3>2. مخزون العبوات الفارغة (يتخصم منها تلقائيًا عند التعبئة)</h3>' +
          '<div class="tbl-wrap"><table>' +
            '<thead><tr><th>العبوة</th><th>سعة البرطمان</th><th>العدد المتاح</th><th>تكلفة البرطمان</th><th>إجمالي القيمة</th><th>تعديل / حذف</th></tr></thead>' +
            '<tbody>' + inv.packaging.map(function(p) {
              return '<tr><td><strong>' + p.name + '</strong></td><td>' + gramsToKgNum(p.net_weight_grams) + ' كجم</td><td><strong>' + p.quantity_units + ' عبوة</strong></td><td>' + egp(p.average_cost_per_unit_piasters) + '</td><td>' + egp(p.quantity_units*p.average_cost_per_unit_piasters) + '</td><td>' +
                '<button class="btn btn-sec btn-sm" onclick="editPkgPrompt(' + p.packaging_type_id + ',\'' + p.name + '\',' + p.quantity_units + ',' + p.average_cost_per_unit_piasters + ')">✏️ تعديل</button> ' +
                '<button class="btn btn-del btn-sm" onclick="zeroPkgStock(' + p.packaging_type_id + ')">🗑️ حذف / تصفير</button>' +
              '</td></tr>';
            }).join('') + '</tbody>' +
            '<tfoot><tr><td colspan="2">إجمالي العبوات الفارغة</td><td>' + pkgTotUnits + ' عبوة</td><td>-</td><td colspan="2">' + egp(pkgTotVal) + '</td></tr></tfoot>' +
          '</table></div>' +
        '</div>' +

        '<div class="panel"><h3>3. مخزون الاستيكرات لكل توليفة (مربوط مباشرة بشاشة الإنتاج والتعبئة)</h3>' +
          '<div class="form-grid">' +
            '<div><label>🔍 ابحث واختر التوليفة / الصنف</label>' + renderProductCombo('st-pid') + '</div>' +
            '<div><label>حجم العبوة</label><select id="st-pkid">' + pkOpts + '</select></div>' +
            '<div><label>الكمية (عدد الاستيكرات)</label><input id="st-qty" type="number" placeholder="مثال: 100" /></div>' +
            '<div><label>تكلفة الاستيكر الواحد (ج.م)</label><input id="st-cost" type="number" step="0.01" value="5" /></div>' +
          '</div>' +
          '<div style="display:flex;gap:8px;flex-wrap:wrap;">' +
            '<button class="btn" onclick="saveStickerSku(\'set\')">💾 تعيين رصيد الاستيكر</button>' +
            '<button class="btn btn-sec" onclick="saveStickerSku(\'add\')">➕ إضافة فوق رصيد الاستيكر الحالي</button>' +
          '</div>' +
          '<div class="tbl-wrap" style="margin-top:12px;"><table>' +
            '<thead><tr><th>اسم التوليفة / الصنف</th><th>حجم العبوة</th><th>العدد المتاح</th><th>تكلفة الاستيكر</th><th>إجمالي القيمة</th><th>تعديل / تصفير</th></tr></thead>' +
            '<tbody>' + stkLim.tbody + '</tbody>' +
            '<tfoot><tr><td colspan="2">إجمالي الاستيكرات</td><td>' + stkTotUnits + ' استيكر</td><td>-</td><td colspan="2">' + egp(stkTotVal) + '</td></tr></tfoot>' +
          '</table>' + stkLim.moreBtn + '</div>' +
        '</div>' +

        '<div class="panel">' +
          '<h3><span>4. مخزون وتقرير المنتج النهائي المعبأ (التكلفة النهائية + أسعار البيع + قيمة المخزون + إجمالي فلوس البيع)</span>' +
            '<button class="btn btn-sm" style="background:var(--ok);" onclick="printFinishedStockReportA4()">🖨️ طباعة تقرير المنتج النهائي (A4)</button>' +
          '</h3>' +
          '<div class="grid" style="margin-bottom:10px;">' +
            '<div class="kpi"><div class="lbl">إجمالي الوزن المعبأ</div><div class="val">' + fmtWeight(finTotGrams) + ' (' + finTot250 + ' ربع + ' + finTot125 + ' ثمن)</div></div>' +
            '<div class="kpi"><div class="lbl">قيمة المخزون المعبأ (بالتكلفة النهائية)</div><div class="val">' + egp(finTotVal) + '</div></div>' +
            '<div class="kpi" style="border-right-color:var(--ok);"><div class="lbl">💰 إجمالي فلوس البيع (بسعر البيع)</div><div class="val" style="color:var(--ok);">' + egp(finTotSaleVal) + '</div></div>' +
            '<div class="kpi" style="border-right-color:var(--gold);background:var(--card2);"><div class="lbl">📈 صافي الربح المتوقع من بيع المعبأ</div><div class="val" style="color:var(--ok);">' + egp(finTotExpProfit) + '</div></div>' +
          '</div>' +
          '<div class="tbl-wrap"><table>' +
            '<thead><tr><th>اسم الصنف</th><th>إجمالي الوزن المعبأ</th><th>تفصيل البرطمانات</th><th>تكلفة البرطمان النهائية (شامل العبوة والاستيكر)</th><th>أسعار البيع (الكيلو / الربع / الثمن)</th><th>قيمة المخزون (بالتكلفة)</th><th>إجمالي فلوس البيع (والربح المتوقع)</th><th>تعديل / حذف</th></tr></thead>' +
            '<tbody>' + finLim.tbody + '</tbody>' +
            '<tfoot><tr><td>إجمالي القهوة المعبأة</td><td>' + fmtWeight(finTotGrams) + '</td><td>' + finTot250 + ' ربع + ' + finTot125 + ' ثمن</td><td>-</td><td>-</td><td>قيمة المخزون: ' + egp(finTotVal) + '</td><td colspan="2" style="color:var(--ok);">إجمالي فلوس البيع: ' + egp(finTotSaleVal) + ' (الربح: ' + egp(finTotExpProfit) + ')</td></tr></tfoot>' +
          '</table>' + finLim.moreBtn + '</div>' +
        '</div>';
      }

      // 4. PURCHASES
      if (t === 'purchases') {
        var pkOpts2 = S.inventory.packaging.map(function(pk) { return '<option value="' + pk.packaging_type_id + '">' + pk.name + '</option>'; }).join('');
        var supOpts = '<option value="">مورد عام / نقدي</option>' + S.suppliers.map(function(s) { return '<option value="' + s.id + '">' + s.name + '</option>'; }).join('');
        var purLim = limitRows(S.purchases, 'pur_list', function(p) {
          return '<tr>' +
            '<td>' + p.purchase_number + '</td><td>' + p.purchase_date + '</td><td>' + p.supplier_name + '</td>' +
            '<td>' + egp(p.total_piasters) + '</td><td>' + egp(p.paid_piasters) + '</td>' +
            '<td>' +
              '<button class="btn btn-sm" onclick="printPurchase(' + p.id + ')">🖨️ طباعة A4</button> ' +
              '<button class="btn btn-sec btn-sm" onclick="editSavedPurchase(' + p.id + ')">✏️ تعديل</button> ' +
              '<button class="btn btn-del btn-sm" onclick="deletePurchase(' + p.id + ')">🗑️ حذف</button>' +
            '</td>' +
          '</tr>';
        }, 6, 2);
        var totPur = S.purchases.reduce(function(s, p) { return s + Number(p.total_piasters || 0); }, 0);
        var curPurSub = S.purItems.reduce(function(s, x) { return s + Number(x.line_total || 0); }, 0);

        return '<div class="panel" style="border:2px solid var(--gold);"><h3>🛒 إنشاء فاتورة مشتريات (بن خام بالكيلو / عبوات فارغة / استيكرات)</h3>' +
          '<div class="form-grid">' +
            '<div><label>المورد</label><select id="pur-sup">' + supOpts + '</select></div>' +
            '<div><label>التاريخ</label><input id="pur-date" type="date" value="' + (new Date().toISOString().slice(0,10)) + '" /></div>' +
            '<div><label>الخصم (ج.م)</label><input id="pur-disc" type="number" step="0.01" value="0" /></div>' +
            '<div><label>المدفوع (ج.م)</label><input id="pur-paid" type="number" step="0.01" value="' + (curPurSub/100).toFixed(2) + '" /></div>' +
          '</div>' +
          '<div class="form-grid" style="background:var(--card2);padding:12px;border-radius:10px;">' +
            '<div><label>نوع المشتريات</label><select id="pi-type" onchange="onPurTypeChange()">' +
              '<option value="raw_coffee">☕ بن خام (الكمية بالكيلو والسعر للكيلو)</option>' +
              '<option value="packaging">📦 عبوات فارغة (بالعدد)</option>' +
              '<option value="sticker">🏷️ استيكرات خاصة بتوليفة (بالعدد)</option>' +
            '</select></div>' +
            '<div id="pi-prod-wrap"><label>🔍 ابحث واختر الصنف / التوليفة</label>' + renderProductCombo('pi-pid', 'onPurProductChange', null, 'cost') + '</div>' +
            '<div id="pi-pkg-wrap" style="display:none;"><label>حجم العبوة (ربع / ثمن)</label><select id="pi-pkid">' + pkOpts2 + '</select></div>' +
            '<div><label id="pi-qty-lbl">الكمية بالكيلو (مثال: 1 أو 1.25 أو 1.5)</label><input id="pi-qty" type="number" step="0.01" placeholder="مثال: 1 أو 1.25 أو 1.5" /></div>' +
            '<div><label id="pi-cost-lbl">سعر تكلفة الكيلو (ج.م)</label><input id="pi-cost" type="number" step="0.01" placeholder="مثال: 480" /></div>' +
          '</div>' +
          '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px;">' +
            '<button class="btn btn-sec" id="btn-add-pur-item" onclick="addPurItem()">' + (S.editingPurIdx >= 0 ? '💾 حفظ تعديل الصنف' : '+ إضافة الصنف للفاتورة') + '</button>' +
            (S.editingPurIdx >= 0 ? '<button class="btn btn-del btn-sm" onclick="cancelEditPurItem()">إلغاء التعديل</button>' : '') +
            '<button class="btn" onclick="savePurchase(false)">💾 حفظ وترحيل المشتريات للمخزون</button>' +
            '<button class="btn" style="background:var(--ok);" onclick="savePurchase(true)">🖨️ حفظ وطباعة المشتريات (ورق عادي A4)</button>' +
          '</div>' +
          '<div class="tbl-wrap" style="margin-top:10px;"><table>' +
            '<thead><tr><th>اسم الصنف / البند</th><th>الكمية (بالكيلو / العدد)</th><th>سعر الكيلو / الوحدة</th><th>الإجمالي</th><th>تعديل / حذف</th></tr></thead>' +
            '<tbody>' + (S.purItems.length ? S.purItems.map(function(x, idx) {
              var qtyText = x.item_type === 'raw_coffee' ? (x.qty_kg + ' كجم') : (x.quantity + ' وحدة');
              return '<tr>' +
                '<td><strong>' + (x.product_name || 'صنف') + '</strong></td>' +
                '<td><strong>' + qtyText + '</strong></td>' +
                '<td>' + egp(x.unit_cost_piasters) + '</td>' +
                '<td style="color:var(--gold);font-weight:800;">' + egp(x.line_total) + '</td>' +
                '<td>' +
                  '<button class="btn btn-sec btn-sm" onclick="editPurItem(' + idx + ')">✏️ تعديل</button> ' +
                  '<button class="btn btn-del btn-sm" onclick="removePurItem(' + idx + ')">🗑️ حذف</button>' +
                '</td>' +
              '</tr>';
            }).join('') : '<tr><td colspan="5" style="text-align:center;color:var(--muted);">لم يتم إضافة أصناف للفاتورة بعد</td></tr>') + '</tbody>' +
            (S.purItems.length ? ('<tfoot><tr><td colspan="3">إجمالي بنود الفاتورة (' + S.purItems.length + ' صنف)</td><td colspan="2">' + egp(curPurSub) + '</td></tr></tfoot>') : '') +
          '</table></div>' +
        '</div>' +
        '<div class="panel"><h3>سجل فواتير المشتريات (أول فاتورتين)</h3><div class="tbl-wrap"><table><thead><tr><th>الرقم</th><th>التاريخ</th><th>المورد</th><th>الإجمالي</th><th>المدفوع</th><th>طباعة / تعديل / حذف</th></tr></thead><tbody>' + purLim.tbody + '</tbody><tfoot><tr><td colspan="3">إجمالي المشتريات</td><td colspan="3">' + egp(totPur) + '</td></tr></tfoot></table>' + purLim.moreBtn + '</div></div>';
      }

      // 5. PRODUCTION
      if (t === 'production') {
        var prdLim = limitRows(S.production, 'prd_list', function(b) {
          return '<tr>' +
            '<td>' + b.batch_number + '</td><td>' + b.production_date + '</td>' +
            '<td><strong>☕ ' + b.product_name + '</strong></td>' +
            '<td><strong>' + fmtWeight(b.raw_coffee_used_grams || b.raw_coffee_grams) + '</strong></td>' +
            '<td>' + egp(b.total_cost_piasters) + '<br/><small style="color:var(--muted)">بن: ' + egp(b.raw_coffee_cost_piasters) + ' | عبوات: ' + egp(b.packaging_cost_piasters) + ' | استيكر: ' + egp(b.sticker_cost_piasters) + '</small></td>' +
            '<td>' +
              '<button class="btn btn-sm" onclick="printProduction(' + b.id + ')">🖨️ طباعة A4</button> ' +
              '<button class="btn btn-sec btn-sm" onclick="editSavedProduction(' + b.id + ')">✏️ تعديل</button> ' +
              '<button class="btn btn-del btn-sm" onclick="deleteProduction(' + b.id + ')">🗑️ حذف وعكس المخزون</button>' +
            '</td>' +
          '</tr>';
        }, 6, 2);
        var totPrdWeight = S.production.reduce(function(s, b) { return s + Number(b.total_finished_weight_grams || b.raw_coffee_used_grams || b.raw_coffee_grams || 0); }, 0);

        var allStickers = S.inventory.stickers || [];
        var stkOpts250 = '<option value="none">🚫 بدون استيكر (تعبئة بدون خصم استيكر وبدون تكلفة استيكر)</option>' +
          allStickers.map(function(s) {
            return '<option value="' + s.id + '">🏷️ ' + s.product_name + ' - ' + s.packaging_name + ' (المتاح: ' + s.quantity_units + ' استيكر | ' + egp(s.average_cost_per_unit_piasters) + ')</option>';
          }).join('');
        var stkOpts125 = stkOpts250;

        return '<div class="panel" style="border:2px solid var(--gold);"><h3>⚙️ تعبئة وإنتاج القهوة بالكيلو (اختر الاستيكر أو اختر "بدون استيكر" عادي)</h3>' +
          '<div class="form-grid">' +
            '<div><label>🔍 ابحث واختر التوليفة / الصنف</label>' + renderProductCombo('prd-pid', 'onProdProductChange', null, 'cost') + '</div>' +
            '<div><label>الوزن المراد تعبئته بالكيلو (مثال: 1 أو 1.25 أو 1.5)</label><input id="prd-raw-kg" type="number" step="0.125" placeholder="مثال: 1.25" oninput="onProdWeightKgInput()" /></div>' +
            '<div><label>كام برطمان ربع كيلو (0.25 كجم)؟</label><input id="prd-q250" type="number" value="0" oninput="calcProdPreview()" /></div>' +
            '<div><label>🏷️ الاستيكر المستخدم لعبوة الربع (أو بدون استيكر)</label><select id="prd-stk250" onchange="calcProdPreview()">' + stkOpts250 + '</select></div>' +
            '<div><label>كام برطمان ثمن كيلو (0.125 كجم)؟</label><input id="prd-q125" type="number" value="0" oninput="calcProdPreview()" /></div>' +
            '<div><label>🏷️ الاستيكر المستخدم لعبوة الثمن (أو بدون استيكر)</label><select id="prd-stk125" onchange="calcProdPreview()">' + stkOpts125 + '</select></div>' +
            '<div><label>سعر تكلفة كيلو البن الخام (ج.م)</label><input id="prd-kgcost" type="number" step="0.01" placeholder="تلقائي من مخزون الخام" oninput="calcProdPreview()" /></div>' +
            '<div><label>التاريخ</label><input id="prd-date" type="date" value="' + (new Date().toISOString().slice(0,10)) + '" /></div>' +
          '</div>' +
          '<div id="prd-stock-status" style="background:var(--card2);padding:12px;border-radius:10px;margin-bottom:10px;font-weight:700;font-size:13px;line-height:1.8;border-right:4px solid var(--gold);"></div>' +
          '<div id="prd-preview" style="background:var(--card);border:1px dashed var(--gold);padding:10px;border-radius:10px;margin-bottom:12px;font-weight:800;color:var(--gold);font-size:13px;"></div>' +
          '<button class="btn" onclick="saveProduction(false)">💾 تنفيذ التعبئة (خصم من الخام والعبوات والاستيكر إن وُجد)</button> ' +
          '<button class="btn" style="background:var(--ok);" onclick="saveProduction(true)">🖨️ تنفيذ وطباعة إذن الإنتاج (ورق عادي A4)</button>' +
        '</div>' +
        '<div class="panel"><h3>سجل دفعات الإنتاج والتعبئة (أول دفعتين)</h3><div class="tbl-wrap"><table><thead><tr><th>رقم الدفعة</th><th>التاريخ</th><th>اسم الصنف</th><th>الوزن المعبأ (كجم)</th><th>التكلفة الكلية النهائية (بن + عبوات + استيكر)</th><th>طباعة / تعديل / حذف</th></tr></thead><tbody>' + prdLim.tbody + '</tbody><tfoot><tr><td colspan="3">إجمالي الأوزان المعبأة</td><td colspan="3">' + fmtWeight(totPrdWeight) + '</td></tr></tfoot></table>' + prdLim.moreBtn + '</div></div>';
      }

      // 6. SALES & INVOICES
      if (t === 'sales') {
        var cOpts = '<option value="">عميل نقدي مباشر</option>' + S.customers.map(function(c) { return '<option value="' + c.id + '">' + c.name + ' (عليه: ' + egp(c.balance) + ')</option>'; }).join('');
        var sub = S.saleItems.reduce(function(a, b) { return a + b.line_total_piasters; }, 0);
        var totSaleCost = S.saleItems.reduce(function(a, b) { return a + ((b.unit_cost_piasters || 0) * b.quantity_units); }, 0);
        var curSaleMargin = sub - totSaleCost;
        var totSaleWeight = S.saleItems.reduce(function(a, b) { return a + b.weight_grams; }, 0);

        var salesLim = limitRows(S.sales, 'sales_list', function(s) {
          var invCost = Number(s.total_cost_piasters || 0);
          var invMargin = Number(s.total_piasters || 0) - invCost;
          return '<tr>' +
            '<td>' + s.invoice_number + '</td><td>' + s.invoice_date + '</td><td>' + s.customer_name + '</td>' +
            '<td><strong>' + egp(s.total_piasters) + '</strong></td>' +
            '<td style="color:var(--muted);font-weight:700;">' + egp(invCost) + '</td>' +
            '<td style="color:var(--ok);font-weight:800;">' + egp(invMargin) + '</td>' +
            '<td>' + egp(s.paid_piasters) + '</td><td>' + egp(s.total_piasters-s.paid_piasters) + '</td>' +
            '<td style="display:flex;gap:4px;flex-wrap:wrap;">' +
              '<button class="btn btn-sm" style="background:var(--ok);" onclick="directBluetoothPrintSale(' + s.id + ')">🖨️ بلوتوث مباشر</button>' +
              '<button class="btn btn-sm" style="background:#7c3aed;color:#fff;" onclick="printViaRawBtBridge(' + s.id + ')">📲 RawBT</button>' +
              '<button class="btn btn-sm" style="background:#0284c7;color:#fff;" onclick="shareInvoiceToPrinterApp(' + s.id + ')">📤 إرسال لتطبيق الطابعة</button>' +
              '<button class="btn btn-sm" onclick="printNormalThermalInvoice(' + s.id + ')">🖨️ حراري عادي</button>' +
              '<button class="btn btn-sec btn-sm" onclick="downloadInvoiceImage(' + s.id + ')">🖼️ صورة</button>' +
              '<button class="btn btn-sec btn-sm" onclick="editSavedSale(' + s.id + ')">✏️ تعديل</button>' +
              '<button class="btn btn-del btn-sm" onclick="deleteSale(' + s.id + ')">🗑️ حذف</button>' +
            '</td>' +
          '</tr>';
        }, 9, 2);

        var allSalesTotal = S.sales.reduce(function(s, x) { return s + Number(x.total_piasters || 0); }, 0);
        var allSalesCost = S.sales.reduce(function(s, x) { return s + Number(x.total_cost_piasters || 0); }, 0);
        var allSalesGrossMargin = allSalesTotal - allSalesCost;
        var dashKpis = (S.dash && S.dash.kpis) || {};
        var totalExpAll = Number(dashKpis.total_expenses_all || 0);
        var netProfitAfterExp = Number(dashKpis.net_profit !== undefined ? dashKpis.net_profit : (allSalesGrossMargin - totalExpAll));

        return '<div class="grid">' +
          '<div class="kpi"><div class="lbl">إجمالي المبيعات</div><div class="val">' + egp(allSalesTotal) + '</div></div>' +
          '<div class="kpi"><div class="lbl">تكلفة المنتج النهائي المباع (بن+عبوة+استيكر)</div><div class="val" style="color:var(--muted);">' + egp(allSalesCost) + '</div></div>' +
          '<div class="kpi" style="border-right-color:var(--ok);"><div class="lbl">📈 هامش الربح (المبيعات - تكلفة المنتج النهائي)</div><div class="val" style="color:var(--ok);">' + egp(allSalesGrossMargin) + '</div></div>' +
          '<div class="kpi"><div class="lbl">إجمالي المصروفات المخصومة</div><div class="val" style="color:var(--err);">' + egp(totalExpAll) + '</div></div>' +
          '<div class="kpi" style="border-right-color:var(--ok);background:var(--card2);"><div class="lbl">💎 صافي الربح بعد خصم المصاريف</div><div class="val" style="color:var(--ok);font-size:19px;">' + egp(netProfitAfterExp) + '</div></div>' +
        '</div>' +

        '<div class="panel" style="border:2px solid var(--gold);"><h3>🧾 إنشاء فاتورة مبيعات (يظهر لك سعر التكلفة النهائي للمنتج شاملة البن والعبوة والاستيكر + هامش الربح ولا يُطبع في الفاتورة)</h3>' +
          '<div class="form-grid">' +
            '<div><label>العميل المسجل</label><select id="s-cid" onchange="onSaleCustomerSelect()">' + cOpts + '</select></div>' +
            '<div><label>أو اسم عميل جديد</label><input id="s-cname" placeholder="اكتب اسم العميل لو جديد" /></div>' +
            '<div><label>هاتف العميل</label><input id="s-cphone" placeholder="رقم الهاتف (اختياري)" /></div>' +
            '<div><label>📍 العنوان (يُطبع في الفاتورة)</label><input id="s-caddr" placeholder="عنوان العميل / التوصيل..." /></div>' +
            '<div><label>التاريخ</label><input id="s-date" type="date" value="' + (new Date().toISOString().slice(0,10)) + '" /></div>' +
          '</div>' +

          '<div style="background:var(--card2);padding:12px;border-radius:12px;margin-bottom:12px;">' +
            '<div class="form-grid">' +
              '<div><label>🔍 ابحث واختر الصنف</label>' + renderProductCombo('si-pid', 'onSaleProductChange') + '</div>' +
              '<div><label>الوزن المطلوب بالكيلو (مثال: 1 أو 1.25 أو 1.5 أو 0.25)</label><input id="si-weight-kg" type="number" step="0.125" placeholder="مثال: 1 أو 1.25 أو 1.5" oninput="onSaleWeightInput()" /></div>' +
              '<div><label>خارج كام برطمان ربع (0.25 كجم)؟</label><input id="si-q250" type="number" value="0" oninput="onSaleJarsInput()" /></div>' +
              '<div><label>خارج كام برطمان ثمن (0.125 كجم)؟</label><input id="si-q125" type="number" value="0" oninput="onSaleJarsInput()" /></div>' +
              '<div><label>شريحة السعر</label><select id="si-tier" onchange="onSaleProductChange()"><option value="1">سعر البيع الأول</option><option value="2">سعر البيع الثاني</option></select></div>' +
              '<div><label style="color:var(--ok);">📈 نسبة الربح (% فوق التكلفة النهائية — تحسب السعر دايركت)</label><input id="si-profit-pct" type="number" step="0.1" placeholder="اكتب نسبة % يحسب السعر دايركت" oninput="onSaleProfitPctInput()" style="border:2px solid var(--ok);" /></div>' +
              '<div><label>💵 سعر بيع الكيلو (ج.م) — محسوب دايركت</label><input id="si-kgprice" type="number" step="0.01" oninput="onSaleKgPriceManualInput()" /></div>' +
              '<div><label>🏺 سعر بيع برطمان الربع 250 جم (ج.م)</label><input id="si-q250price" type="number" step="0.01" oninput="onSaleQuarterPriceManualInput()" /></div>' +
            '</div>' +
            '<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px;align-items:center;">' +
              '<span style="font-size:12px;font-weight:800;color:var(--muted);">نسبة ربح سريعة في الفاتورة:</span>' +
              '<button class="btn btn-sec btn-sm" onclick="setSaleQuickPct(15)">+15%</button>' +
              '<button class="btn btn-sec btn-sm" onclick="setSaleQuickPct(20)">+20%</button>' +
              '<button class="btn btn-sec btn-sm" onclick="setSaleQuickPct(25)">+25%</button>' +
              '<button class="btn btn-sec btn-sm" onclick="setSaleQuickPct(30)">+30%</button>' +
              '<button class="btn btn-sec btn-sm" onclick="setSaleQuickPct(35)">+35%</button>' +
              '<button class="btn btn-sm" style="background:#d97706;color:#fff;" onclick="revertSaleInputToSavedProductPrice()">↩️ رجوع لآخر سعر للصنف قبل التعديل</button>' +
              '<button class="btn btn-sec btn-sm" onclick="loadTab(\'products\')">⚙️ تسعير كل المنتجات مرة واحدة بنسبة %</button>' +
            '</div>' +
            '<div id="si-stock-info" style="font-size:13px;font-weight:700;color:var(--ok);margin-bottom:6px;"></div>' +
            '<div id="si-cost-info" style="font-size:13px;font-weight:800;color:var(--gold);background:var(--card);padding:10px 12px;border-radius:8px;border-right:4px solid var(--gold);margin-bottom:10px;line-height:1.7;"></div>' +
            '<div style="display:flex;gap:8px;">' +
              '<button class="btn btn-sec" onclick="addSaleWeightItem()">' + (S.editingSaleIdx >= 0 ? '💾 حفظ تعديل الصنف' : '+ إضافة الصنف والوزن للفاتورة') + '</button>' +
              (S.editingSaleIdx >= 0 ? '<button class="btn btn-del btn-sm" onclick="cancelEditSaleItem()">إلغاء التعديل</button>' : '') +
            '</div>' +
          '</div>' +

          '<div class="tbl-wrap" style="margin:10px 0;"><table>' +
            '<thead><tr><th>اسم الصنف</th><th>البرطمانات المخصومة</th><th>الوزن بالكيلو</th><th>التكلفة النهائية للبرطمان (شامل العبوة والاستيكر - لا تُطبع)</th><th>سعر البيع</th><th>الإجمالي</th><th>هامش ربح البند</th><th>تعديل / حذف</th></tr></thead>' +
            '<tbody>' + (S.saleItems.map(function(x, idx) {
              var totItemFinalCost = (x.unit_cost_piasters || 0) * x.quantity_units;
              var itemMargin = x.line_total_piasters - totItemFinalCost;
              return '<tr>' +
                '<td><strong>☕ ' + x.name + '</strong></td>' +
                '<td>' + x.pkg + ' (' + x.quantity_units + ')</td>' +
                '<td><strong>' + fmtWeight(x.weight_grams) + '</strong></td>' +
                '<td style="color:var(--muted);font-weight:700;">' + egp(x.unit_cost_piasters || 0) + ' للبرطمان<br/><small>(إجمالي التكلفة النهائية: ' + egp(totItemFinalCost) + ')</small></td>' +
                '<td>' + egp(x.unit_sale_price_piasters) + ' للبرطمان<br/><small>(الكيلو: ' + egp(x.kg_price_piasters) + ')</small></td>' +
                '<td style="color:var(--gold);font-weight:800;">' + egp(x.line_total_piasters) + '</td>' +
                '<td style="color:var(--ok);font-weight:800;">' + egp(itemMargin) + '</td>' +
                '<td>' +
                  '<button class="btn btn-sec btn-sm" onclick="editSaleItem(' + idx + ')">✏️ تعديل</button> ' +
                  '<button class="btn btn-del btn-sm" onclick="removeSaleItem(' + idx + ')">🗑️ حذف</button>' +
                '</td>' +
              '</tr>';
            }).join('') || '<tr><td colspan="8" style="text-align:center;">لم يتم إضافة أصناف بعد</td></tr>') + '</tbody>' +
            '<tfoot><tr><td colspan="2">إجمالي الفاتورة الحالية</td><td>' + fmtWeight(totSaleWeight) + '</td><td>إجمالي التكلفة النهائية: ' + egp(totSaleCost) + '</td><td>-</td><td>إجمالي البيع: ' + egp(sub) + '</td><td colspan="2" style="color:var(--ok);">هامش ربح الفاتورة: ' + egp(curSaleMargin) + '</td></tr></tfoot>' +
          '</table></div>' +

          '<div class="form-grid">' +
            '<div><label>الخصم (ج.م)</label><input id="s-disc" type="number" step="0.01" value="0" /></div>' +
            '<div><label>المبلغ المدفوع (ج.م)</label><input id="s-paid" type="number" step="0.01" value="' + (sub/100).toFixed(2) + '" /></div>' +
            '<div><label>ملاحظات</label><input id="s-notes" /></div>' +
          '</div>' +
          '<div style="display:flex;gap:8px;flex-wrap:wrap;">' +
            '<button class="btn" style="background:var(--ok);" onclick="saveSale(true, true)">🖨️ حفظ وطباعة بلوتوث مباشر</button>' +
            '<button class="btn" style="background:#7c3aed;color:#fff;" onclick="saveSale(true, \'rawbt\')">📲 حفظ وطباعة عبر RawBT</button>' +
            '<button class="btn" style="background:#0284c7;color:#fff;" onclick="saveSale(true, \'share\')">📤 حفظ وإرسال لتطبيق الطابعة</button>' +
            '<button class="btn" onclick="saveSale(true, false)">🖨️ حفظ وطباعة حراري عادي</button>' +
            '<button class="btn btn-sec" onclick="saveSale(true, \'image\')">🖼️ حفظ وصورة للفاتورة</button>' +
            '<button class="btn btn-sec" onclick="saveSale(false, false)">💾 حفظ الفاتورة فقط</button>' +
          '</div>' +
        '</div>' +

        '<div class="panel"><h3>سجل فواتير المبيعات (يعرض أول فاتورتين فقط)</h3>' +
          '<div class="tbl-wrap"><table>' +
            '<thead><tr><th>رقم الفاتورة</th><th>التاريخ</th><th>العميل</th><th>الإجمالي</th><th>التكلفة النهائية</th><th>هامش الربح</th><th>المدفوع</th><th>المتبقي</th><th>طباعة / صورة / تعديل / حذف</th></tr></thead>' +
            '<tbody>' + salesLim.tbody + '</tbody>' +
            '<tfoot><tr><td colspan="3">الإجماليات الكلية</td><td>' + egp(allSalesTotal) + '</td><td>' + egp(allSalesCost) + '</td><td style="color:var(--ok);">هامش الربح: ' + egp(allSalesGrossMargin) + '</td><td colspan="3">صافي الربح بعد المصاريف: ' + egp(netProfitAfterExp) + '</td></tr></tfoot>' +
          '</table>' + salesLim.moreBtn + '</div>' +
        '</div>';
      }

      // 7. CUSTOMERS
      if (t === 'customers') {
        var ec = S.editingCustomer;
        var allCust = S.customers || [];
        var custLim = limitRows(allCust, 'cust_dedicated_list', function(c) {
          var cleanName = String(c.name || '').replace(/'/g, '');
          return '<tr>' +
            '<td><strong>👤 ' + c.name + '</strong></td>' +
            '<td>' + (c.phone || '-') + '</td>' +
            '<td>' + (c.address || '-') + '</td>' +
            '<td>' + (c.notes || '-') + '</td>' +
            '<td>' + egp(c.total_sales) + '</td>' +
            '<td style="color:var(--ok);font-weight:700;">' + egp(c.total_paid) + '</td>' +
            '<td style="font-weight:800;color:' + (c.balance>0?'var(--err)':'var(--ok)') + ';">' + egp(c.balance) + '</td>' +
            '<td style="display:flex;gap:4px;flex-wrap:wrap;">' +
              '<button class="btn btn-sec btn-sm" onclick="startEditCustomerById(' + c.id + ')">✏️ تعديل</button>' +
              '<button class="btn btn-del btn-sm" onclick="deleteCustomer(' + c.id + ')">🗑️ حذف</button>' +
              '<button class="btn btn-sec btn-sm" onclick="viewDebtorStatement(' + c.id + ')">📄 كشف A4</button>' +
              '<button class="btn btn-sm" onclick="quickAddMoreDebt(' + c.id + ',\'' + cleanName + '\')">➕ تسجيل مبلغ</button>' +
            '</td>' +
          '</tr>';
        }, 8, 5);

        return '<div class="panel" style="border:2px solid var(--gold);">' +
          '<h3>' + (ec ? ('✏️ تعديل بيانات العميل: ' + ec.name) : '➕ إضافة عميل جديد') + '</h3>' +
          '<div class="form-grid">' +
            '<div><label>اسم العميل</label><input id="c-name" value="' + (ec ? (ec.name||'') : '') + '" placeholder="اكتب اسم العميل..." /></div>' +
            '<div><label>رقم الهاتف</label><input id="c-phone" value="' + (ec ? (ec.phone||'') : '') + '" placeholder="010..." /></div>' +
            '<div><label>العنوان</label><input id="c-addr" value="' + (ec ? (ec.address||'') : '') + '" placeholder="العنوان..." /></div>' +
            '<div><label>ملاحظات</label><input id="c-notes" value="' + (ec ? (ec.notes||'') : '') + '" placeholder="ملاحظات عن العميل..." /></div>' +
          '</div>' +
          '<div style="display:flex;gap:8px;">' +
            '<button class="btn" onclick="saveCustomerForm()">' + (ec ? '💾 حفظ تعديلات العميل' : '+ حفظ العميل الجديد') + '</button>' +
            (ec ? '<button class="btn btn-sec" onclick="S.editingCustomer=null;renderMainOnly()">إلغاء التعديل</button>' : '') +
          '</div>' +
        '</div>' +
        '<div class="panel">' +
          '<h3>👥 قائمة العملاء المسجلين (' + allCust.length + ' عميل — صلاحية تعديل وحذف كاملة)</h3>' +
          '<div class="tbl-wrap"><table>' +
            '<thead><tr><th>اسم العميل</th><th>الهاتف</th><th>العنوان</th><th>ملاحظات</th><th>إجمالي معاملاته</th><th>المسدد</th><th>المتبقي عليه</th><th>تعديل / حذف / كشف</th></tr></thead>' +
            '<tbody>' + custLim.tbody + '</tbody>' +
          '</table>' + custLim.moreBtn + '</div>' +
        '</div>';
      }

      // 8. DEBTORS
      if (t === 'debtors') {
        var activeDebtors = S.customers.filter(function(c) { return Number(c.balance) > 0; });
        var allCustomers = S.customers;
        var totDebt = activeDebtors.reduce(function(s, c) { return s + Number(c.balance || 0); }, 0);
        var totAllSales = allCustomers.reduce(function(s, c) { return s + Number(c.total_sales || 0); }, 0);
        var totAllPaid = allCustomers.reduce(function(s, c) { return s + Number(c.total_paid || 0); }, 0);

        var debLim2 = limitRows(activeDebtors, 'debtors_active', function(c) {
          var cleanName = String(c.name || '').replace(/'/g, '');
          return '<tr>' +
            '<td><strong>👤 ' + c.name + '</strong></td>' +
            '<td>' + (c.phone || '-') + '</td>' +
            '<td>' + egp(c.total_sales) + '</td>' +
            '<td style="color:var(--ok);font-weight:700;">' + egp(c.total_paid) + '</td>' +
            '<td style="color:var(--err);font-weight:800;font-size:15px;">' + egp(c.balance) + '</td>' +
            '<td>' + (c.last_note || '-') + '</td>' +
            '<td style="display:flex;gap:4px;flex-wrap:wrap;">' +
              '<button class="btn btn-sm" style="background:var(--ok);" onclick="quickCollectDebt(' + c.id + ',\'' + cleanName + '\',' + c.balance + ')">💵 سدد دفعة</button>' +
              '<button class="btn btn-sec btn-sm" onclick="quickAddMoreDebt(' + c.id + ',\'' + cleanName + '\')">➕ زيادة مبلغ عليه</button>' +
              '<button class="btn btn-sec btn-sm" onclick="viewDebtorStatement(' + c.id + ')">📄 كشف حساب A4</button>' +
              '<button class="btn btn-del btn-sm" onclick="deleteCustomer(' + c.id + ')">🗑️ حذف</button>' +
            '</td>' +
          '</tr>';
        }, 7, 2);

        var cOpts2 = S.customers.map(function(c) { return '<option value="' + c.id + '">' + c.name + ' (عليه: ' + egp(c.balance) + ')</option>'; }).join('');

        return '<div class="grid">' +
          '<div class="kpi" style="border-right-color:var(--err);"><div class="lbl">إجمالي المبالغ المستحقة لنا (المدينون)</div><div class="val" style="color:var(--err);">' + egp(totDebt) + '</div></div>' +
          '<div class="kpi"><div class="lbl">عدد المدينين الحاليين</div><div class="val">' + activeDebtors.length + ' شخص</div></div>' +
          '<div class="kpi"><div class="lbl">إجمالي المديونيات المسجلة</div><div class="val">' + egp(totAllSales) + '</div></div>' +
          '<div class="kpi"><div class="lbl">إجمالي ما تم تحصيله</div><div class="val" style="color:var(--ok);">' + egp(totAllPaid) + '</div></div>' +
        '</div>' +

        '<div class="panel" style="border:2px solid var(--gold);">' +
          '<h3>📝 تسجيل مبلغ مباشر باسم شخص (مبلغ كذا على فلان)</h3>' +
          '<div class="form-grid">' +
            '<div><label>👤 اسم الشخص (فلان) — اكتب اسمًا جديدًا أو اختر بالبحث</label>' + renderPersonCombo('dd-person') + '</div>' +
            '<div><label>💰 المبلغ اللي عليه (ج.م)</label><input id="dd-amount" type="number" step="0.01" placeholder="مثال: 350" /></div>' +
            '<div><label>💵 المدفوع منه الآن (اختياري - افتراضي 0)</label><input id="dd-paid" type="number" step="0.01" value="0" /></div>' +
            '<div><label>📋 البيان / السبب</label><input id="dd-notes" placeholder="مثال: حساب قهوة آجل / رصيد سابق" /></div>' +
            '<div><label>📞 رقم الهاتف (اختياري)</label><input id="dd-person-phone" placeholder="010..." /></div>' +
            '<div><label>📅 التاريخ</label><input id="dd-date" type="date" value="' + (new Date().toISOString().slice(0,10)) + '" /></div>' +
          '</div>' +
          '<button class="btn" onclick="saveDirectDebt()">💾 تسجيل المبلغ على الاسم فورًا</button>' +
        '</div>' +

        '<div class="panel">' +
          '<h3>💰 كشف المدينين الحاليين (الناس اللي عليها فلوس — يعرض أول اسمين)</h3>' +
          '<div class="tbl-wrap"><table>' +
            '<thead><tr><th>اسم المدين</th><th>الهاتف</th><th>إجمالي المسجل عليه</th><th>المسدد</th><th>الصافي المتبقي عليه</th><th>آخر بيان</th><th>إجراءات سريعة</th></tr></thead>' +
            '<tbody>' + debLim2.tbody + '</tbody>' +
            '<tfoot><tr><td colspan="4">إجمالي المديونيات المتبقية لنا (' + activeDebtors.length + ' مدين)</td><td colspan="3">' + egp(totDebt) + '</td></tr></tfoot>' +
          '</table>' + debLim2.moreBtn + '</div>' +
        '</div>' +

        '<div class="panel"><h3>💵 تسجيل تحصيل دفعة من مدين / عميل</h3>' +
          '<div class="form-grid">' +
            '<div><label>اختر الاسم</label><select id="cp-cid">' + cOpts2 + '</select></div>' +
            '<div><label>المبلغ المحصل (ج.م)</label><input id="cp-amt" type="number" step="0.01" /></div>' +
            '<div><label>ملاحظات</label><input id="cp-notes" placeholder="سداد جزء من الحساب" /></div>' +
          '</div>' +
          '<button class="btn" style="background:var(--ok);" onclick="saveCustPayment(false)">💵 حفظ التحصيل وإيداعه بالخزنة</button> ' +
          '<button class="btn" onclick="saveCustPayment(true)">🖨️ حفظ وطباعة إيصال التحصيل (ورق عادي A4)</button>' +
        '</div>';
      }

      // 9. SUPPLIERS
      if (t === 'suppliers') {
        var sLim = limitRows(S.suppliers, 'sup_list', function(s) {
          return '<tr><td>' + s.name + '</td><td>' + s.phone + '</td><td>' + egp(s.total_purchases) + '</td><td>' + egp(s.total_paid) + '</td><td>' + egp(s.balance) + '</td><td><button class="btn btn-del btn-sm" onclick="deleteSupplier(' + s.id + ')">🗑️ حذف</button></td></tr>';
        }, 6, 2);
        var totSup = S.suppliers.reduce(function(s, x) { return s + Number(x.balance || 0); }, 0);
        return '<div class="panel"><h3>إضافة مورد</h3><div class="form-grid"><div><label>اسم المورد</label><input id="sup-name" /></div><div><label>الهاتف</label><input id="sup-phone" /></div><div><label>العنوان</label><input id="sup-addr" /></div></div><button class="btn" onclick="saveSupplier()">حفظ المورد</button></div>' +
        '<div class="panel"><h3>حسابات الموردين (أول موردين)</h3><div class="tbl-wrap"><table><thead><tr><th>المورد</th><th>الهاتف</th><th>المشتريات</th><th>المدفوع</th><th>المتبقي</th><th>حذف</th></tr></thead><tbody>' + sLim.tbody + '</tbody><tfoot><tr><td colspan="4">إجمالي المستحق للموردين</td><td colspan="2">' + egp(totSup) + '</td></tr></tfoot></table>' + sLim.moreBtn + '</div></div>';
      }

      // 10. EXPENSES
      if (t === 'expenses') {
        var catOpts = S.categories.map(function(c) { return '<option value="' + c.id + '">' + c.name + '</option>'; }).join('');
        var exLim = limitRows(S.expenses, 'exp_list', function(e) {
          return '<tr><td>' + e.expense_date + '</td><td>' + e.category_name + '</td><td>' + e.description + '</td><td>' + egp(e.amount_piasters) + '</td><td><button class="btn btn-sm" onclick="printExpense(' + e.id + ')">🖨️ طباعة A4</button> <button class="btn btn-del btn-sm" onclick="deleteExpense(' + e.id + ')">🗑️ حذف</button></td></tr>';
        }, 5, 2);
        var totExp = S.expenses.reduce(function(s, e) { return s + Number(e.amount_piasters || 0); }, 0);
        return '<div class="panel"><h3>تسجيل مصروف (يُخصم تلقائيًا لحساب صافي الربح النهائي)</h3><div class="form-grid"><div><label>التصنيف</label><select id="ex-cat">' + catOpts + '</select></div><div><label>التاريخ</label><input id="ex-date" type="date" value="' + (new Date().toISOString().slice(0,10)) + '" /></div><div><label>المبلغ (ج.م)</label><input id="ex-amt" type="number" step="0.01" /></div><div><label>البيان</label><input id="ex-desc" /></div></div><button class="btn" onclick="saveExpense(false)">حفظ المصروف</button> <button class="btn" style="background:var(--ok);" onclick="saveExpense(true)">🖨️ حفظ وطباعة سند المصروف (A4)</button></div>' +
        '<div class="panel"><h3>سجل المصروفات (أول مصروفين)</h3><div class="tbl-wrap"><table><thead><tr><th>التاريخ</th><th>التصنيف</th><th>الوصف</th><th>المبلغ</th><th>طباعة / حذف</th></tr></thead><tbody>' + exLim.tbody + '</tbody><tfoot><tr><td colspan="3">إجمالي المصروفات</td><td colspan="2">' + egp(totExp) + '</td></tr></tfoot></table>' + exLim.moreBtn + '</div></div>';
      }

      // 11. CASHBOOK
      if (t === 'cash') {
        var sm = S.cash.summary || {};
        var cmLim = limitRows(S.cash.movements, 'cash_list', function(m) {
          return '<tr><td>' + m.movement_date + '</td><td>' + m.movement_type + '</td><td>' + (m.direction==='in'?'مقبوضات (+)':'مدفوعات (-)') + '</td><td>' + m.description + '</td><td>' + egp(m.amount_piasters) + '</td><td><button class="btn btn-sm" onclick="printCashMovement(' + m.id + ')">🖨️ A4</button> <button class="btn btn-del btn-sm" onclick="deleteCashMove(' + m.id + ')">🗑️</button></td></tr>';
        }, 6, 2);
        return '<div class="grid">' +
          '<div class="kpi"><div class="lbl">رصيد الافتتاح</div><div class="val">' + egp(sm.opening) + '</div></div>' +
          '<div class="kpi"><div class="lbl">إجمالي المقبوضات</div><div class="val">' + egp(sm.receipts) + '</div></div>' +
          '<div class="kpi"><div class="lbl">إجمالي المدفوعات</div><div class="val">' + egp(sm.payments) + '</div></div>' +
          '<div class="kpi"><div class="lbl">رصيد الخزنة الفعلي</div><div class="val">' + egp(sm.closing) + '</div></div>' +
        '</div>' +
        '<div class="panel"><h3>إضافة حركة خزنة</h3><div class="form-grid"><div><label>النوع</label><select id="cm-type"><option value="opening">رصيد افتتاحي</option><option value="deposit">إيداع</option><option value="withdrawal">مسحوبات</option><option value="adjustment">تسوية</option></select></div><div><label>الاتجاه</label><select id="cm-dir"><option value="in">داخل (+)</option><option value="out">خارج (-)</option></select></div><div><label>المبلغ (ج.م)</label><input id="cm-amt" type="number" step="0.01" /></div><div><label>البيان</label><input id="cm-desc" /></div></div><button class="btn" onclick="saveCashMove(false)">حفظ الحركة</button> <button class="btn" style="background:var(--ok);" onclick="saveCashMove(true)">🖨️ حفظ وطباعة الإيصال (A4)</button></div>' +
        '<div class="panel"><h3>دفتر حركات الخزنة (أول حركتين)</h3><div class="tbl-wrap"><table><thead><tr><th>التاريخ</th><th>النوع</th><th>الاتجاه</th><th>البيان</th><th>المبلغ</th><th>طباعة / حذف</th></tr></thead><tbody>' + cmLim.tbody + '</tbody></table>' + cmLim.moreBtn + '</div></div>';
      }

      // 12. REPORTS (21 REPORTS INCLUDING COST CALCULATION REPORT)
      if (t === 'reports') {
        var repList = [
          ['21','21. تقرير حسابات سعر التكلفة (قبل وبعد التكلفة وطريقة الحساب)'],
          ['1','1. تقرير المبيعات وهامش الربح'],['2','2. تقرير المبيعات اليومية'],['3','3. تقرير المبيعات الشهرية'],
          ['4','4. تقرير التحصيلات'],['5','5. تقرير الفواتير والمديونيات'],['6','6. تقرير المدينون (الديون المستحقة)'],
          ['7','7. تقرير كشف حساب كل مدين/عميل'],['8','8. تقرير المشتريات'],['9','9. تقرير حساب الموردين'],
          ['10','10. تقرير مخزون البن الخام'],['11','11. تقرير مخزون العبوات'],['12','12. تقرير مخزون الاستيكرات'],
          ['13','13. تقرير المنتج النهائي (التكلفة + أسعار البيع + قيمة المخزون + إجمالي فلوس البيع)'],['14','14. تقرير حركات المخزون'],['15','15. تقرير الإنتاج'],
          ['16','16. تقرير تكلفة الإنتاج'],['17','17. تقرير المصروفات'],['18','18. تقرير الخزنة'],
          ['19','19. تقرير الأرباح والخسائر (هامش الربح وصافي الربح بعد المصاريف)'],['20','20. تقرير الأصناف الأكثر مبيعًا وربحية']
        ];
        var rows = S.reportRows || [];
        var cols = rows.length ? Object.keys(rows[0]) : [];
        var repLim = limitRows(rows, 'rep_' + S.currentReport, function(r) {
          return '<tr class="rep-row">' + cols.map(function(c) { return '<td>' + (c.endsWith('_قرش') ? egp(r[c]) : (r[c] ?? '-')) + '</td>'; }).join('') + '</tr>';
        }, cols.length || 1, 15);

        var totalsRow = cols.length ? ('<tfoot><tr>' + cols.map(function(c, idx) {
          if (idx === 0) return '<td>الإجمالي (' + rows.length + ' سجل)</td>';
          if (c.endsWith('_قرش')) return '<td>' + egp(rows.reduce(function(a, b) { return a + Number(b[c] || 0); }, 0)) + '</td>';
          if (c.indexOf('الكمية') !== -1 || c.indexOf('الوزن') !== -1 || c.indexOf('عدد') !== -1) return '<td>' + +(rows.reduce(function(a, b) { return a + Number(b[c] || 0); }, 0)).toFixed(3) + '</td>';
          return '<td>-</td>';
        }).join('') + '</tr></tfoot>') : '';

        return '<div class="panel"><h3>📈 مركز التقارير الموحد (تُطبع على ورق عادي كبير A4)</h3>' +
          '<div class="form-grid">' +
            '<div><label>اختر التقرير</label><select id="rep-type" onchange="runReport(this.value)">' + repList.map(function(pair) { return '<option value="' + pair[0] + '" ' + (S.currentReport===pair[0]?'selected':'') + '>' + pair[1] + '</option>'; }).join('') + '</select></div>' +
            '<div><label>من تاريخ</label><input id="rep-from" type="date" /></div>' +
            '<div><label>إلى تاريخ</label><input id="rep-to" type="date" /></div>' +
          '</div>' +
          '<div style="display:flex;gap:8px;flex-wrap:wrap;">' +
            '<button class="btn" onclick="runReport(document.getElementById(\'rep-type\').value)">تحديث التقرير</button>' +
            '<button class="btn" style="background:var(--ok);" onclick="runReport(\'21\')">📊 عرض تقرير حسابات سعر التكلفة</button>' +
            '<button class="btn btn-sec" onclick="printCurrentReport()">🖨️ طباعة التقرير (ورق عادي كبير A4)</button>' +
          '</div>' +
          '<div class="tbl-wrap" style="margin-top:12px;" id="rep-table-box"><table><thead><tr>' + cols.map(function(c) { return '<th>' + c.replace('_قرش',' (ج.م)') + '</th>'; }).join('') + '</tr></thead><tbody>' + repLim.tbody + '</tbody>' + totalsRow + '</table>' + repLim.moreBtn + '</div>' +
        '</div>';
      }

      // 13. USERS
      if (t === 'users') {
        var u = S.usersData;
        return '<div class="panel"><h3>إضافة مستخدم</h3><div class="form-grid"><div><label>الاسم</label><input id="u-name" /></div><div><label>اسم المستخدم</label><input id="u-user" /></div><div><label>كلمة المرور</label><input id="u-pass" type="password" /></div><div><label>الدور</label><select id="u-role"><option value="2">مستخدم</option><option value="1">المدير العام</option></select></div></div><button class="btn" onclick="saveNewUser()">حفظ المستخدم</button></div>' +
        '<div class="panel"><h3>المستخدمون</h3><div class="tbl-wrap"><table><thead><tr><th>الاسم</th><th>اسم المستخدم</th><th>الدور</th></tr></thead><tbody>' + u.users.map(function(x) { return '<tr><td>' + x.full_name + '</td><td>' + x.username + '</td><td>' + x.role_name + '</td></tr>'; }).join('') + '</tbody></table></div></div>';
      }

      // 14. SETTINGS & SOUND & BLUETOOTH
      if (t === 'settings') {
        var st = S.settings;
        var isMuted = S.soundMuted || S.soundVolume <= 0;
        var volPct = isMuted ? 0 : Math.round((S.soundVolume || 0) * 100);
        return '<div class="panel" style="border:2px solid var(--gold);"><h3>🔊 إعدادات صوت الأزرار والمظهر الملكي</h3>' +
          '<div class="form-grid">' +
            '<div><label>مستوى صوت الأزرار: <strong id="settings-vol-lbl" style="color:var(--gold);">' + (isMuted ? 'مكتوم (0%)' : (volPct + '%')) + '</strong></label>' +
              '<input id="settings-vol-slider" type="range" min="0" max="100" value="' + volPct + '" oninput="setSoundVolume(this.value)" style="accent-color:var(--gold);padding:0;" />' +
            '</div>' +
            '<div style="display:flex;align-items:flex-end;gap:8px;flex-wrap:wrap;">' +
              '<button id="settings-mute-btn" class="btn btn-sec" onclick="toggleSoundMute()">' + (isMuted ? '🔊 إلغاء كتم الصوت' : '🔇 كتم الصوت') + '</button>' +
              '<button class="btn" onclick="playBtnSound(\'primary\')">🔔 تجربة صوت الأزرار</button>' +
              '<button class="btn btn-sec" onclick="toggleTheme()">' + (S.theme==='light'?'🌙 تفعيل الوضع الملكي الأسود والذهبي':'☀️ تفعيل الوضع الكريمي الذهبي') + '</button>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="panel" style="border:2px solid var(--gold);"><h3>🖨️ إعدادات وطرق تشغيل طابعة البلوتوث الحرارية (XP-P323B)</h3>' +
          '<div style="background:var(--card2);padding:12px;border-radius:10px;margin-bottom:12px;font-size:13px;line-height:1.9;border-right:4px solid var(--ok);">' +
            '<strong>💡 3 طرق مضمونة لتشغيل طابعة البلوتوث على الموبايل فورًا:</strong><br/>' +
            '1️⃣ <strong>الطريقة الأولى (بلوتوث المتصفح المباشر Web Bluetooth):</strong> تأكد من ضبط شاشة الطابعة نفسها على <strong>Menu ⬅️ Set ⬅️ Instruction Mode ⬅️ ESCPOS</strong> وأغلق أي تطبيق طابعة آخر على الموبايل ثم اضغط <strong>ربط طابعة XP-P323B</strong> بالأسفل.<br/>' +
            '2️⃣ <strong>الطريقة الثانية (عبر تطبيق RawBT المجاني):</strong> بتثبيت تطبيق <strong>RawBT Print Service</strong> من متجر Play وربط الطابعة داخله، اضغط زر <strong>📲 طباعة RawBT</strong> فيطبع الفاتورة بضغطة واحدة!<br/>' +
            '3️⃣ <strong>الطريقة الثالثة (إرسال لتطبيق الطابعة):</strong> اضغط زر <strong>📤 إرسال لتطبيق الطابعة</strong> ليفتح قائمة المشاركة مباشرة إلى تطبيق الطابعة المثبت على هاتفك.' +
          '</div>' +
          '<div class="form-grid">' +
            '<div><label>الطريقة الافتراضية لزر الطباعة السريعة</label><select id="bt-driver-method" onchange="S.btDriverMethod=this.value;localStorage.setItem(\'malaky_bt_driver\',this.value);notify(\'تم حفظ طريقة الطباعة الافتراضية\');">' +
              '<option value="auto" ' + (S.btDriverMethod==='auto'?'selected':'') + '>1. بلوتوث المتصفح المباشر (Web Bluetooth)</option>' +
              '<option value="rawbt" ' + (S.btDriverMethod==='rawbt'?'selected':'') + '>2. تطبيق الجسر المباشر (RawBT Bluetooth)</option>' +
              '<option value="share" ' + (S.btDriverMethod==='share'?'selected':'') + '>3. مشاركة لتطبيق الطابعة (Xprinter / NokoPrint)</option>' +
            '</select></div>' +
            '<div><label>نظام أوامر طابعة XP-P323B</label><select id="bt-cmd-mode" onchange="S.btCmdMode=this.value;localStorage.setItem(\'malaky_bt_cmd_mode\',this.value);notify(\'تم حفظ نظام الطابعة: \'+this.value.toUpperCase());">' +
              '<option value="escpos" ' + (S.btCmdMode==='escpos'?'selected':'') + '>1. نظام الفواتير (ESC/POS - Bill Mode)</option>' +
              '<option value="tspl" ' + (S.btCmdMode==='tspl'?'selected':'') + '>2. نظام الباركود (TSPL - Label Mode)</option>' +
              '<option value="cpcl" ' + (S.btCmdMode==='cpcl'?'selected':'') + '>3. نظام الموبايل (CPCL Mode)</option>' +
            '</select></div>' +
            '<div><label>سرعة الإرسال للبلوتوث</label><select id="bt-speed-mode" onchange="S.btSpeedMode=this.value;S.btWorkingChunkSize=null;localStorage.setItem(\'malaky_bt_speed\',this.value);notify(\'تم تحديث سرعة الطابعة\');">' +
              '<option value="safe" ' + (S.btSpeedMode==='safe'?'selected':'') + '>🛡️ متوازن ومستقر (64 بايت - يمنع تقطيع الحروف)</option>' +
              '<option value="fast" ' + (S.btSpeedMode!=='safe'?'selected':'') + '>⚡ سريع (100 بايت)</option>' +
            '</select></div>' +
            '<div><label>مقاس عرض الطباعة داخل XP-P323B</label><select id="bt-dots" onchange="S.btPaperDots=Number(this.value);localStorage.setItem(\'malaky_bt_dots_v3\',this.value);notify(\'تم تحديث مقاس عرض الطباعة\');">' +
              '<option value="384" ' + (S.btPaperDots===384?'selected':'') + '>⚡ قياسي سريع ومتوافق 100% مع كل الطابعات (384 نقطة)</option>' +
              '<option value="576" ' + (S.btPaperDots===576?'selected':'') + '>عريض 80mm كامل (576 نقطة)</option>' +
            '</select></div>' +
            '<div><label>قناة البلوتوث (لو طبعت فاضي غيّر القناة)</label><select id="bt-chan-sel" onchange="selectBtChannel(this.value)">' +
              (S.btCharInfos && S.btCharInfos.length ? S.btCharInfos.map(function(ci, idx) {
                return '<option value="' + idx + '" ' + (S.btSelectedCharIdx===idx?'selected':'') + '>قناة ' + (idx+1) + ': ' + ci.uuid.slice(0,8) + ' (خدمة ' + ci.srvUuid.slice(4,8) + ')</option>';
              }).join('') : '<option value="0">اربط الطابعة أولًا لإظهار القنوات</option>') +
            '</select></div>' +
          '</div>' +
          '<div style="display:flex;gap:8px;flex-wrap:wrap;">' +
            '<button class="btn" style="background:var(--ok);" onclick="connectBluetoothPrinter().then(function(){renderMainOnly();})">🔗 ربط طابعة XP-P323B (WebBT)</button>' +
            '<button class="btn" style="background:#7c3aed;color:#fff;" onclick="directBluetoothTestPrint(\'escpos\', true)">📲 اختبار طباعة عبر RawBT</button>' +
            '<button class="btn" onclick="directBluetoothTextProbe()">⚡ اختبار نص سريع</button>' +
            '<button class="btn" style="background:#b45309;color:#fff;" onclick="directBluetoothAutoSweep()">🚀 فحص شامل لكل القنوات والأنظمة</button>' +
            '<button class="btn btn-sec" onclick="directBluetoothTestPrint(\'escpos\', false)">🖨️ اختبار (1) ESC/POS</button>' +
            '<button class="btn btn-sec" onclick="directBluetoothTestPrint(\'tspl\', false)">🖨️ اختبار (2) TSPL</button>' +
            '<button class="btn btn-sec" onclick="directBluetoothTestPrint(\'cpcl\', false)">🖨️ اختبار (3) CPCL</button>' +
          '</div>' +
          '<pre id="bt-debug-log" style="margin-top:10px;padding:10px;background:#111;color:#0f0;border-radius:8px;font-size:12px;direction:ltr;text-align:left;white-space:pre-wrap;max-height:180px;overflow-y:auto;">' + (S.btDebugLog || 'اضغط "فحص شامل لكل القنوات والأنظمة" لعرض القنوات المكتشفة...') + '</pre>' +
        '</div>' +
        '<div class="panel"><h3>إعدادات الهوية واللوجو والفاتورة</h3>' +
          '<div class="form-grid">' +
            '<div><label>اسم العلامة (عربي)</label><input id="st-ar" value="' + (st.brand_name_ar||'مَلَكِي') + '" /></div>' +
            '<div><label>هاتف النشاط</label><input id="st-phone" value="' + (st.company_phone||'') + '" /></div>' +
            '<div><label>عنوان النشاط</label><input id="st-addr" value="' + (st.company_address||'') + '" /></div>' +
            '<div><label>عبارة أسفل الفاتورة</label><input id="st-slogan" value="' + (st.invoice_slogan||'مَلَكِي.. قهوة تروق مزاجك') + '" /></div>' +
            '<div><label>رفع الشعار (Logo)</label><input type="file" accept="image/*" onchange="uploadImg(this, \'logo_data_url\')" /></div>' +
            '<div><label>رفع رمز QR Code</label><input type="file" accept="image/*" onchange="uploadImg(this, \'qr_data_url\')" /></div>' +
          '</div>' +
          '<button class="btn" onclick="saveSettings()">💾 حفظ الإعدادات واللوجو</button>' +
        '</div>';
      }
      return '';
    }

    function startEditCustomerById(cid) {
      S.editingCustomer = (S.customers || []).find(function(c) { return Number(c.id) === Number(cid); }) || null;
      renderMainOnly();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    async function saveCustomerForm() {
      try {
        var body = {
          name: document.getElementById('c-name')?.value || '',
          phone: document.getElementById('c-phone')?.value || '',
          address: document.getElementById('c-addr')?.value || '',
          notes: document.getElementById('c-notes')?.value || ''
        };
        if (S.editingCustomer) {
          await api('/api/customers/' + S.editingCustomer.id, { method: 'PUT', body: JSON.stringify(body) });
          S.editingCustomer = null;
          notify('تم تعديل بيانات العميل بنجاح');
        } else {
          await api('/api/customers', { method: 'POST', body: JSON.stringify(body) });
          notify('تمت إضافة العميل الجديد بنجاح');
        }
        loadTab('customers', false);
      } catch (e) { notify(e.message, true); }
    }

    async function saveDirectDebt() {
      try {
        var cid = document.getElementById('dd-person-id')?.value || '';
        var pName = document.getElementById('dd-person-name')?.value || '';
        var phone = document.getElementById('dd-person-phone')?.value || '';
        var amt = toPiasters(document.getElementById('dd-amount')?.value || 0);
        var paid = toPiasters(document.getElementById('dd-paid')?.value || 0);
        var notes = document.getElementById('dd-notes')?.value || 'مديونية مباشرة';
        var dt = document.getElementById('dd-date')?.value || '';

        await api('/api/debtors/direct-debt', {
          method: 'POST',
          body: JSON.stringify({
            customer_id: cid || null,
            person_name: pName,
            phone: phone,
            amount_piasters: amt,
            paid_piasters: paid,
            notes: notes,
            debt_date: dt
          })
        });
        notify('تم تسجيل المبلغ على (' + (pName || 'المدين') + ') بنجاح!');
        if (paid > 0 && confirm('تم استلام دفعة مقدمة. هل تريد طباعة إيصال A4 بها؟')) printCollectionReceipt(pName, paid, notes, dt);
        loadTab('debtors', false);
      } catch (e) { notify(e.message, true); }
    }

    async function quickCollectDebt(cid, name, curBalancePiasters) {
      var defEgp = (Number(curBalancePiasters || 0) / 100).toFixed(2);
      var amtStr = prompt('تحصيل دفعة من (' + name + ') — المتبقي عليه حاليًا ' + defEgp + ' ج.م\nاكتب المبلغ المدفوع الآن بالجنيه:', defEgp);
      if (amtStr === null) return;
      var amtPiasters = toPiasters(amtStr);
      if (amtPiasters <= 0) return notify('أدخل مبلغًا صحيحًا', true);
      try {
        await api('/api/customers/payments', {
          method: 'POST',
          body: JSON.stringify({ customer_id: cid, amount_piasters: amtPiasters, notes: 'سداد من مديونية' })
        });
        notify('تم تحصيل الدفعة من ' + name + ' وإضافتها للخزنة!');
        if (confirm('تم التحصيل. هل تريد طباعة إيصال A4؟')) printCollectionReceipt(name, amtPiasters, 'سداد من المديونية', new Date().toISOString().slice(0,10));
        loadTab(S.tab, false);
      } catch (e) { notify(e.message, true); }
    }

    async function quickAddMoreDebt(cid, name) {
      var amtStr = prompt('تسجيل مبلغ جديد على (' + name + ') بالجنيه:');
      if (amtStr === null) return;
      var amtPiasters = toPiasters(amtStr);
      if (amtPiasters <= 0) return notify('أدخل مبلغًا صحيحًا', true);
      var reason = prompt('البيان / السبب (اختياري):', 'مبلغ إضافي مسجل على الحساب') || 'مبلغ إضافي';
      try {
        await api('/api/debtors/direct-debt', {
          method: 'POST',
          body: JSON.stringify({ customer_id: cid, person_name: name, amount_piasters: amtPiasters, paid_piasters: 0, notes: reason })
        });
        notify('تمت إضافة المبلغ على حساب ' + name);
        loadTab(S.tab, false);
      } catch (e) { notify(e.message, true); }
    }

    async function viewDebtorStatement(cid) {
      try {
        var d = await api('/api/customers/' + cid + '/statement');
        var c = d.customer;
        var entries = d.entries || [];

        var rowsHtml = entries.map(function(e) {
          var rem = Number(e.total_piasters) - Number(e.paid_piasters);
          return '<tr>' +
            '<td>' + e.invoice_date + '</td>' +
            '<td>' + (e.notes || e.invoice_number) + '</td>' +
            '<td>' + egp(e.total_piasters) + '</td>' +
            '<td>' + egp(e.paid_piasters) + '</td>' +
            '<td><strong>' + egp(rem) + '</strong></td>' +
          '</tr>';
        }).join('') || '<tr><td colspan="5" style="text-align:center;">لا توجد حركات</td></tr>';

        var metaHtml = '<div>العميل / المدين: <strong>' + thermalSafe(c.name) + '</strong></div>' +
          '<div>الهاتف: <strong>' + thermalSafe(c.phone || '-') + '</strong></div>' +
          '<div>العنوان: <strong>' + thermalSafe(c.address || '-') + '</strong></div>' +
          '<div>الصافي المتبقي عليه: <strong style="color:#c00;">' + egp(d.remaining_piasters) + '</strong></div>';

        var tableHtml = '<table class="a4-table">' +
          '<thead><tr><th>التاريخ</th><th>البيان / المرجع</th><th>المبلغ المسجل</th><th>المسدد</th><th>المتبقي</th></tr></thead>' +
          '<tbody>' + rowsHtml + '</tbody>' +
          '<tfoot><tr><td colspan="2">الإجمالي الكلي للحساب</td><td>' + egp(d.total_piasters) + '</td><td>' + egp(d.paid_piasters) + '</td><td>الصافي المتبقي: ' + egp(d.remaining_piasters) + '</td></tr></tfoot>' +
        '</table>';

        showA4Print('كشف حساب عميل / مدين', 'STMT-' + c.id, new Date().toISOString().slice(0,10), metaHtml, tableHtml);
      } catch (e) { notify(e.message, true); }
    }

    function saveLocalPriceBackup() {
      try {
        var snap = (S.products || []).map(function(p) {
          return {
            id: p.id,
            p1: Number(p.sale_price_1_piasters || 0),
            p2: Number(p.sale_price_2_piasters || 0),
            pct1: Number(p.profit_percent_1 || 0),
            pct2: Number(p.profit_percent_2 || 0)
          };
        });
        if (!snap.length) return;
        var raw = localStorage.getItem('malaky_price_backups_v5');
        var stack = raw ? (JSON.parse(raw) || []) : [];
        stack.push({ ts: Date.now(), items: snap });
        if (stack.length > 20) stack = stack.slice(stack.length - 20);
        localStorage.setItem('malaky_price_backups_v5', JSON.stringify(stack));
      } catch (_) {}
    }

    function getLastLocalPriceBackup() {
      try {
        var raw = localStorage.getItem('malaky_price_backups_v5');
        var stack = raw ? (JSON.parse(raw) || []) : [];
        return stack.length ? stack[stack.length - 1] : null;
      } catch (_) { return null; }
    }

    function popLocalPriceBackup() {
      try {
        var raw = localStorage.getItem('malaky_price_backups_v5');
        var stack = raw ? (JSON.parse(raw) || []) : [];
        if (!stack.length) return null;
        var last = stack.pop();
        localStorage.setItem('malaky_price_backups_v5', JSON.stringify(stack));
        return last;
      } catch (_) { return null; }
    }

    function getActiveFormFinalCostEgp() {
      var manualCost = Number(document.getElementById('p-base-final-cost')?.value || 0);
      if (manualCost > 0) return manualCost;
      if (S.editingProduct) {
        var kgPiasters = getFinalProductKgCostPiasters(S.editingProduct.id);
        if (kgPiasters > 0) return kgPiasters / 100;
        if (Number(S.editingProduct.sale_price_1_piasters || 0) > 0) return Number(S.editingProduct.sale_price_1_piasters) / 100;
      }
      var defSys = getDefaultSystemFinalKgCostPiasters();
      if (defSys > 0) return defSys / 100;
      return 520;
    }

    function onQuickSelectProductForEdit(val) {
      if (!val) {
        S.editingProduct = null;
        renderMainOnly();
        setTimeout(function() { previewProdPrices(); }, 20);
        return;
      }
      startEditProductById(Number(val));
    }

    function setFormQuickPct(pct) {
      var pct1El = document.getElementById('p-pct1');
      if (pct1El) pct1El.value = pct;
      onProdPct1Input();
    }

    function setFormQuickPct2(pct) {
      var pct2El = document.getElementById('p-pct2');
      if (pct2El) pct2El.value = pct;
      onProdPct2Input();
    }

    function onProdBaseCostInput() {
      var pct1Val = document.getElementById('p-pct1')?.value;
      var pct2Val = document.getElementById('p-pct2')?.value;
      if (pct1Val !== undefined && pct1Val !== '') onProdPct1Input();
      if (pct2Val !== undefined && pct2Val !== '') onProdPct2Input();
      previewProdPrices();
    }

    function onProdPct1Input() {
      var baseCost = getActiveFormFinalCostEgp();
      var costEl = document.getElementById('p-base-final-cost');
      if (costEl && (!costEl.value || Number(costEl.value) <= 0) && baseCost > 0) {
        costEl.value = baseCost.toFixed(2);
      }
      var pct1 = Number(document.getElementById('p-pct1')?.value || 0);
      if (baseCost > 0) {
        var newP1 = +(baseCost * (1 + (pct1 / 100))).toFixed(2);
        var p1El = document.getElementById('p-p1');
        var q1El = document.getElementById('p-q1');
        if (p1El) p1El.value = newP1;
        if (q1El) q1El.value = +(newP1 * 0.25).toFixed(2);
      }
      previewProdPrices();
    }

    function onProdPct2Input() {
      var baseCost = getActiveFormFinalCostEgp();
      var pct2 = Number(document.getElementById('p-pct2')?.value || 0);
      if (baseCost > 0) {
        var newP2 = +(baseCost * (1 + (pct2 / 100))).toFixed(2);
        var p2El = document.getElementById('p-p2');
        var q2El = document.getElementById('p-q2');
        if (p2El) p2El.value = newP2;
        if (q2El) q2El.value = +(newP2 * 0.25).toFixed(2);
      }
      previewProdPrices();
    }

    function onProdPrice1Input() {
      var baseCost = getActiveFormFinalCostEgp();
      var p1 = Number(document.getElementById('p-p1')?.value || 0);
      var q1El = document.getElementById('p-q1');
      if (q1El) q1El.value = p1 > 0 ? +(p1 * 0.25).toFixed(2) : '';
      var pct1El = document.getElementById('p-pct1');
      if (baseCost > 0 && p1 > 0 && pct1El) {
        pct1El.value = +(((p1 - baseCost) / baseCost) * 100).toFixed(2);
      }
      previewProdPrices();
    }

    function onProdQuarter1Input() {
      var q1 = Number(document.getElementById('p-q1')?.value || 0);
      var p1 = +(q1 * 4).toFixed(2);
      var p1El = document.getElementById('p-p1');
      if (p1El) p1El.value = p1 > 0 ? p1 : '';
      var baseCost = getActiveFormFinalCostEgp();
      var pct1El = document.getElementById('p-pct1');
      if (baseCost > 0 && p1 > 0 && pct1El) {
        pct1El.value = +(((p1 - baseCost) / baseCost) * 100).toFixed(2);
      }
      previewProdPrices();
    }

    function onProdPrice2Input() {
      var baseCost = getActiveFormFinalCostEgp();
      var p2 = Number(document.getElementById('p-p2')?.value || 0);
      var q2El = document.getElementById('p-q2');
      if (q2El) q2El.value = p2 > 0 ? +(p2 * 0.25).toFixed(2) : '';
      var pct2El = document.getElementById('p-pct2');
      if (baseCost > 0 && p2 > 0 && pct2El) {
        pct2El.value = +(((p2 - baseCost) / baseCost) * 100).toFixed(2);
      }
      previewProdPrices();
    }

    function onProdQuarter2Input() {
      var q2 = Number(document.getElementById('p-q2')?.value || 0);
      var p2 = +(q2 * 4).toFixed(2);
      var p2El = document.getElementById('p-p2');
      if (p2El) p2El.value = p2 > 0 ? p2 : '';
      var baseCost = getActiveFormFinalCostEgp();
      var pct2El = document.getElementById('p-pct2');
      if (baseCost > 0 && p2 > 0 && pct2El) {
        pct2El.value = +(((p2 - baseCost) / baseCost) * 100).toFixed(2);
      }
      previewProdPrices();
    }

    function resetProdFormBeforeEdit() {
      if (S.editingProduct) {
        startEditProductById(S.editingProduct.id);
        notify('↩️ تم إرجاع خانات الصنف لسعره المسجل قبل التعديل');
      } else {
        renderMainOnly();
        previewProdPrices();
      }
    }

    function previewProdPrices() {
      var p1 = Number(document.getElementById('p-p1')?.value || 0);
      var baseCost = getActiveFormFinalCostEgp();
      var box = document.getElementById('prod-price-hint');
      if (!box) return;
      if (p1 > 0 || baseCost > 0) {
        var jar250Cost = baseCost * 0.25;
        var jar125Cost = baseCost * 0.125;
        var jar250Sale = p1 * 0.25;
        var jar125Sale = p1 * 0.125;
        var jar250Profit = jar250Sale - jar250Cost;
        var jar125Profit = jar125Sale - jar125Cost;
        var kgProfit = p1 - baseCost;
        var pctStr = (baseCost > 0 && p1 > 0) ? (((p1 - baseCost) / baseCost) * 100).toFixed(1) + '%' : '-';
        box.innerHTML =
          '⚖️ <strong>الكيلو المعبأ (1 كجم):</strong> التكلفة النهائية = <strong>' + baseCost.toFixed(2) + ' ج.م</strong> ⬅️ سعر البيع = <strong>' + p1.toFixed(2) + ' ج.م</strong> (صافي ربح الكيلو: <span style="color:var(--ok);">' + kgProfit.toFixed(2) + ' ج.م | نسبة ' + pctStr + '</span>)<br/>' +
          '📦 <strong>برطمان الربع (0.25 كجم):</strong> التكلفة النهائية = <strong>' + jar250Cost.toFixed(2) + ' ج.م</strong> ⬅️ سعر البيع = <strong>' + jar250Sale.toFixed(2) + ' ج.م</strong> (مكسب البرطمان: <span style="color:var(--ok);">' + jar250Profit.toFixed(2) + ' ج.م</span>)<br/>' +
          '📦 <strong>برطمان الثمن (0.125 كجم):</strong> التكلفة النهائية = <strong>' + jar125Cost.toFixed(2) + ' ج.م</strong> ⬅️ سعر البيع = <strong>' + jar125Sale.toFixed(2) + ' ج.م</strong> (مكسب البرطمان: <span style="color:var(--ok);">' + jar125Profit.toFixed(2) + ' ج.م</span>)';
      } else {
        box.textContent = 'اكتب نسبة الربح (%) ليتم حساب السعر مباشرة فوق التكلفة النهائية، أو اكتب السعر مباشرة.';
      }
    }

    function startEditProductById(id) {
      S.editingProduct = S.products.find(function(x) { return Number(x.id) === Number(id); }) || null;
      renderMainOnly();
      setTimeout(function() { previewProdPrices(); }, 20);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    async function saveProduct() {
      try {
        saveLocalPriceBackup();
        var baseCostEgp = Number(document.getElementById('p-base-final-cost')?.value || 0);
        var pct1Val = Number(document.getElementById('p-pct1')?.value || 0);
        var pct2Val = Number(document.getElementById('p-pct2')?.value || pct1Val);
        var p1Val = Number(document.getElementById('p-p1')?.value || 0);
        if (p1Val <= 0 && baseCostEgp > 0 && pct1Val >= 0) {
          p1Val = +(baseCostEgp * (1 + (pct1Val / 100))).toFixed(2);
        }
        var p2Val = Number(document.getElementById('p-p2')?.value || p1Val);
        var body = {
          name: document.getElementById('p-name').value,
          sku: document.getElementById('p-sku').value,
          sale_price_1_piasters: toPiasters(p1Val),
          sale_price_2_piasters: toPiasters(p2Val),
          profit_percent_1: pct1Val,
          profit_percent_2: pct2Val,
          manual_final_cost_kg_piasters: toPiasters(baseCostEgp)
        };
        if (S.editingProduct) {
          await api('/api/products/' + S.editingProduct.id, { method: 'PUT', body: JSON.stringify(body) });
          S.editingProduct = null;
          notify('✅ تم حفظ السعر الجديد ونسبة الربح (ويمكنك الرجوع للسعر السابق بضغطة زر)');
        } else {
          await api('/api/products', { method: 'POST', body: JSON.stringify(body) });
          notify('✅ تم حفظ الصنف الجديد بالأسعار ونسبة الربح');
        }
        loadTab('products', false);
      } catch (e) { notify(e.message, true); }
    }

    function onRowPctLiveInput(id, tierNum, finKgCostPiasters) {
      var t = Number(tierNum || 1) === 2 ? 2 : 1;
      var pct = Number(document.getElementById('row-pct' + t + '-' + id)?.value || 0);
      var disp = document.getElementById('row-price' + t + '-disp-' + id);
      var baseKg = Number(finKgCostPiasters || 0) || getFinalProductKgCostPiasters(id);
      if (disp && baseKg > 0) {
        var newKgPiasters = Math.round(baseKg * (1 + (pct / 100)));
        disp.innerHTML = egp(newKgPiasters) + ' / كجم <small style="color:var(--ok);">(الربع: ' + egp(newKgPiasters * 0.25) + ')</small>';
      }
    }

    async function applyRowProfitPercent(id, tierNum) {
      try {
        var t = Number(tierNum || 1) === 2 ? '2' : '1';
        var pctStr = document.getElementById('row-pct' + t + '-' + id)?.value || '';
        if (pctStr === '') return notify('اكتب نسبة الربح % أولًا أمام الصنف', true);
        var pct = Number(pctStr);
        if (Number.isNaN(pct) || pct < 0) return notify('نسبة الربح غير صحيحة', true);
        saveLocalPriceBackup();
        var baseKg = getFinalProductKgCostPiasters(id);
        await api('/api/products/' + id + '/apply-profit-percent', {
          method: 'POST',
          body: JSON.stringify({
            target_tier: t,
            profit_percent: pct,
            profit_percent_1: pct,
            profit_percent_2: pct,
            manual_final_cost_kg_piasters: baseKg
          })
        });
        notify('✅ تم تحديث السعر رقم (' + t + ') فقط للصنف بنسبة ربح ' + pct + '% فوق التكلفة النهائية!');
        loadTab('products', false);
      } catch (e) { notify(e.message, true); }
    }

    function setBulkQuickPct1(pct) {
      var b1 = document.getElementById('bulk-pct1');
      if (b1) b1.value = pct;
      previewBulkProfitPercent1();
    }

    function setBulkQuickPct2(pct) {
      var b2 = document.getElementById('bulk-pct2');
      if (b2) b2.value = pct;
      previewBulkProfitPercent2();
    }

    function previewBulkProfitPercent1() {
      var box = document.getElementById('bulk-live-preview-1');
      if (!box) return;
      var pct1Str = document.getElementById('bulk-pct1')?.value || '';
      if (pct1Str === '') {
        box.innerHTML = '💡 اكتب نسبة الربح للسعر رقم (1) هنا لمعاينة وتحديث السعر الأول فقط لكل المنتجات بدون المساس بالسعر الثاني.';
        return;
      }
      var pct1 = Number(pct1Str || 0);
      var fallbackCostPiasters = toPiasters(document.getElementById('bulk-fallback-cost')?.value || 520);
      var lines = (S.products || []).slice(0, 6).map(function(p) {
        var fKg = getFinalProductKgCostPiasters(p.id) || fallbackCostPiasters || Number(p.sale_price_1_piasters || 0);
        var newP1 = Math.round(fKg * (1 + (pct1 / 100)));
        return '• <strong>' + p.name + ':</strong> السعر (1) الجديد = <strong>' + egp(newP1) + ' / كجم</strong> (الربع: <strong>' + egp(newP1 * 0.25) + '</strong> بدلًا من ' + egp(Number(p.sale_price_1_piasters || 0) * 0.25) + ')';
      });
      box.innerHTML = '🟢 <strong>معاينة السعر الأول (1) الجديد عند ربح (' + pct1 + '%):</strong><br/>' + lines.join('<br/>');
    }

    function previewBulkProfitPercent2() {
      var box = document.getElementById('bulk-live-preview-2');
      if (!box) return;
      var pct2Str = document.getElementById('bulk-pct2')?.value || '';
      if (pct2Str === '') {
        box.innerHTML = '💡 اكتب نسبة الربح للسعر رقم (2) هنا لمعاينة وتحديث السعر الثاني فقط لكل المنتجات بدون المساس بالسعر الأول.';
        return;
      }
      var pct2 = Number(pct2Str || 0);
      var fallbackCostPiasters = toPiasters(document.getElementById('bulk-fallback-cost')?.value || 520);
      var lines = (S.products || []).slice(0, 6).map(function(p) {
        var fKg = getFinalProductKgCostPiasters(p.id) || fallbackCostPiasters || Number(p.sale_price_2_piasters || p.sale_price_1_piasters || 0);
        var newP2 = Math.round(fKg * (1 + (pct2 / 100)));
        return '• <strong>' + p.name + ':</strong> السعر (2) الجديد = <strong>' + egp(newP2) + ' / كجم</strong> (الربع: <strong>' + egp(newP2 * 0.25) + '</strong> بدلًا من ' + egp(Number(p.sale_price_2_piasters || 0) * 0.25) + ')';
      });
      box.innerHTML = '🟣 <strong>معاينة السعر الثاني (2) الجديد عند ربح (' + pct2 + '%):</strong><br/>' + lines.join('<br/>');
    }

    async function applyBulkProfitPercent1() {
      try {
        var pct1Str = document.getElementById('bulk-pct1')?.value || '';
        var fallbackCostPiasters = toPiasters(document.getElementById('bulk-fallback-cost')?.value || 520);
        if (pct1Str === '') return notify('أدخل نسبة الربح للسعر الأول أولًا (مثال: 30)', true);
        var pct1 = Number(pct1Str);
        if (Number.isNaN(pct1) || pct1 < 0) return notify('نسبة الربح غير صحيحة', true);

        saveLocalPriceBackup();

        var res = await api('/api/products/bulk-profit-percent', {
          method: 'POST',
          body: JSON.stringify({
            target_tier: '1',
            profit_percent_1: pct1,
            fallback_final_cost_kg_piasters: fallbackCostPiasters
          })
        });
        notify('✅ تم تحديث (السعر الأول فقط) لـ (' + (res.updatedCount || 0) + ') منتج بنسبة ربح ' + pct1 + '% فوق التكلفة النهائية دون المساس بالسعر الثاني!');
        loadTab('products', false);
      } catch (e) { notify(e.message, true); }
    }

    async function applyBulkProfitPercent2() {
      try {
        var pct2Str = document.getElementById('bulk-pct2')?.value || '';
        var fallbackCostPiasters = toPiasters(document.getElementById('bulk-fallback-cost')?.value || 520);
        if (pct2Str === '') return notify('أدخل نسبة الربح للسعر الثاني أولًا (مثال: 20)', true);
        var pct2 = Number(pct2Str);
        if (Number.isNaN(pct2) || pct2 < 0) return notify('نسبة الربح غير صحيحة', true);

        saveLocalPriceBackup();

        var res = await api('/api/products/bulk-profit-percent', {
          method: 'POST',
          body: JSON.stringify({
            target_tier: '2',
            profit_percent_2: pct2,
            fallback_final_cost_kg_piasters: fallbackCostPiasters
          })
        });
        notify('✅ تم تحديث (السعر الثاني فقط) لـ (' + (res.updatedCount || 0) + ') منتج بنسبة ربح ' + pct2 + '% فوق التكلفة النهائية دون المساس بالسعر الأول!');
        loadTab('products', false);
      } catch (e) { notify(e.message, true); }
    }

    async function revertAllProductsPrices() {
      try {
        var localSnap = getLastLocalPriceBackup();
        await api('/api/products/revert-all-prices', {
          method: 'POST',
          body: JSON.stringify({
            snapshot_items: localSnap ? localSnap.items : null
          })
        });
        popLocalPriceBackup();
        notify('↩️ تم إرجاع جميع المنتجات إلى آخر سعر قبل التعديل بنجاح!');
        S.editingProduct = null;
        loadTab('products', false);
      } catch (e) { notify(e.message, true); }
    }

    async function revertSingleProductPrice(id) {
      try {
        var localSnap = getLastLocalPriceBackup();
        var snapItem = localSnap && localSnap.items ? localSnap.items.find(function(x) { return Number(x.id) === Number(id); }) : null;
        await api('/api/products/' + id + '/revert-price', {
          method: 'POST',
          body: JSON.stringify({
            fallback_p1: snapItem ? snapItem.p1 : 0,
            fallback_p2: snapItem ? snapItem.p2 : 0
          })
        });
        notify('↩️ تم إرجاع الصنف إلى آخر سعر قبل التعديل بنجاح!');
        if (S.editingProduct && Number(S.editingProduct.id) === Number(id)) S.editingProduct = null;
        loadTab('products', false);
      } catch (e) { notify(e.message, true); }
    }

    async function deleteProduct(id) {
      if (!confirm('حذف هذا الصنف نهائيًا؟')) return;
      try { await api('/api/products/' + id, { method: 'DELETE' }); notify('تم حذف الصنف'); loadTab('products', false); } catch (e) { notify(e.message, true); }
    }

    function calcSec5Preview() {
      var q250 = Number(document.getElementById('adj-q250')?.value || 0);
      var q125 = Number(document.getElementById('adj-q125')?.value || 0);
      var grams = (q250 * 250) + (q125 * 125);
      var wInp = document.getElementById('adj-weight-kg');
      if (wInp) wInp.value = gramsToKgNum(grams);
      var kgCost = Number(document.getElementById('adj-kgcost')?.value || 0);
      var c250 = (kgCost * 0.25).toFixed(2);
      var c125 = (kgCost * 0.125).toFixed(2);
      var totVal = ((grams / 1000) * kgCost).toFixed(2);
      var box = document.getElementById('sec5-preview');
      if (box) {
        box.innerHTML = '⚖️ إجمالي الوزن: ' + fmtWeight(grams) + ' | 💰 تكلفة البن للربع (0.25 كجم): ' + c250 + ' ج.م | 💰 تكلفة البن للثمن (0.125 كجم): ' + c125 + ' ج.م | إجمالي قيمة البن: ' + totVal + ' ج.م';
      }
    }

    function onSec5WeightKgInput() {
      var wKg = Number(document.getElementById('adj-weight-kg')?.value || 0);
      var grams = Math.round(wKg * 1000);
      if (grams >= 0) {
        document.getElementById('adj-q250').value = Math.floor(grams / 250);
        document.getElementById('adj-q125').value = Math.round((grams % 250) / 125);
        var kgCost = Number(document.getElementById('adj-kgcost')?.value || 0);
        var box = document.getElementById('sec5-preview');
        if (box) {
          box.innerHTML = '⚖️ إجمالي الوزن: ' + fmtWeight(grams) + ' | 💰 تكلفة البن للربع: ' + (kgCost*0.25).toFixed(2) + ' ج.م | 💰 تكلفة البن للثمن: ' + (kgCost*0.125).toFixed(2) + ' ج.م | إجمالي قيمة البن: ' + (wKg * kgCost).toFixed(2) + ' ج.م';
        }
      }
    }

    function calcSec5RawPreview() {
      var kg = Number(document.getElementById('adj-raw-kg')?.value || 0);
      var kgCost = Number(document.getElementById('adj-kgcost')?.value || 0);
      var box = document.getElementById('sec5-preview');
      if (box) {
        box.innerHTML = '⚖️ الوزن: ' + kg + ' كجم | 💰 تكلفة الكيلو: ' + kgCost.toFixed(2) + ' ج.م (الربع: ' + (kgCost*0.25).toFixed(2) + ' ج.م | الثمن: ' + (kgCost*0.125).toFixed(2) + ' ج.م) | إجمالي القيمة: ' + (kg * kgCost).toFixed(2) + ' ج.م';
      }
    }

    function loadIntoSection5(type, pid, pName, q250, q125, grams, kgCostPiasters) {
      S.adjType = type;
      renderMainOnly();
      setTimeout(function() {
        var hid = document.getElementById('adj-pid');
        var txt = document.getElementById('txt-adj-pid');
        if (hid) hid.value = pid;
        if (txt) txt.value = pName;
        var modeSel = document.getElementById('adj-mode');
        if (modeSel) modeSel.value = 'set';
        var kgInp = document.getElementById('adj-kgcost');
        if (kgInp) kgInp.value = (Number(kgCostPiasters || 0) / 100).toFixed(2);
        if (type === 'finished') {
          document.getElementById('adj-q250').value = q250;
          document.getElementById('adj-q125').value = q125;
          calcSec5Preview();
        } else if (type === 'raw_coffee') {
          document.getElementById('adj-raw-kg').value = gramsToKgNum(grams);
          calcSec5RawPreview();
        }
        document.getElementById('sec5-panel')?.scrollIntoView({ behavior: 'smooth' });
      }, 40);
    }

    async function submitUnifiedAdjust() {
      try {
        var type = document.getElementById('adj-type').value;
        var mode = document.getElementById('adj-mode').value;
        var body = { stock_type: type, mode: mode };
        if (type === 'finished') {
          body.product_id = document.getElementById('adj-pid').value;
          body.qty_250 = document.getElementById('adj-q250').value;
          body.qty_125 = document.getElementById('adj-q125').value;
          body.sticker_sku_id_250 = document.getElementById('adj-stk250')?.value || 'none';
          body.sticker_sku_id_125 = document.getElementById('adj-stk125')?.value || 'none';
          body.cost_per_kg_piasters = toPiasters(document.getElementById('adj-kgcost').value);
        } else if (type === 'raw_coffee') {
          body.product_id = document.getElementById('adj-pid').value;
          var rawKg = Number(document.getElementById('adj-raw-kg').value || 0);
          body.weight_grams = Math.round(rawKg * 1000);
          body.cost_per_kg_piasters = toPiasters(document.getElementById('adj-kgcost').value);
        } else if (type === 'packaging') {
          body.packaging_type_id = document.getElementById('adj-pkid').value;
          body.new_quantity = document.getElementById('adj-qty').value;
          body.unit_cost_piasters = toPiasters(document.getElementById('adj-ucost').value);
        } else if (type === 'sticker') {
          body.product_id = document.getElementById('adj-pid').value;
          body.packaging_type_id = document.getElementById('adj-pkid').value;
          body.new_quantity = document.getElementById('adj-qty').value;
          body.unit_cost_piasters = toPiasters(document.getElementById('adj-ucost').value);
        }
        await api('/api/inventory/unified-adjust', { method: 'POST', body: JSON.stringify(body) });
        notify(mode === 'pack' ? 'تمت التعبئة وحساب التكلفة النهائية للمنتج بنجاح!' : 'تم حفظ الرصيد بنجاح!');
        loadTab('inventory', false);
      } catch (e) { notify(e.message, true); }
    }

    async function editPkgPrompt(pkid, name, curQty, curCost) {
      var nQ = prompt('العدد الجديد لعبوات (' + name + '):', curQty);
      if (nQ === null) return;
      var nC = prompt('تكلفة العبوة الواحدة بالجنيه:', (curCost/100).toFixed(2));
      if (nC === null) return;
      await api('/api/inventory/unified-adjust', { method:'POST', body:JSON.stringify({ stock_type:'packaging', mode:'set', packaging_type_id:pkid, new_quantity:nQ, unit_cost_piasters:toPiasters(nC) }) });
      notify('تم تعديل العبوات'); loadTab('inventory', false);
    }

    async function zeroPkgStock(pkid) {
      if (!confirm('هل تريد حذف / تصفير رصيد هذه العبوة؟')) return;
      await api('/api/inventory/unified-adjust', { method:'POST', body:JSON.stringify({ stock_type:'packaging', mode:'set', packaging_type_id:pkid, new_quantity:0, unit_cost_piasters:0 }) });
      notify('تم تصفير العبوات'); loadTab('inventory', false);
    }

    async function editStickerPrompt(id, pid, pkid, curQty, curCost) {
      var nQ = prompt('العدد الجديد للاستيكر:', curQty);
      if (nQ === null) return;
      var nC = prompt('تكلفة الاستيكر الواحد بالجنيه:', (curCost/100).toFixed(2));
      if (nC === null) return;
      await api('/api/inventory/sticker-sku', { method:'POST', body:JSON.stringify({ product_id:pid, packaging_type_id:pkid, mode:'set', quantity_units:nQ, unit_cost_piasters:toPiasters(nC) }) });
      notify('تم تعديل الاستيكر'); loadTab('inventory', false);
    }

    async function saveStickerSku(mode) {
      try {
        await api('/api/inventory/sticker-sku', { method:'POST', body:JSON.stringify({
          product_id: document.getElementById('st-pid').value,
          packaging_type_id: document.getElementById('st-pkid').value,
          mode: mode || 'set',
          quantity_units: document.getElementById('st-qty').value,
          unit_cost_piasters: toPiasters(document.getElementById('st-cost').value)
        })});
        notify('تم حفظ رصيد استيكر التوليفة بنجاح'); loadTab('inventory', false);
      } catch (e) { notify(e.message, true); }
    }

    async function zeroCoffeeStock(type, pid) {
      if (!confirm('هل تريد حذف / تصفير وزن هذا الصنف؟')) return;
      await api('/api/inventory/unified-adjust', {
        method: 'POST',
        body: JSON.stringify({ stock_type: type, mode: 'set', product_id: pid, qty_250: 0, qty_125: 0, weight_grams: 0, cost_per_kg_piasters: 0 })
      });
      notify('تم تصفير الرصيد');
      loadTab('inventory', false);
    }

    async function deleteSticker(id) {
      if (!confirm('هل تريد تصفير رصيد هذا الاستيكر؟')) return;
      await api('/api/inventory/sticker-sku/' + id, { method: 'DELETE' });
      loadTab('inventory', false);
    }

    function onProdProductChange() {
      var pid = Number(document.getElementById('prd-pid')?.value || 0);
      var def250 = (S.inventory.stickers || []).find(function(s) { return Number(s.product_id) === pid && Number(s.net_weight_grams) === 250; });
      var def125 = (S.inventory.stickers || []).find(function(s) { return Number(s.product_id) === pid && Number(s.net_weight_grams) === 125; });
      var sel250 = document.getElementById('prd-stk250');
      var sel125 = document.getElementById('prd-stk125');
      if (sel250) {
        sel250.value = (def250 && Number(def250.quantity_units) > 0) ? def250.id : 'none';
      }
      if (sel125) {
        sel125.value = (def125 && Number(def125.quantity_units) > 0) ? def125.id : 'none';
      }
      calcProdPreview();
    }

    function onProdWeightKgInput() {
      var wKg = Number(document.getElementById('prd-raw-kg')?.value || 0);
      var grams = Math.round(wKg * 1000);
      if (grams >= 0) {
        document.getElementById('prd-q250').value = Math.floor(grams / 250);
        document.getElementById('prd-q125').value = Math.round((grams % 250) / 125);
        calcProdPreview(true);
      }
    }

    function calcProdPreview(skipKgInputUpdate) {
      var q250 = Number(document.getElementById('prd-q250')?.value || 0);
      var q125 = Number(document.getElementById('prd-q125')?.value || 0);
      var w = (q250 * 250) + (q125 * 125);
      var rawKgInp = document.getElementById('prd-raw-kg');
      if (rawKgInp && !skipKgInputUpdate) rawKgInp.value = gramsToKgNum(w);

      var pid = Number(document.getElementById('prd-pid')?.value || 0);
      var prod = S.products.find(function(x) { return x.id === pid; });
      var rawStockRow = S.inventory.raw.find(function(r) { return Number(r.product_id) === pid; });
      var availRawGrams = Number(rawStockRow?.quantity_grams || prod?.raw_grams || 0);

      var pk250 = S.inventory.packaging.find(function(x) { return Number(x.net_weight_grams) === 250; });
      var pk125 = S.inventory.packaging.find(function(x) { return Number(x.net_weight_grams) === 125; });
      var availPkg250 = Number(pk250?.quantity_units || 0);
      var availPkg125 = Number(pk125?.quantity_units || 0);
      var costPkg250Egp = Number(pk250?.average_cost_per_unit_piasters || 0) / 100;
      var costPkg125Egp = Number(pk125?.average_cost_per_unit_piasters || 0) / 100;

      var selStk250Raw = document.getElementById('prd-stk250')?.value || 'none';
      var selStk125Raw = document.getElementById('prd-stk125')?.value || 'none';
      var isNoStk250 = (selStk250Raw === 'none' || selStk250Raw === '0');
      var isNoStk125 = (selStk125Raw === 'none' || selStk125Raw === '0');

      var stk250 = isNoStk250 ? null : S.inventory.stickers.find(function(s) { return Number(s.id) === Number(selStk250Raw); });
      var stk125 = isNoStk125 ? null : S.inventory.stickers.find(function(s) { return Number(s.id) === Number(selStk125Raw); });

      var availStk250 = stk250 ? Number(stk250.quantity_units || 0) : 0;
      var availStk125 = stk125 ? Number(stk125.quantity_units || 0) : 0;
      var costStk250Egp = stk250 ? (Number(stk250.average_cost_per_unit_piasters || 0) / 100) : 0;
      var costStk125Egp = stk125 ? (Number(stk125.average_cost_per_unit_piasters || 0) / 100) : 0;

      var statusBox = document.getElementById('prd-stock-status');
      if (statusBox && prod) {
        var rawOk = availRawGrams >= w;
        var pkgOk = availPkg250 >= q250 && availPkg125 >= q125;
        var stk250Ok = isNoStk250 || (availStk250 >= q250);
        var stk125Ok = isNoStk125 || (availStk125 >= q125);
        var stkOk = (stk250 && stk125 && stk250.id === stk125.id)
          ? (availStk250 >= (q250 + q125))
          : (stk250Ok && stk125Ok);

        var stk250Label = isNoStk250 ? '🚫 بدون استيكر (0 ج.م)' : ((stk250 ? (stk250.product_name + ' - ' + stk250.packaging_name) : 'ربع') + ': متاح ' + availStk250 + ' ومطلوب ' + q250);
        var stk125Label = isNoStk125 ? '🚫 بدون استيكر (0 ج.م)' : ((stk125 ? (stk125.product_name + ' - ' + stk125.packaging_name) : 'ثمن') + ': متاح ' + availStk125 + ' ومطلوب ' + q125);

        statusBox.innerHTML =
          '<div>☕ <strong>رصيد البن الخام (' + prod.name + '):</strong> متاح <strong>' + fmtWeight(availRawGrams) + '</strong> — المطلوب: <strong>' + fmtWeight(w) + '</strong> ' + (rawOk ? '✅' : '<span style="color:var(--err);">❌ غير كافٍ</span>') + '</div>' +
          '<div>📦 <strong>رصيد العبوات الفارغة:</strong> متاح ربع (<strong>' + availPkg250 + '</strong>) وثمن (<strong>' + availPkg125 + '</strong>) — المطلوب: ربع (<strong>' + q250 + '</strong>) وثمن (<strong>' + q125 + '</strong>) ' + (pkgOk ? '✅' : '<span style="color:var(--err);">❌ غير كافٍ</span>') + '</div>' +
          '<div>🏷️ <strong>الاستيكرات المختارة:</strong> [الربع: ' + stk250Label + '] + [الثمن: ' + stk125Label + '] ' + (stkOk ? '✅' : '<span style="color:var(--err);">❌ غير كافٍ</span>') + '</div>';
      }

      var kgCost = Number(document.getElementById('prd-kgcost')?.value || (prod ? prod.raw_cost_kg / 100 : 0));
      var jar250FullCost = (kgCost * 0.25) + costPkg250Egp + costStk250Egp;
      var jar125FullCost = (kgCost * 0.125) + costPkg125Egp + costStk125Egp;
      var totBatchCost = (q250 * jar250FullCost) + (q125 * jar125FullCost);

      var box = document.getElementById('prd-preview');
      if (box) {
        box.innerHTML = '⚖️ إجمالي الوزن المعبأ: ' + fmtWeight(w) +
          ' | 💰 التكلفة النهائية لبرطمان الربع: ' + jar250FullCost.toFixed(2) + ' ج.م' +
          ' | 💰 التكلفة النهائية لبرطمان الثمن: ' + jar125FullCost.toFixed(2) + ' ج.م' +
          ' | 🧾 إجمالي تكلفة الدفعة النهائية: ' + totBatchCost.toFixed(2) + ' ج.م';
      }
    }

    async function saveProduction(andPrint) {
      try {
        var pk250 = S.inventory.packaging.find(function(x) { return Number(x.net_weight_grams) === 250; });
        var pk125 = S.inventory.packaging.find(function(x) { return Number(x.net_weight_grams) === 125; });
        var stk250Val = document.getElementById('prd-stk250')?.value || 'none';
        var stk125Val = document.getElementById('prd-stk125')?.value || 'none';
        var items = [];
        var q250 = Number(document.getElementById('prd-q250').value || 0);
        var q125 = Number(document.getElementById('prd-q125').value || 0);
        if (pk250 && q250 > 0) {
          var noStk250 = (stk250Val === 'none' || stk250Val === '0');
          items.push({
            packaging_type_id: pk250.packaging_type_id,
            quantity_units: q250,
            no_sticker: noStk250,
            sticker_sku_id: noStk250 ? null : Number(stk250Val)
          });
        }
        if (pk125 && q125 > 0) {
          var noStk125 = (stk125Val === 'none' || stk125Val === '0');
          items.push({
            packaging_type_id: pk125.packaging_type_id,
            quantity_units: q125,
            no_sticker: noStk125,
            sticker_sku_id: noStk125 ? null : Number(stk125Val)
          });
        }
        var w = (q250 * 250) + (q125 * 125);
        var res = await api('/api/production', { method:'POST', body:JSON.stringify({
          product_id: document.getElementById('prd-pid').value,
          production_date: document.getElementById('prd-date').value,
          raw_coffee_used_grams: w,
          override_cost_per_kg_piasters: toPiasters(document.getElementById('prd-kgcost').value),
          items: items
        })});
        notify('تمت التعبئة وحساب التكلفة النهائية للمنتج بنجاح!');
        await loadTab('production', false);
        if (andPrint && res.id) await printProduction(res.id);
      } catch (e) { notify(e.message, true); }
    }

    async function editSavedProduction(id) {
      try {
        var d = await api('/api/production/' + id);
        var b = d.batch;
        var items = d.items || [];
        if (!confirm('لتعديل دفعة التعبئة رقم (' + b.batch_number + ')، سيتم عكس حركتها من المخزون وتحميل بياناتها في النموذج أعلى الصفحة لتعديلها وحفظها من جديد. هل تريد المتابعة؟')) return;
        await api('/api/production/' + id, { method: 'DELETE' });
        await loadTab('production', false);
        setTimeout(function() {
          document.getElementById('prd-pid').value = b.product_id;
          document.getElementById('txt-prd-pid').value = b.product_name || '';
          onProdProductChange();
          var q250 = 0, q125 = 0;
          items.forEach(function(it) {
            if (Number(it.net_weight_grams) === 250) {
              q250 += Number(it.quantity_units || 0);
              if (document.getElementById('prd-stk250')) {
                document.getElementById('prd-stk250').value = it.sticker_sku_id ? it.sticker_sku_id : 'none';
              }
            }
            if (Number(it.net_weight_grams) === 125) {
              q125 += Number(it.quantity_units || 0);
              if (document.getElementById('prd-stk125')) {
                document.getElementById('prd-stk125').value = it.sticker_sku_id ? it.sticker_sku_id : 'none';
              }
            }
          });
          document.getElementById('prd-q250').value = q250;
          document.getElementById('prd-q125').value = q125;
          if (b.production_date) document.getElementById('prd-date').value = b.production_date.slice(0,10);
          calcProdPreview();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 50);
      } catch (e) { notify(e.message, true); }
    }

    async function deleteProduction(id) {
      if (!confirm('حذف دفعة الإنتاج وإرجاع البن الخام والعبوات والاستيكرات للمخزون؟')) return;
      await api('/api/production/' + id, { method: 'DELETE' });
      notify('تم حذف الدفعة وعكس كمياتها في المخزون');
      loadTab('production', false);
    }

    function onSaleProductChange() {
      var pid = Number(document.getElementById('si-pid')?.value || 0);
      var tier = document.getElementById('si-tier')?.value || '1';
      var prod = S.products.find(function(p) { return p.id === pid; });
      var effFinalKgCostPiasters = getFinalProductKgCostPiasters(pid);

      if (prod) {
        var kgPiasters = tier === '2' ? prod.sale_price_2_piasters : prod.sale_price_1_piasters;
        var kgInp = document.getElementById('si-kgprice');
        var q250Inp = document.getElementById('si-q250price');
        if (kgInp) kgInp.value = (kgPiasters / 100).toFixed(2);
        if (q250Inp) q250Inp.value = ((kgPiasters * 0.25) / 100).toFixed(2);
        var pctInp = document.getElementById('si-profit-pct');
        if (pctInp) {
          if (effFinalKgCostPiasters > 0 && kgPiasters > 0) {
            pctInp.value = +(((kgPiasters - effFinalKgCostPiasters) / effFinalKgCostPiasters) * 100).toFixed(2);
          } else {
            pctInp.value = tier === '2' ? Number(prod.profit_percent_2 || 0) : Number(prod.profit_percent_1 || 0);
          }
        }
      }
      var f250 = S.inventory.finished.find(function(f) { return f.product_id === pid && Number(f.net_weight_grams) === 250; });
      var f125 = S.inventory.finished.find(function(f) { return f.product_id === pid && Number(f.net_weight_grams) === 125; });
      var totGrams = ((f250?.quantity_units || 0) * 250) + ((f125?.quantity_units || 0) * 125);
      var info = document.getElementById('si-stock-info');
      if (info) {
        info.textContent = '📦 الرصيد المعبأ المتاح بالمخزن: ' + fmtWeight(totGrams) + ' — تفصيله: (' + (f250?.quantity_units || 0) + ') برطمان ربع + (' + (f125?.quantity_units || 0) + ') برطمان ثمن';
      }
      updateSaleCostBanner();
    }

    function setSaleQuickPct(pct) {
      var pctInp = document.getElementById('si-profit-pct');
      if (pctInp) pctInp.value = pct;
      onSaleProfitPctInput();
    }

    function revertSaleInputToSavedProductPrice() {
      var pid = Number(document.getElementById('si-pid')?.value || 0);
      var prod = S.products.find(function(p) { return p.id === pid; });
      if (!prod) return;
      var prevP1 = Number(prod.prev_sale_price_1_piasters || prod.sale_price_1_piasters || 0);
      var kgInp = document.getElementById('si-kgprice');
      var q250Inp = document.getElementById('si-q250price');
      if (kgInp) kgInp.value = (prevP1 / 100).toFixed(2);
      if (q250Inp) q250Inp.value = ((prevP1 * 0.25) / 100).toFixed(2);
      onSaleKgPriceManualInput();
      notify('↩️ تم إرجاع السعر في الفاتورة إلى آخر سعر محفوظ قبل التعديل (' + egp(prevP1) + ')');
    }

    function onSaleProfitPctInput() {
      var pid = Number(document.getElementById('si-pid')?.value || 0);
      var effFinalKgCostEgp = getFinalProductKgCostPiasters(pid) / 100;
      var pct = Number(document.getElementById('si-profit-pct')?.value || 0);
      if (effFinalKgCostEgp > 0) {
        var newKgPrice = +(effFinalKgCostEgp * (1 + (pct / 100))).toFixed(2);
        var kgInp = document.getElementById('si-kgprice');
        var q250Inp = document.getElementById('si-q250price');
        if (kgInp) kgInp.value = newKgPrice;
        if (q250Inp) q250Inp.value = +(newKgPrice * 0.25).toFixed(2);
      }
      updateSaleCostBanner();
    }

    function onSaleKgPriceManualInput() {
      var pid = Number(document.getElementById('si-pid')?.value || 0);
      var effFinalKgCostEgp = getFinalProductKgCostPiasters(pid) / 100;
      var curKgPrice = Number(document.getElementById('si-kgprice')?.value || 0);
      var q250Inp = document.getElementById('si-q250price');
      if (q250Inp) q250Inp.value = curKgPrice > 0 ? +(curKgPrice * 0.25).toFixed(2) : '';
      var pctInp = document.getElementById('si-profit-pct');
      if (effFinalKgCostEgp > 0 && curKgPrice > 0 && pctInp) {
        pctInp.value = +(((curKgPrice - effFinalKgCostEgp) / effFinalKgCostEgp) * 100).toFixed(2);
      }
      updateSaleCostBanner();
    }

    function onSaleQuarterPriceManualInput() {
      var q250Price = Number(document.getElementById('si-q250price')?.value || 0);
      var curKgPrice = +(q250Price * 4).toFixed(2);
      var kgInp = document.getElementById('si-kgprice');
      if (kgInp) kgInp.value = curKgPrice > 0 ? curKgPrice : '';
      var pid = Number(document.getElementById('si-pid')?.value || 0);
      var effFinalKgCostEgp = getFinalProductKgCostPiasters(pid) / 100;
      var pctInp = document.getElementById('si-profit-pct');
      if (effFinalKgCostEgp > 0 && curKgPrice > 0 && pctInp) {
        pctInp.value = +(((curKgPrice - effFinalKgCostEgp) / effFinalKgCostEgp) * 100).toFixed(2);
      }
      updateSaleCostBanner();
    }

    function updateSaleCostBanner() {
      var pid = Number(document.getElementById('si-pid')?.value || 0);
      var prod = S.products.find(function(p) { return p.id === pid; });
      var cost250 = getFinalProductUnitCostPiasters(pid, 250);
      var cost125 = getFinalProductUnitCostPiasters(pid, 125);
      var effFinalKgCost = cost250 * 4;

      var q250 = Number(document.getElementById('si-q250')?.value || 0);
      var q125 = Number(document.getElementById('si-q125')?.value || 0);
      var selFinalCost = (q250 * cost250) + (q125 * cost125);
      var saleKgPiasters = toPiasters(document.getElementById('si-kgprice')?.value || 0);
      var selSale = (q250 * Math.round(saleKgPiasters * 0.25)) + (q125 * Math.round(saleKgPiasters * 0.125));
      var estMargin = selSale - selFinalCost;
      var markupPct = selFinalCost > 0 ? ((estMargin / selFinalCost) * 100).toFixed(1) : '0.0';

      var costBox = document.getElementById('si-cost-info');
      if (costBox && prod) {
        costBox.innerHTML = '🔒 <strong>التكلفة النهائية للمنتج المعبأ (شاملة البن الخام + البرطمان + الاستيكر — تظهر لك فقط ولا تُطبع في الفاتورة):</strong><br/>' +
          '• التكلفة النهائية لبرطمان الربع (0.25 كجم): <strong>' + egp(cost250) + '</strong> | ' +
          'التكلفة النهائية لبرطمان الثمن (0.125 كجم): <strong>' + egp(cost125) + '</strong> | ' +
          'ما يعادل تكلفة كيلو معبأ: <strong>' + egp(effFinalKgCost) + '</strong>' +
          ((q250 > 0 || q125 > 0)
            ? ('<br/>💡 <strong>إجمالي تكلفة الكمية المختارة النهائية: ' + egp(selFinalCost) + '</strong> | <strong>سعر بيعها: ' + egp(selSale) + '</strong> | 📈 <strong>هامش الربح الصافي للبند: <span style="color:var(--ok);">' + egp(estMargin) + ' (نسبة ربح ' + markupPct + '% فوق التكلفة النهائية)</span></strong>')
            : '');
      }
    }

    function onSaleWeightInput() {
      var wKg = Number(document.getElementById('si-weight-kg')?.value || 0);
      var grams = Math.round(wKg * 1000);
      if (grams >= 0) {
        document.getElementById('si-q250').value = Math.floor(grams / 250);
        document.getElementById('si-q125').value = Math.round((grams % 250) / 125);
        updateSaleCostBanner();
      }
    }

    function onSaleJarsInput() {
      var q250 = Number(document.getElementById('si-q250')?.value || 0);
      var q125 = Number(document.getElementById('si-q125')?.value || 0);
      document.getElementById('si-weight-kg').value = gramsToKgNum((q250 * 250) + (q125 * 125));
      updateSaleCostBanner();
    }

    function addSaleWeightItem() {
      var pid = Number(document.getElementById('si-pid')?.value || 0);
      var prod = S.products.find(function(p) { return p.id === pid; });
      if (!prod) return notify('اختر الصنف أولًا', true);

      var q250 = Math.max(0, Math.round(Number(document.getElementById('si-q250')?.value || 0)));
      var q125 = Math.max(0, Math.round(Number(document.getElementById('si-q125')?.value || 0)));
      var weightGrams = (q250 * 250) + (q125 * 125);
      if (weightGrams <= 0) return notify('حدد الوزن بالكيلو (مثل 1 أو 1.25 أو 0.25) أو عدد برطمانات الربع والثمن', true);

      var kgPricePiasters = toPiasters(document.getElementById('si-kgprice')?.value || 0);
      var pk250 = S.inventory.packaging.find(function(x) { return Number(x.net_weight_grams) === 250; });
      var pk125 = S.inventory.packaging.find(function(x) { return Number(x.net_weight_grams) === 125; });
      var cost250 = getFinalProductUnitCostPiasters(pid, 250);
      var cost125 = getFinalProductUnitCostPiasters(pid, 125);

      if (S.editingSaleIdx >= 0) {
        S.saleItems.splice(S.editingSaleIdx, 1);
        S.editingSaleIdx = -1;
      }

      if (q250 > 0 && pk250) {
        var unitPrice250 = Math.round(kgPricePiasters * 0.25);
        S.saleItems.push({
          product_id: pid, packaging_type_id: pk250.packaging_type_id,
          name: prod.name, pkg: 'ربع كيلو (0.25 كجم)',
          quantity_units: q250, weight_grams: q250 * 250,
          kg_price_piasters: kgPricePiasters,
          unit_cost_piasters: cost250,
          unit_sale_price_piasters: unitPrice250,
          line_total_piasters: q250 * unitPrice250
        });
      }
      if (q125 > 0 && pk125) {
        var unitPrice125 = Math.round(kgPricePiasters * 0.125);
        S.saleItems.push({
          product_id: pid, packaging_type_id: pk125.packaging_type_id,
          name: prod.name, pkg: 'ثمن كيلو (0.125 كجم)',
          quantity_units: q125, weight_grams: q125 * 125,
          kg_price_piasters: kgPricePiasters,
          unit_cost_piasters: cost125,
          unit_sale_price_piasters: unitPrice125,
          line_total_piasters: q125 * unitPrice125
        });
      }
      renderMainOnly();
      setTimeout(function() { onSaleProductChange(); }, 20);
    }

    function editSaleItem(idx) {
      var it = S.saleItems[idx];
      if (!it) return;
      S.editingSaleIdx = idx;
      renderMainOnly();
      setTimeout(function() {
        document.getElementById('si-pid').value = it.product_id;
        document.getElementById('txt-si-pid').value = it.name;
        document.getElementById('si-weight-kg').value = gramsToKgNum(it.weight_grams);
        document.getElementById('si-q250').value = it.weight_grams === it.quantity_units * 250 ? it.quantity_units : 0;
        document.getElementById('si-q125').value = it.weight_grams === it.quantity_units * 125 ? it.quantity_units : 0;
        document.getElementById('si-kgprice').value = (it.kg_price_piasters / 100).toFixed(2);
        onSaleKgPriceManualInput();
      }, 30);
    }

    function cancelEditSaleItem() {
      S.editingSaleIdx = -1;
      renderMainOnly();
    }

    function removeSaleItem(idx) {
      S.saleItems.splice(idx, 1);
      if (S.editingSaleIdx === idx) S.editingSaleIdx = -1;
      renderMainOnly();
    }

    async function editSavedSale(id) {
      try {
        var d = await api('/api/sales/' + id);
        var inv = d.invoice;
        var items = d.items || [];
        if (!confirm('لتعديل فاتورة المبيعات رقم (' + inv.invoice_number + ')، سيتم إرجاع برطماناتها للمخزون وتحميل بياناتها في النموذج أعلى الصفحة لتعديلها وحفظها من جديد. هل تريد المتابعة؟')) return;
        await api('/api/sales/' + id, { method: 'DELETE' });
        S.saleItems = items.map(function(it) {
          var netW = Number(it.net_weight_grams || 250);
          var w = Number(it.quantity_units) * netW;
          var kgP = netW === 125 ? (Number(it.unit_sale_price_piasters)*8) : (Number(it.unit_sale_price_piasters)*4);
          var finalCost = Number(it.unit_cost_piasters || 0) || getFinalProductUnitCostPiasters(it.product_id, netW);
          return {
            product_id: it.product_id,
            packaging_type_id: it.packaging_type_id,
            name: it.product_name,
            pkg: it.packaging_name,
            quantity_units: Number(it.quantity_units),
            weight_grams: w,
            kg_price_piasters: kgP,
            unit_cost_piasters: finalCost,
            unit_sale_price_piasters: Number(it.unit_sale_price_piasters),
            line_total_piasters: Number(it.line_total_piasters)
          };
        });
        await loadTab('sales', false);
        setTimeout(function() {
          if (inv.customer_id) document.getElementById('s-cid').value = inv.customer_id;
          if (inv.invoice_date) document.getElementById('s-date').value = inv.invoice_date.slice(0,10);
          document.getElementById('s-disc').value = (Number(inv.discount_piasters||0)/100).toFixed(2);
          document.getElementById('s-paid').value = (Number(inv.paid_piasters||0)/100).toFixed(2);
          document.getElementById('s-notes').value = inv.notes || '';
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 40);
      } catch (e) { notify(e.message, true); }
    }

    function onSaleCustomerSelect() {
      var cid = Number(document.getElementById('s-cid')?.value || 0);
      var c = (S.customers || []).find(function(x) { return Number(x.id) === cid; });
      var addrEl = document.getElementById('s-caddr');
      var phEl = document.getElementById('s-cphone');
      if (c) {
        if (addrEl) addrEl.value = c.address || '';
        if (phEl) phEl.value = c.phone || '';
      } else {
        if (addrEl) addrEl.value = '';
        if (phEl) phEl.value = '';
      }
    }

    async function saveSale(andPrint, mode) {
      try {
        var res = await api('/api/sales', { method:'POST', body:JSON.stringify({
          customer_id: document.getElementById('s-cid').value || null,
          new_customer_name: document.getElementById('s-cname').value,
          new_customer_phone: document.getElementById('s-cphone').value,
          new_customer_address: document.getElementById('s-caddr')?.value || '',
          invoice_date: document.getElementById('s-date').value,
          discount_piasters: toPiasters(document.getElementById('s-disc').value),
          paid_piasters: toPiasters(document.getElementById('s-paid').value),
          notes: document.getElementById('s-notes').value,
          items: S.saleItems
        })});
        S.saleItems = [];
        S.editingSaleIdx = -1;
        notify('تم حفظ وترحيل الفاتورة بنجاح');
        if (andPrint && res.id) {
          if (mode === true) {
            await directBluetoothPrintSale(res.id);
          } else if (mode === 'rawbt') {
            await printViaRawBtBridge(res.id);
          } else if (mode === 'share') {
            await shareInvoiceToPrinterApp(res.id);
          } else if (mode === 'image') {
            await downloadInvoiceImage(res.id);
          } else {
            await printInvoice(res.id, true);
          }
        }
        loadTab('sales', false);
      } catch (e) { notify(e.message, true); }
    }

    async function deleteSale(id) {
      if (!confirm('حذف هذه الفاتورة وإرجاع البرطمانات المباعة للمخزون؟')) return;
      await api('/api/sales/' + id, { method: 'DELETE' });
      notify('تم حذف الفاتورة وإرجاع المخزون');
      loadTab('sales', false);
    }

    function thermalSafe(value) {
      return String(value === undefined || value === null || value === '' ? '-' : value)
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    }

    function thermalHeader(docTitle, docNo, docDate) {
      var st = S.settings || {};
      var logoSrc = st.logo_data_url || DEFAULT_LOGO_DATA_URL;
      var logoHtml = '<img class="tr-logo" src="' + logoSrc + '" alt="Logo" />';
      return '<div class="tr-center">' +
        logoHtml +
        '<div class="tr-title">' + thermalSafe(st.brand_name_ar || 'مَلَكِي') + '</div>' +
        '<div class="tr-subtitle">MALAKY COFFEE</div>' +
        (st.company_phone ? '<div class="tr-small">هاتف: ' + thermalSafe(st.company_phone) + '</div>' : '') +
        (st.company_address ? '<div class="tr-small">' + thermalSafe(st.company_address) + '</div>' : '') +
        '</div>' +
        '<div class="tr-inv-bar"><span>' + thermalSafe(docTitle) + (docNo ? ': ' + thermalSafe(docNo) : '') + '</span><span>' + thermalSafe(docDate || '') + '</span></div>';
    }

    function thermalPair(label, value, extraClass) {
      return '<div class="tr-line ' + (extraClass || '') + '"><span>' + thermalSafe(label) + '</span><strong>' + thermalSafe(value) + '</strong></div>';
    }

    function showThermalSaleModal(saleId, title, number, date, bodyHtml) {
      S.lastThermalSaleId = saleId;
      setPrintPageStyle('thermal');
      var st = S.settings || {};
      var qrHtml = st.qr_data_url ? ('<img class="tr-qr" src="' + st.qr_data_url + '" alt="QR" />') : '';
      var actionsEl = document.getElementById('modal-print-actions');
      if (actionsEl) {
        actionsEl.innerHTML =
          '<div style="display:flex;gap:6px;flex-wrap:wrap;">' +
            '<button class="btn" style="background:var(--ok);" onclick="directBluetoothPrintSale(' + (saleId || 'null') + ')">🖨️ بلوتوث مباشر</button>' +
            '<button class="btn" style="background:#7c3aed;color:#fff;" onclick="printViaRawBtBridge(' + (saleId || 'null') + ')">📲 طباعة RawBT</button>' +
            '<button class="btn" style="background:#0284c7;color:#fff;" onclick="shareInvoiceToPrinterApp(' + (saleId || 'null') + ')">📤 إرسال لتطبيق الطابعة</button>' +
            '<button class="btn" onclick="window.print()">🖨️ حراري عادي</button>' +
            '<button class="btn btn-sec" onclick="downloadInvoiceImage(' + (saleId || 'null') + ')">🖼️ صورة</button>' +
          '</div>' +
          '<button class="btn btn-del" onclick="document.getElementById(\'invoice-modal\').style.display=\'none\'">✖ إغلاق</button>';
      }
      document.getElementById('invoice-print-content').innerHTML =
        '<div class="thermal-receipt">' + thermalHeader(title, number, date) + bodyHtml +
        '<div class="tr-solid-rule"></div>' + qrHtml +
        '<div class="tr-center" style="font-size:15px;font-weight:900;">' + thermalSafe(st.invoice_slogan || 'مَلَكِي.. قهوة تروق مزاجك') + '</div>' +
        '<div class="tr-center tr-small">شكراً لتعاملكم معنا</div></div>';
      document.getElementById('invoice-modal').style.display = 'flex';
    }

    function showA4Print(docTitle, docNo, docDate, metaHtml, bodyHtml, compactFit, rowCount) {
      setPrintPageStyle(compactFit ? 'a4-fit' : 'a4');
      var st = S.settings || {};
      var logoSrc = st.logo_data_url || DEFAULT_LOGO_DATA_URL;
      var modalBox = document.querySelector('#invoice-modal .modal-box');
      if (modalBox) modalBox.classList.toggle('modal-wide', Boolean(compactFit));
      var actionsEl = document.getElementById('modal-print-actions');
      if (actionsEl) {
        actionsEl.innerHTML =
          '<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;">' +
            '<button class="btn" onclick="setPrintPageStyle(\'' + (compactFit ? 'a4-fit' : 'a4') + '\');window.print()">🖨️ ' + (compactFit ? 'طباعة التقرير كامل في ورقة واحدة (A4 بالعرض)' : 'طباعة التقرير بلوجو مَلَكِي (A4)') + '</button>' +
          '</div>' +
          '<button class="btn btn-del" onclick="document.getElementById(\'invoice-modal\').style.display=\'none\'">✖ إغلاق المعاينة</button>';
      }
      document.getElementById('invoice-print-content').innerHTML =
        '<div class="a4-sheet ' + (compactFit ? 'a4-compact-fit' : '') + '">' +
          '<div class="a4-header">' +
            '<div class="a4-header-brand">' +
              '<img class="a4-logo" src="' + logoSrc + '" alt="مَلَكِي" />' +
              '<div>' +
                '<div class="a4-title">' + thermalSafe(st.brand_name_ar || 'مَلَكِي | MALAKY') + ' — ' + thermalSafe(docTitle) + '</div>' +
                '<div style="font-size:12.5px;font-weight:700;margin-top:3px;">' +
                  (st.company_phone ? ('هاتف: ' + thermalSafe(st.company_phone) + ' | ') : '') +
                  (st.company_address ? ('العنوان: ' + thermalSafe(st.company_address)) : 'قهوة تروق مزاجك') +
                '</div>' +
              '</div>' +
            '</div>' +
            '<div style="text-align:left;font-weight:800;font-size:12.5px;">' +
              (docNo ? ('<div>رقم المستند: ' + thermalSafe(docNo) + '</div>') : '') +
              (docDate ? ('<div>التاريخ: ' + thermalSafe(docDate) + '</div>') : '') +
            '</div>' +
          '</div>' +
          (metaHtml ? ('<div class="a4-meta">' + metaHtml + '</div>') : '') +
          bodyHtml +
          '<div class="a4-footer">' +
            '<span>' + thermalSafe(st.invoice_slogan || 'مَلَكِي.. قهوة تروق مزاجك') + '</span>' +
            '<span>طُبع بتاريخ: ' + new Date().toISOString().slice(0,10) + '</span>' +
          '</div>' +
        '</div>';
      document.getElementById('invoice-modal').style.display = 'flex';
    }

    async function printInvoice(id, autoBrowserPrint) {
      try {
        var d = await api('/api/sales/' + id);
        var inv = d.invoice, items = d.items || [];
        var body = '<div class="tr-box">' +
          thermalPair('العميل:', inv.customer_name) +
          (inv.customer_phone ? thermalPair('الهاتف:', inv.customer_phone) : '') +
          (inv.customer_address ? thermalPair('العنوان:', inv.customer_address) : '') +
          '</div><div class="tr-tbl-head"><span>الصنف والكمية</span><span>الإجمالي</span></div><div>';
        items.forEach(function(i) {
          var weight = Number(i.quantity_units || 0) * Number(i.net_weight_grams || 250);
          body += '<div class="tr-item"><div class="tr-item-top"><span>' + thermalSafe(i.product_name) + '</span><span>' + egp(i.line_total_piasters) + '</span></div>' +
            '<div class="tr-item-sub">' + thermalSafe(i.packaging_name || fmtWeight(weight)) + ' × ' + thermalSafe(i.quantity_units) + ' (' + thermalSafe(fmtWeight(weight)) + ') — بسعر: ' + egp(i.unit_sale_price_piasters) + '</div></div>';
        });
        body += '</div><div class="tr-solid-rule"></div>' +
          thermalPair('الإجمالي', egp(inv.subtotal_piasters)) +
          thermalPair('الخصم', egp(inv.discount_piasters)) +
          thermalPair('الصافي', egp(inv.total_piasters), 'tr-total') +
          thermalPair('المدفوع', egp(inv.paid_piasters)) +
          thermalPair('المتبقي', egp(Number(inv.total_piasters) - Number(inv.paid_piasters)), 'tr-total');
        showThermalSaleModal(id, 'فاتورة مبيعات', inv.invoice_number, inv.invoice_date, body);
        if (autoBrowserPrint) {
          setTimeout(function() { window.print(); }, 250);
        }
      } catch (e) { notify(e.message, true); }
    }

    async function printPurchase(id) {
      try {
        var d = await api('/api/purchases/' + id);
        var pur = d.purchase, items = d.items || [];
        if (!pur) return notify('فاتورة المشتريات غير موجودة', true);
        var meta = '<div>المورد: <strong>' + thermalSafe(pur.supplier_name || 'مورد عام') + '</strong></div>' +
          '<div>رقم الفاتورة: <strong>' + thermalSafe(pur.purchase_number) + '</strong></div>' +
          '<div>تاريخ الشراء: <strong>' + thermalSafe(pur.purchase_date) + '</strong></div>';
        var rowsHtml = items.map(function(it, idx) {
          var label = it.notes || it.product_name || (it.packaging_name ? 'عبوات ' + it.packaging_name : 'بند مشتريات');
          var qty = it.item_type === 'raw_coffee' ? (Number(it.quantity || 0) / 1000).toFixed(3).replace(/0+$/,'').replace(/\.$/,'') + ' كجم' : Number(it.quantity || 0) + ' وحدة';
          return '<tr><td>' + (idx + 1) + '</td><td><strong>' + thermalSafe(label) + '</strong></td><td>' + thermalSafe(qty) + '</td><td>' + egp(it.unit_cost_piasters) + '</td><td><strong>' + egp(it.line_total_piasters) + '</strong></td></tr>';
        }).join('');
        var rem = Math.max(0, Number(pur.total_piasters) - Number(pur.paid_piasters));
        var tableHtml = '<table class="a4-table">' +
          '<thead><tr><th>#</th><th>الصنف / البند</th><th>الكمية / الوزن</th><th>تكلفة الكيلو / الوحدة</th><th>الإجمالي</th></tr></thead>' +
          '<tbody>' + rowsHtml + '</tbody>' +
          '<tfoot>' +
            '<tr><td colspan="4">إجمالي الفاتورة قبل الخصم</td><td>' + egp(pur.subtotal_piasters) + '</td></tr>' +
            '<tr><td colspan="4">الخصم</td><td>' + egp(pur.discount_piasters) + '</td></tr>' +
            '<tr><td colspan="4">الصافي النهائي</td><td>' + egp(pur.total_piasters) + '</td></tr>' +
            '<tr><td colspan="4">المدفوع للمورد</td><td>' + egp(pur.paid_piasters) + '</td></tr>' +
            '<tr><td colspan="4">المتبقي للمورد</td><td>' + egp(rem) + '</td></tr>' +
          '</tfoot></table>';
        showA4Print('فاتورة مشتريات', pur.purchase_number, pur.purchase_date, meta, tableHtml);
      } catch (e) { notify(e.message, true); }
    }

    async function printProduction(id) {
      try {
        var d = await api('/api/production/' + id);
        var batch = d.batch, items = d.items || [];
        if (!batch) return notify('دفعة الإنتاج غير موجودة', true);
        var meta = '<div>التوليفة / الصنف: <strong>' + thermalSafe(batch.product_name) + '</strong></div>' +
          '<div>الوزن المعبأ الكلي: <strong>' + thermalSafe(fmtWeight(batch.raw_coffee_used_grams || batch.raw_coffee_grams)) + '</strong></div>' +
          '<div>تكلفة البن الخام: <strong>' + egp(batch.raw_coffee_cost_piasters) + '</strong></div>' +
          '<div>تكلفة العبوات + الاستيكرات: <strong>' + egp(Number(batch.packaging_cost_piasters||0) + Number(batch.sticker_cost_piasters||0)) + '</strong></div>';
        var rowsHtml = items.map(function(it, idx) {
          var stkLabel = !it.sticker_sku_id ? 'بدون استيكر' : (it.sticker_product_name ? (it.sticker_product_name + ' (' + (it.packaging_name||'') + ')') : (it.sticker_sku || 'استيكر التوليفة'));
          return '<tr><td>' + (idx + 1) + '</td><td><strong>' + thermalSafe(it.packaging_name || 'عبوة') + '</strong></td><td>' + thermalSafe(stkLabel) + '</td><td>' + thermalSafe(it.quantity_units) + ' برطمان</td><td>' + thermalSafe(fmtWeight(it.weight_grams)) + '</td><td>' + egp(it.total_item_cost_piasters) + '</td></tr>';
        }).join('');
        var tableHtml = '<table class="a4-table">' +
          '<thead><tr><th>#</th><th>نوع العبوة</th><th>الاستيكر</th><th>العدد المعبأ</th><th>إجمالي الوزن</th><th>التكلفة الكلية للبند</th></tr></thead>' +
          '<tbody>' + rowsHtml + '</tbody>' +
          '<tfoot><tr><td colspan="5">إجمالي تكلفة دفعة الإنتاج والتعبئة النهائية</td><td>' + egp(batch.total_cost_piasters) + '</td></tr></tfoot>' +
        '</table>';
        showA4Print('إذن إنتاج وتعبئة (A4)', batch.batch_number, batch.production_date, meta, tableHtml);
      } catch (e) { notify(e.message, true); }
    }

    function printExpense(id) {
      var e = (S.expenses || []).find(function(x) { return Number(x.id) === Number(id); });
      if (!e) return notify('المصروف غير موجود في السجل الحالي', true);
      var tableHtml = '<table class="a4-table">' +
        '<thead><tr><th>التصنيف</th><th>البيان / الوصف</th><th>طريقة الدفع</th><th>المبلغ</th></tr></thead>' +
        '<tbody><tr><td><strong>' + thermalSafe(e.category_name) + '</strong></td><td>' + thermalSafe(e.description || '-') + '</td><td>نقدي</td><td><strong>' + egp(e.amount_piasters) + '</strong></td></tr></tbody>' +
      '</table>';
      showA4Print('سند صرف نقدية / مصروف', 'EXP-' + e.id, e.expense_date, '', tableHtml);
    }

    function printCashMovement(id) {
      var m = (S.cash && S.cash.movements || []).find(function(x) { return Number(x.id) === Number(id); });
      if (!m) return notify('حركة الخزنة غير موجودة في السجل الحالي', true);
      var tableHtml = '<table class="a4-table">' +
        '<thead><tr><th>نوع الحركة</th><th>الاتجاه</th><th>البيان</th><th>المبلغ</th></tr></thead>' +
        '<tbody><tr><td><strong>' + thermalSafe(m.movement_type) + '</strong></td><td>' + (m.direction === 'in' ? 'مقبوضات (+)' : 'مدفوعات (-)') + '</td><td>' + thermalSafe(m.description || '-') + '</td><td><strong>' + egp(m.amount_piasters) + '</strong></td></tr></tbody>' +
      '</table>';
      showA4Print('سند حركة خزنة', 'CASH-' + m.id, m.movement_date, '', tableHtml);
    }

    function printCollectionReceipt(customerName, amount, notes, date) {
      var tableHtml = '<table class="a4-table">' +
        '<thead><tr><th>استلمنا من السيد / العميل</th><th>البيان</th><th>طريقة الدفع</th><th>المبلغ المحصل</th></tr></thead>' +
        '<tbody><tr><td><strong>' + thermalSafe(customerName || 'عميل') + '</strong></td><td>' + thermalSafe(notes || 'سداد من الحساب') + '</td><td>نقدي</td><td><strong>' + egp(amount) + '</strong></td></tr></tbody>' +
      '</table>';
      showA4Print('إيصال استلام نقدية / تحصيل', 'REC-' + Date.now().toString().slice(-5), date || new Date().toISOString().slice(0,10), '', tableHtml);
    }

    async function openMalakyMenuModal() {
      try {
        if (!S.products || !S.products.length) {
          var res = await cachedGet('/api/products', 30000);
          S.products = res.products || [];
        }
        setPrintPageStyle('a4');
        renderMalakyMenuModalContent();
        document.getElementById('invoice-modal').style.display = 'flex';
      } catch (e) { notify(e.message, true); }
    }

    function renderMalakyMenuModalContent() {
      var st = S.settings || {};
      var theme = S.menuTheme || 'dark';
      var tier = S.menuTier || '1';
      var colsMode = S.menuCols || 'all';
      var logoSrc = st.logo_data_url || DEFAULT_LOGO_DATA_URL;
      var brandAr = st.brand_name_ar || 'مَلَكِي';
      var slogan = st.invoice_slogan || 'مَلَكِي.. قهوة تروق مزاجك';
      var phone = st.company_phone || '';
      var addr = st.company_address || '';

      var actionsEl = document.getElementById('modal-print-actions');
      if (actionsEl) {
        actionsEl.innerHTML =
          '<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;width:100%;justify-content:space-between;">' +
            '<div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center;">' +
              '<select style="width:auto;min-height:36px;font-size:12.5px;" onchange="S.menuTheme=this.value;renderMalakyMenuModalContent()">' +
                '<option value="dark" ' + (theme==='dark'?'selected':'') + '>🌙 ستايل ملكي غامق فاخر × ذهبي (طابع اللوجو)</option>' +
                '<option value="cream" ' + (theme==='cream'?'selected':'') + '>🎨 ستايل ملكي كريمي × ذهبي</option>' +
              '</select>' +
              '<select style="width:auto;min-height:36px;font-size:12.5px;" onchange="S.menuTier=this.value;renderMalakyMenuModalContent()">' +
                '<option value="1" ' + (tier==='1'?'selected':'') + '>💵 أسعار البيع (الشريحة 1)</option>' +
                '<option value="2" ' + (tier==='2'?'selected':'') + '>💵 أسعار البيع (الشريحة 2)</option>' +
              '</select>' +
              '<select style="width:auto;min-height:36px;font-size:12.5px;" onchange="S.menuCols=this.value;renderMalakyMenuModalContent()">' +
                '<option value="all" ' + (colsMode==='all'?'selected':'') + '>⚖️ عرض (ثمن 125ج + ربع 250ج + كيلو)</option>' +
                '<option value="jars" ' + (colsMode==='jars'?'selected':'') + '>🏺 عرض العبوات فقط (ثمن 125ج + ربع 250ج)</option>' +
                '<option value="kg_q" ' + (colsMode==='kg_q'?'selected':'') + '>📦 عرض (ربع 250ج + كيلو)</option>' +
              '</select>' +
            '</div>' +
            '<div style="display:flex;gap:6px;flex-wrap:wrap;">' +
              '<button class="btn" onclick="window.print()">🖨️ طباعة المنيو (A4 ملون / PDF)</button>' +
              '<button class="btn" style="background:var(--ok);color:#fff;" onclick="downloadMalakyMenuImage(false)">🖼️ تحميل المنيو كصورة عالية الجودة</button>' +
              '<button class="btn" style="background:#0284c7;color:#fff;" onclick="downloadMalakyMenuImage(true)">📤 مشاركة المنيو (واتساب)</button>' +
              '<button class="btn btn-del" onclick="document.getElementById(\'invoice-modal\').style.display=\'none\'">✖ إغلاق</button>' +
            '</div>' +
          '</div>';
      }

      var activeProds = (S.products || []).filter(function(p) { return Number(p.sale_price_1_piasters || 0) > 0 || Number(p.sale_price_2_piasters || 0) > 0; });
      if (!activeProds.length) activeProds = S.products || [];

      var show125 = (colsMode === 'all' || colsMode === 'jars');
      var show250 = true;
      var showKg = (colsMode === 'all' || colsMode === 'kg_q');

      var rowsHtml = activeProds.map(function(p) {
        var kgPiasters = tier === '2'
          ? (Number(p.sale_price_2_piasters || p.sale_price_1_piasters || 0))
          : Number(p.sale_price_1_piasters || 0);
        var p125 = Math.round(kgPiasters * 0.125);
        var p250 = Math.round(kgPiasters * 0.25);

        return '<tr class="mm-row">' +
          '<td>☕ ' + thermalSafe(p.name) + '</td>' +
          (show125 ? ('<td><span class="mm-price-badge">' + egp(p125) + '</span></td>') : '') +
          (show250 ? ('<td><span class="mm-price-badge highlight">' + egp(p250) + '</span></td>') : '') +
          (showKg ? ('<td><span class="mm-price-badge">' + egp(kgPiasters) + '</span></td>') : '') +
        '</tr>';
      }).join('') || '<tr class="mm-row"><td colspan="4" style="text-align:center;">لا توجد أصناف مسجلة بعد</td></tr>';

      var qrHtml = st.qr_data_url
        ? ('<div style="background:#fff;padding:5px;border-radius:8px;border:2px solid #d4af37;"><img src="' + st.qr_data_url + '" style="width:68px;height:68px;object-fit:contain;display:block;" /></div>')
        : '';

      var menuHtml =
        '<div id="malaky-menu-printable" class="malaky-menu-sheet theme-' + theme + '">' +
          '<div class="mm-header">' +
            '<div class="mm-logo-wrap"><img src="' + logoSrc + '" alt="Malaky Logo" /></div>' +
            '<div class="mm-brand-title">👑 ' + thermalSafe(brandAr) + ' 👑</div>' +
            '<div class="mm-brand-sub">MALAKY COFFEE &amp; HONEY</div>' +
            '<div class="mm-slogan-pill">✦ ' + thermalSafe(slogan) + ' ✦</div>' +
          '</div>' +
          '<div class="mm-ribbon">📜 قائمة أصناف وأسعار القهوة الملكية المعبأة والطازجة</div>' +
          '<table class="mm-table">' +
            '<thead><tr>' +
              '<th>☕ الصنف / التوليفة الملكية</th>' +
              (show125 ? '<th>🏺 عبوة ثمن كيلو (125 جم)</th>' : '') +
              (show250 ? '<th>🏺 عبوة ربع كيلو (250 جم)</th>' : '') +
              (showKg ? '<th>⚖️ سعر الكيلو (1000 جم)</th>' : '') +
            '</tr></thead>' +
            '<tbody>' + rowsHtml + '</tbody>' +
          '</table>' +
          '<div class="mm-footer">' +
            '<div style="line-height:1.8;">' +
              '<div style="font-size:16px;font-weight:900;">👑 ' + thermalSafe(brandAr) + ' — ' + thermalSafe(slogan) + '</div>' +
              (phone ? ('<div style="font-size:14px;font-weight:800;">📞 للطلبات والتوصيل: ' + thermalSafe(phone) + '</div>') : '') +
              (addr ? ('<div style="font-size:13px;font-weight:700;">📍 العنوان: ' + thermalSafe(addr) + '</div>') : '') +
            '</div>' +
            qrHtml +
          '</div>' +
        '</div>';

      document.getElementById('invoice-print-content').innerHTML = menuHtml;
    }

    async function downloadMalakyMenuImage(shareMode) {
      try {
        notify('🎨 جارٍ تجهيز صورة منيو مَلَكِي بجودة عالية...');
        var st = S.settings || {};
        var theme = S.menuTheme || 'dark';
        var tier = S.menuTier || '1';
        var colsMode = S.menuCols || 'all';
        var isDark = (theme === 'dark');

        var activeProds = (S.products || []).filter(function(p) { return Number(p.sale_price_1_piasters || 0) > 0 || Number(p.sale_price_2_piasters || 0) > 0; });
        if (!activeProds.length) activeProds = S.products || [];

        var show125 = (colsMode === 'all' || colsMode === 'jars');
        var show250 = true;
        var showKg = (colsMode === 'all' || colsMode === 'kg_q');

        var logoSrc = st.logo_data_url || DEFAULT_LOGO_DATA_URL;
        var imgs = await Promise.all([loadImageElement(logoSrc), loadImageElement(st.qr_data_url)]);
        var logoImg = imgs[0];
        var qrImg = imgs[1];

        var W = 1080;
        var rowH = 74;
        var H = 470 + (activeProds.length * rowH) + 170;
        var canvas = document.createElement('canvas');
        canvas.width = W;
        canvas.height = H;
        var ctx = canvas.getContext('2d');
        ctx.direction = 'rtl';
        ctx.textBaseline = 'middle';

        var bgGrad = ctx.createLinearGradient(0, 0, 0, H);
        if (isDark) {
          bgGrad.addColorStop(0, '#120d09');
          bgGrad.addColorStop(1, '#22160e');
        } else {
          bgGrad.addColorStop(0, '#fdfaf3');
          bgGrad.addColorStop(1, '#f4ead8');
        }
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, W, H);

        ctx.strokeStyle = '#8c5a2b';
        ctx.lineWidth = 10;
        ctx.strokeRect(18, 18, W - 36, H - 36);
        ctx.strokeStyle = '#d4af37';
        ctx.lineWidth = 3;
        ctx.strokeRect(30, 30, W - 60, H - 60);

        var hdrGrad = ctx.createLinearGradient(48, 48, W - 48, 290);
        hdrGrad.addColorStop(0, '#1b0f08');
        hdrGrad.addColorStop(0.5, '#3d2211');
        hdrGrad.addColorStop(1, '#1b0f08');
        ctx.fillStyle = hdrGrad;
        ctx.fillRect(48, 48, W - 96, 245);
        ctx.strokeStyle = '#d4af37';
        ctx.lineWidth = 3;
        ctx.strokeRect(48, 48, W - 96, 245);

        ctx.save();
        ctx.beginPath();
        ctx.arc(W / 2, 112, 48, 0, Math.PI * 2);
        ctx.fillStyle = '#0b0806';
        ctx.fill();
        ctx.lineWidth = 4;
        ctx.strokeStyle = '#d4af37';
        ctx.stroke();
        ctx.clip();
        if (logoImg) {
          ctx.drawImage(logoImg, (W / 2) - 46, 66, 92, 92);
        }
        ctx.restore();

        ctx.textAlign = 'center';
        ctx.fillStyle = '#f6d786';
        ctx.font = '900 40px "Cairo", Tahoma, sans-serif';
        ctx.fillText('👑 ' + (st.brand_name_ar || 'مَلَكِي') + ' 👑', W / 2, 192);

        ctx.fillStyle = '#e5c168';
        ctx.font = '800 18px "Cairo", Tahoma, sans-serif';
        ctx.fillText('MALAKY COFFEE & HONEY', W / 2, 228);

        ctx.fillStyle = '#d4af37';
        ctx.fillRect((W / 2) - 190, 246, 380, 34);
        ctx.fillStyle = '#1e1108';
        ctx.font = '900 19px "Cairo", Tahoma, sans-serif';
        ctx.fillText('✦ ' + (st.invoice_slogan || 'مَلَكِي.. قهوة تروق مزاجك') + ' ✦', W / 2, 263);

        ctx.fillStyle = isDark ? '#2f1e13' : '#efe4d2';
        ctx.fillRect(48, 308, W - 96, 48);
        ctx.strokeStyle = '#d4af37';
        ctx.lineWidth = 2;
        ctx.strokeRect(48, 308, W - 96, 48);
        ctx.fillStyle = isDark ? '#f6d786' : '#5c3415';
        ctx.font = '900 24px "Cairo", Tahoma, sans-serif';
        ctx.fillText('📜 قائمة أصناف وأسعار القهوة الملكية', W / 2, 332);

        var y = 372;
        ctx.fillStyle = '#2b180c';
        ctx.fillRect(48, y, W - 96, 54);
        ctx.strokeStyle = '#d4af37';
        ctx.strokeRect(48, y, W - 96, 54);

        var priceCols = [];
        if (show125) priceCols.push({ key: '125', label: 'ثمن كيلو (125 جم)' });
        if (show250) priceCols.push({ key: '250', label: 'ربع كيلو (250 جم)' });
        if (showKg) priceCols.push({ key: '1000', label: 'سعر الكيلو (1 كجم)' });

        ctx.fillStyle = '#f6d786';
        ctx.font = '900 21px "Cairo", Tahoma, sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText('☕ الصنف / التوليفة الملكية', W - 70, y + 27);

        var colZoneW = 560;
        var singleColW = Math.floor(colZoneW / Math.max(1, priceCols.length));
        ctx.textAlign = 'center';
        priceCols.forEach(function(col, idx) {
          var cx = 68 + (colZoneW - (idx * singleColW) - (singleColW / 2));
          ctx.fillText(col.label, cx, y + 27);
        });

        y += 64;

        activeProds.forEach(function(p, rIdx) {
          var kgPiasters = tier === '2'
            ? Number(p.sale_price_2_piasters || p.sale_price_1_piasters || 0)
            : Number(p.sale_price_1_piasters || 0);
          var vals = {
            '125': egp(Math.round(kgPiasters * 0.125)),
            '250': egp(Math.round(kgPiasters * 0.25)),
            '1000': egp(kgPiasters)
          };

          ctx.fillStyle = isDark
            ? (rIdx % 2 === 0 ? '#21150d' : '#2c1c11')
            : (rIdx % 2 === 0 ? '#ffffff' : '#faf3e6');
          ctx.fillRect(48, y, W - 96, 62);
          ctx.strokeStyle = '#d4af37';
          ctx.lineWidth = 1.5;
          ctx.strokeRect(48, y, W - 96, 62);

          ctx.fillStyle = '#d4af37';
          ctx.fillRect(W - 54, y, 6, 62);

          ctx.textAlign = 'right';
          ctx.fillStyle = isDark ? '#fcefd2' : '#2b180a';
          ctx.font = '900 24px "Cairo", Tahoma, sans-serif';
          ctx.fillText('☕ ' + String(p.name || ''), W - 72, y + 31);

          ctx.textAlign = 'center';
          priceCols.forEach(function(col, idx) {
            var cx = 68 + (colZoneW - (idx * singleColW) - (singleColW / 2));
            var isHi = (col.key === '250');
            ctx.fillStyle = isHi ? '#8c5a2b' : (isDark ? '#3b2618' : '#f4ead8');
            ctx.fillRect(cx - 72, y + 10, 144, 42);
            ctx.strokeStyle = '#d4af37';
            ctx.strokeRect(cx - 72, y + 10, 144, 42);
            ctx.fillStyle = isHi ? '#ffffff' : (isDark ? '#f6d786' : '#5c3415');
            ctx.font = '900 21px "Cairo", Tahoma, sans-serif';
            ctx.fillText(vals[col.key], cx, y + 31);
          });

          y += rowH;
        });

        var fy = H - 148;
        ctx.fillStyle = '#1b0f08';
        ctx.fillRect(48, fy, W - 96, 100);
        ctx.strokeStyle = '#d4af37';
        ctx.lineWidth = 2;
        ctx.strokeRect(48, fy, W - 96, 100);

        ctx.textAlign = 'right';
        ctx.fillStyle = '#f6d786';
        ctx.font = '900 22px "Cairo", Tahoma, sans-serif';
        ctx.fillText('👑 ' + (st.brand_name_ar || 'مَلَكِي') + ' — ' + (st.invoice_slogan || 'قهوة تروق مزاجك'), W - 70, fy + 32);

        var contactLine = [];
        if (st.company_phone) contactLine.push('📞 هاتف الطلبات: ' + st.company_phone);
        if (st.company_address) contactLine.push('📍 العنوان: ' + st.company_address);
        ctx.font = '800 18px "Cairo", Tahoma, sans-serif';
        ctx.fillText(contactLine.join('   |   ') || 'شكراً لاختياركم قهوة مَلَكِي', W - 70, fy + 68);

        if (qrImg) {
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(64, fy + 10, 80, 80);
          ctx.drawImage(qrImg, 68, fy + 14, 72, 72);
        }

        canvas.toBlob(async function(blob) {
          if (!blob) return notify('تعذر تجهيز صورة المنيو', true);
          var fileName = 'malaky-menu-' + new Date().toISOString().slice(0, 10) + '.png';
          if (shareMode && navigator.canShare) {
            var file = new File([blob], fileName, { type: 'image/png' });
            if (navigator.canShare({ files: [file] })) {
              try {
                await navigator.share({ files: [file], title: 'منيو أسعار مَلَكِي' });
                return;
              } catch (_) {}
            }
          }
          var url = URL.createObjectURL(blob);
          var a = document.createElement('a');
          a.href = url;
          a.download = fileName;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          setTimeout(function() { URL.revokeObjectURL(url); }, 2500);
          notify('✅ تم تنزيل صورة منيو أسعار مَلَكِي بنجاح!');
        }, 'image/png');
      } catch (e) { notify(e.message || 'خطأ في تصدير المنيو', true); }
    }

    async function printFinishedStockReportA4() {
      try {
        var r = await api('/api/reports/13');
        S.currentReport = '13';
        S.reportRows = r.rows || [];
        printCurrentReport('13. تقرير المنتج النهائي المعبأ (أسعار البيع + قيمة المخزون + إجمالي فلوس البيع)');
      } catch (e) { notify(e.message, true); }
    }

    function printCurrentReport(customTitle) {
      var rows = S.reportRows || [];
      if (!rows.length) return notify('لا توجد بيانات في التقرير للطباعة', true);
      var cols = Object.keys(rows[0]);
      var repSelect = document.getElementById('rep-type');
      var repTitle = customTitle || (repSelect && repSelect.options[repSelect.selectedIndex] ? repSelect.options[repSelect.selectedIndex].text : ('تقرير رقم ' + S.currentReport));

      var isCostRep = (String(S.currentReport) === '21');
      function colCls(idx, total) {
        if (!isCostRep) return '';
        if (idx === 0) return ' class="col-p"';
        if (idx === total - 1) return ' class="col-how"';
        return ' class="col-n"';
      }
      var thead = '<thead><tr>' + cols.map(function(c, idx) { return '<th' + colCls(idx, cols.length) + '>' + thermalSafe(c.replace('_قرش', ' (ج.م)')) + '</th>'; }).join('') + '</tr></thead>';
      var tbody = '<tbody>' + rows.map(function(r) {
        return '<tr>' + cols.map(function(c, idx) {
          var v = c.endsWith('_قرش') ? egp(r[c]) : (r[c] ?? '-');
          return '<td' + colCls(idx, cols.length) + '>' + thermalSafe(v) + '</td>';
        }).join('') + '</tr>';
      }).join('') + '</tbody>';
      var tfoot = '<tfoot><tr>' + cols.map(function(c, idx) {
        if (idx === 0) return '<td' + colCls(idx, cols.length) + '>الإجمالي (' + rows.length + ')</td>';
        if (c.endsWith('_قرش')) return '<td' + colCls(idx, cols.length) + '>' + egp(rows.reduce(function(a, b) { return a + Number(b[c] || 0); }, 0)) + '</td>';
        if (c.indexOf('الكمية') !== -1 || c.indexOf('الوزن') !== -1 || c.indexOf('عدد') !== -1) return '<td' + colCls(idx, cols.length) + '>' + +(rows.reduce(function(a, b) { return a + Number(b[c] || 0); }, 0)).toFixed(3) + '</td>';
        return '<td' + colCls(idx, cols.length) + '>-</td>';
      }).join('') + '</tr></tfoot>';
      showA4Print(repTitle, 'REP-' + S.currentReport, new Date().toISOString().slice(0,10), '', '<table class="a4-table">' + thead + tbody + tfoot + '</table>', isCostRep, rows.length);
    }

    function onPurTypeChange() {
      var type = document.getElementById('pi-type')?.value || 'raw_coffee';
      var prodWrap = document.getElementById('pi-prod-wrap');
      var pkgWrap = document.getElementById('pi-pkg-wrap');
      var qLbl = document.getElementById('pi-qty-lbl');
      var cLbl = document.getElementById('pi-cost-lbl');
      if (type === 'packaging') {
        if (prodWrap) prodWrap.style.display = 'none';
        if (pkgWrap) pkgWrap.style.display = 'block';
        if (qLbl) qLbl.textContent = 'العدد (كام عبوة فارغة)';
        if (cLbl) cLbl.textContent = 'سعر تكلفة العبوة الواحدة (ج.م)';
      } else if (type === 'sticker') {
        if (prodWrap) prodWrap.style.display = 'block';
        if (pkgWrap) pkgWrap.style.display = 'block';
        if (qLbl) qLbl.textContent = 'العدد (كام استيكر)';
        if (cLbl) cLbl.textContent = 'سعر تكلفة الاستيكر الواحد (ج.م)';
      } else {
        if (prodWrap) prodWrap.style.display = 'block';
        if (pkgWrap) pkgWrap.style.display = 'none';
        if (qLbl) qLbl.textContent = 'الكمية بالكيلو (مثال: 1 أو 1.25 أو 1.5)';
        if (cLbl) cLbl.textContent = 'سعر تكلفة الكيلو (ج.م)';
      }
    }

    function onPurProductChange() {
      var pid = Number(document.getElementById('pi-pid')?.value || 0);
      var prod = S.products.find(function(p) { return p.id === pid; });
      var cInp = document.getElementById('pi-cost');
      if (prod && cInp && !cInp.value && Number(prod.raw_cost_kg) > 0) {
        cInp.value = (prod.raw_cost_kg / 100).toFixed(2);
      }
    }

    function addPurItem() {
      var type = document.getElementById('pi-type').value;
      var qVal = Number(document.getElementById('pi-qty').value || 0);
      var uc = toPiasters(document.getElementById('pi-cost').value);
      if (qVal <= 0) return notify('أدخل الكمية بالكيلو (مثال: 1 أو 1.25 أو 1.5) أو العدد', true);

      var pid = Number(document.getElementById('pi-pid').value || 0);
      var pkid = Number(document.getElementById('pi-pkid').value || 0);
      var prod = S.products.find(function(p) { return p.id === pid; });
      var pkg = S.inventory.packaging.find(function(k) { return Number(k.packaging_type_id) === pkid; });

      var itemObj;
      if (type === 'raw_coffee') {
        if (!prod) return notify('اختر صنف البن أولًا', true);
        var grams = Math.round(qVal * 1000);
        itemObj = {
          item_type: 'raw_coffee',
          product_id: pid,
          packaging_type_id: null,
          product_name: '☕ ' + prod.name + ' (بن خام)',
          qty_kg: qVal,
          quantity: grams,
          unit_cost_piasters: uc,
          line_total: Math.round((grams * uc) / 1000)
        };
      } else if (type === 'sticker') {
        if (!prod) return notify('اختر التوليفة أولًا', true);
        var unitsStk = Math.round(qVal);
        itemObj = {
          item_type: 'sticker',
          product_id: pid,
          packaging_type_id: pkid,
          product_name: '🏷️ استيكر: ' + prod.name + ' (' + (pkg ? pkg.name : '') + ')',
          qty_kg: null,
          quantity: unitsStk,
          unit_cost_piasters: uc,
          line_total: unitsStk * uc
        };
      } else {
        var units = Math.round(qVal);
        itemObj = {
          item_type: 'packaging',
          product_id: null,
          packaging_type_id: pkid,
          product_name: '📦 عبوات: ' + (pkg ? pkg.name : 'برطمان'),
          qty_kg: null,
          quantity: units,
          unit_cost_piasters: uc,
          line_total: units * uc
        };
      }

      if (S.editingPurIdx >= 0) {
        S.purItems[S.editingPurIdx] = itemObj;
        S.editingPurIdx = -1;
        notify('تم تعديل الصنف في الفاتورة');
      } else {
        S.purItems.push(itemObj);
      }
      renderMainOnly();
    }

    function editPurItem(idx) {
      var it = S.purItems[idx];
      if (!it) return;
      S.editingPurIdx = idx;
      renderMainOnly();
      setTimeout(function() {
        document.getElementById('pi-type').value = it.item_type;
        onPurTypeChange();
        if (it.item_type === 'raw_coffee') {
          var prod = S.products.find(function(p) { return Number(p.id) === Number(it.product_id); });
          document.getElementById('pi-pid').value = it.product_id;
          document.getElementById('txt-pi-pid').value = prod ? prod.name : (it.product_name || '');
          document.getElementById('pi-qty').value = it.qty_kg || gramsToKgNum(it.quantity);
        } else if (it.item_type === 'sticker') {
          var prodS = S.products.find(function(p) { return Number(p.id) === Number(it.product_id); });
          document.getElementById('pi-pid').value = it.product_id;
          document.getElementById('txt-pi-pid').value = prodS ? prodS.name : '';
          document.getElementById('pi-pkid').value = it.packaging_type_id;
          document.getElementById('pi-qty').value = it.quantity;
        } else {
          document.getElementById('pi-pkid').value = it.packaging_type_id;
          document.getElementById('pi-qty').value = it.quantity;
        }
        document.getElementById('pi-cost').value = (it.unit_cost_piasters / 100).toFixed(2);
      }, 30);
    }

    function cancelEditPurItem() {
      S.editingPurIdx = -1;
      renderMainOnly();
    }

    function removePurItem(idx) {
      S.purItems.splice(idx, 1);
      if (S.editingPurIdx === idx) S.editingPurIdx = -1;
      renderMainOnly();
    }

    async function editSavedPurchase(id) {
      try {
        var d = await api('/api/purchases/' + id);
        var pur = d.purchase;
        var items = d.items || [];
        if (!confirm('لتعديل فاتورة المشتريات رقم (' + pur.purchase_number + ')، سيتم عكس حركتها من المخزون وتحميل أصنافها في النموذج أعلى الصفحة لتعديلها وحفظها من جديد. هل تريد المتابعة؟')) return;
        await api('/api/purchases/' + id, { method: 'DELETE' });
        S.purItems = items.map(function(it) {
          var isRaw = it.item_type === 'raw_coffee';
          var isStk = it.item_type === 'sticker';
          return {
            item_type: it.item_type,
            product_id: it.product_id,
            packaging_type_id: it.packaging_type_id,
            product_name: isRaw ? ('☕ ' + (it.product_name || 'بن خام')) : (isStk ? ('🏷️ استيكر: ' + (it.product_name || '')) : ('📦 عبوات: ' + (it.packaging_name || ''))),
            qty_kg: isRaw ? gramsToKgNum(it.quantity) : null,
            quantity: Number(it.quantity),
            unit_cost_piasters: Number(it.unit_cost_piasters),
            line_total: Number(it.line_total_piasters)
          };
        });
        await loadTab('purchases', false);
        setTimeout(function() {
          if (pur.supplier_id) document.getElementById('pur-sup').value = pur.supplier_id;
          if (pur.purchase_date) document.getElementById('pur-date').value = pur.purchase_date.slice(0,10);
          document.getElementById('pur-disc').value = (Number(pur.discount_piasters||0)/100).toFixed(2);
          document.getElementById('pur-paid').value = (Number(pur.paid_piasters||0)/100).toFixed(2);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 40);
      } catch (e) { notify(e.message, true); }
    }

    async function savePurchase(andPrint) {
      try {
        await api('/api/purchases', { method:'POST', body:JSON.stringify({
          supplier_id: document.getElementById('pur-sup').value || null,
          purchase_date: document.getElementById('pur-date').value,
          discount_piasters: toPiasters(document.getElementById('pur-disc').value),
          paid_piasters: toPiasters(document.getElementById('pur-paid').value),
          items: S.purItems
        })});
        S.purItems = [];
        S.editingPurIdx = -1;
        notify('تم حفظ وترحيل المشتريات وإضافتها للمخزون بنجاح');
        await loadTab('purchases', false);
        if (andPrint && S.purchases && S.purchases.length) await printPurchase(S.purchases[0].id);
      } catch (e) { notify(e.message, true); }
    }

    async function deletePurchase(id) {
      if (!confirm('حذف فاتورة المشتريات وعكس كميتها من المخزون؟')) return;
      await api('/api/purchases/' + id, { method: 'DELETE' });
      notify('تم حذف المشتريات وعكس المخزون');
      loadTab('purchases', false);
    }

    async function deleteCustomer(id) {
      if (confirm('حذف هذا العميل وكامل سجلاته؟')) {
        await api('/api/customers/' + id, { method:'DELETE' });
        if (S.editingCustomer && Number(S.editingCustomer.id) === Number(id)) S.editingCustomer = null;
        notify('تم حذف العميل');
        loadTab(S.tab, false);
      }
    }

    async function saveCustPayment(andPrint) {
      try {
        var cid = document.getElementById('cp-cid').value;
        var amount = toPiasters(document.getElementById('cp-amt').value);
        var notes = document.getElementById('cp-notes').value;
        var customer = (S.customers || []).find(function(c) { return Number(c.id) === Number(cid); });
        await api('/api/customers/payments', { method:'POST', body:JSON.stringify({ customer_id:cid, amount_piasters:amount, notes:notes })});
        notify('تم تسجيل التحصيل بنجاح');
        await loadTab(S.tab, false);
        if (andPrint) printCollectionReceipt(customer ? customer.name : 'عميل', amount, notes, new Date().toISOString().slice(0,10));
      } catch (e) { notify(e.message, true); }
    }

    async function saveSupplier() {
      await api('/api/suppliers', { method:'POST', body:JSON.stringify({ name:document.getElementById('sup-name').value, phone:document.getElementById('sup-phone').value, address:document.getElementById('sup-addr').value })});
      notify('تم حفظ المورد'); loadTab('suppliers', false);
    }
    async function deleteSupplier(id) { if (confirm('حذف المورد؟')) { await api('/api/suppliers/'+id, { method:'DELETE' }); loadTab('suppliers', false); } }

    async function saveExpense(andPrint) {
      try {
        await api('/api/expenses', { method:'POST', body:JSON.stringify({ category_id:document.getElementById('ex-cat').value, expense_date:document.getElementById('ex-date').value, amount_piasters:toPiasters(document.getElementById('ex-amt').value), description:document.getElementById('ex-desc').value })});
        notify('تم حفظ المصروف وخصمه من صافي الربح');
        await loadTab('expenses', false);
        if (andPrint && S.expenses && S.expenses.length) printExpense(S.expenses[0].id);
      } catch (e) { notify(e.message, true); }
    }
    async function deleteExpense(id) { if (confirm('حذف المصروف؟')) { await api('/api/expenses/'+id, { method:'DELETE' }); loadTab('expenses', false); } }

    async function saveCashMove(andPrint) {
      try {
        await api('/api/cash/movement', { method:'POST', body:JSON.stringify({ movement_type:document.getElementById('cm-type').value, direction:document.getElementById('cm-dir').value, amount_piasters:toPiasters(document.getElementById('cm-amt').value), description:document.getElementById('cm-desc').value })});
        notify('تم حفظ حركة الخزنة بنجاح');
        await loadTab('cash', false);
        if (andPrint && S.cash && S.cash.movements && S.cash.movements.length) printCashMovement(S.cash.movements[0].id);
      } catch (e) { notify(e.message, true); }
    }
    async function deleteCashMove(id) { if (confirm('حذف الحركة؟')) { await api('/api/cash/movement/'+id, { method:'DELETE' }); loadTab('cash', false); } }

    async function runReport(type) {
      S.currentReport = type;
      var f = document.getElementById('rep-from')?.value || '';
      var t = document.getElementById('rep-to')?.value || '';
      var r = await api('/api/reports/' + type + '?from=' + f + '&to=' + t);
      S.reportRows = r.rows || [];
      renderMainOnly();
    }

    async function saveNewUser() {
      await api('/api/users', { method:'POST', body:JSON.stringify({ full_name:document.getElementById('u-name').value, username:document.getElementById('u-user').value, password:document.getElementById('u-pass').value, role_id:document.getElementById('u-role').value })});
      notify('تمت إضافة المستخدم'); loadTab('users', false);
    }

    function uploadImg(input, key) {
      var file = input.files[0];
      if (!file) return;
      var reader = new FileReader();
      reader.onload = function(ev) {
        var img = new Image();
        img.onload = function() {
          var canvas = document.createElement('canvas');
          var max = 360;
          var w = img.width, h = img.height;
          if (w > max || h > max) { if (w > h) { h = Math.round((h*max)/w); w = max; } else { w = Math.round((w*max)/h); h = max; } }
          canvas.width = w; canvas.height = h;
          canvas.getContext('2d').drawImage(img, 0, 0, w, h);
          S.settings[key] = canvas.toDataURL('image/png', 0.9);
          notify('تم تجهيز الصورة، اضغط حفظ الإعدادات');
        };
        img.src = ev.target.result;
      };
      reader.readAsDataURL(file);
    }

    async function saveSettings() {
      S.settings.brand_name_ar = document.getElementById('st-ar').value;
      S.settings.company_phone = document.getElementById('st-phone').value;
      S.settings.company_address = document.getElementById('st-addr').value;
      S.settings.invoice_slogan = document.getElementById('st-slogan').value;
      await api('/api/settings', { method:'PUT', body:JSON.stringify(S.settings) });
      notify('تم حفظ الإعدادات بنجاح'); renderMainOnly();
    }

    init();
  </script>
</body>
</html>`;
}
