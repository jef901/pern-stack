const { Pool } = require("pg");
const { db } = require("./config");

const pool = new Pool({
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'productdb',
});

module.exports = pool;