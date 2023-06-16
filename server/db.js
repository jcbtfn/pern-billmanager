const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "jacob20230616",
    host: "localhost",
    port: 5432,
    database: "pernbillmanager"
});

module.exports = pool;