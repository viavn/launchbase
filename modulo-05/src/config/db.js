const { Pool } = require('pg')

module.exports = new Pool({
  user: 'postgres',
  password: 'Skayline*869',
  host: 'localhost',
  port: 5432,
  database: 'gymmanager'
})