const { Pool } = require('pg');

// local use
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'inventory',
  password: 'root',
  port: 5432,
});

module.exports = pool;
