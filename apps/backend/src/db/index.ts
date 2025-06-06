// backend/db/index.ts
import pool from './connection';
import * as queries from './queries';

// Exportar todo en un solo objeto
const db = {
  pool,
  queries
};

export default db;