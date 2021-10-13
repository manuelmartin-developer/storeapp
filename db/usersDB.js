// Imports
const { Pool, Client } = require('pg')
require("dotenv").config()

// Pool connection config to SQLdb
const pool = new Pool({
  connectionString: process.env.POSTGRE_URI,
  ssl: {
    rejectUnauthorized: false
  }
})

// Client connection config to SQLdb
const client = new Client({
  connectionString: process.env.POSTGRE_URI,
  ssl: {
    rejectUnauthorized: false
  }
})

module.exports = {
  pool,
  client
}