const express = require('express')
const app = express()
const { Pool } = require('pg')
const cors = require('cors')
const pool = require('./db/dbCON');
// const dot = require('dotenv').config()

const PORT = process.env.PORT || 7070;

// middlewares
app.use(express.static("public"))
app.use(cors())
app.use(express.json())

// const pool = new Pool({
//     user: 'postgres',
//     password: 'kings',
//     host: 'localhost',
//     port: 5433,
//     database: 'workout'
// })


// get route
app.get('/api/exercise', async(req, res) => {
    try {
        const { rows } = await pool.query("SELECT * FROM exercise")
        res.status(200).json(rows);
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
        console.log('get works')
    }
})

app.post('/api/exercise', async(request, response) => {
    try {
        const { name, reps, duration } = req.body
        const insert = 'INSERT INTO exercise '
        const newWorkout = {
            name,
            reps,
            duration
        }
        console.log('working')
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

app.delete('/', async(request, response) => {

})

app.put('/', async(request, response) => {

})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})