const { Pool } = require('pg')

const pool = new Pool({

    connectionString: process.env.DATABASE_URL,
    host: 'https://evening-oasis-51166.herokuapp.com/',
    ssl: {
        rejectUnauthorized: false
    }
})

module.exports = pool