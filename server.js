const dot = require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')


// const { Pool } = require('pg')

// const pool = new Pool({
//     user: 'postgres',
//     password: 'kings',
//     host: 'localhost',
//     port: 5433,
//     database: 'workout'
// })
const pool = require('./pgdb')

const PORT = process.env.PORT || 7070;

app.use(express.static("public"))
app.use(cors())
app.use(express.json())

app.get('/api/exercise', async(req, res) => {
    // console.log("hit before try")
    try {
        // console.log('hit before the let')
        // const client = await pool.connect()
        // console.log('after connect')
        let { rows } = await pool.query("SELECT * FROM exercise");
        // console.log("hit after pool")
        res.status(200).send(rows)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

app.post('/Exercise', async(request, response) => {
    try {
        let rows = await pool.query('SELECT * FROM Exercise');
        console.log(rows)
        response.status(200).json(rows)
        console.log(response)
        console.log('working')
    } catch (error) {

    }
})

app.delete('/', async(request, response) => {

})

app.put('/', async(request, response) => {

})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})