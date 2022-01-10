const { Pool } = require('pg');

// local use
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'artexplorer',
  password: 'root',
  port: 5432,
});

module.exports = pool;
