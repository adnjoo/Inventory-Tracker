const Pool = require("pg").Pool;

//local use
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "artexplorer",
    password: "root",
    port: 5432,
});