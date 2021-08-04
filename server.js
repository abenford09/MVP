const dot = require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./db_configuration');

// const { Pool } = require('pg')

// const pool = new Pool({
//     user: 'postgres',
//     password: 'kings',
//     host: 'localhost',
//     port: 5433,
//     database: 'workout'
// })

const PORT = process.env.PORT || 7070;

app.use(express.static("public"))
app.use(cors())
app.use(express.json())

app.get('/api/exercise', async(req, res) => {
    db.query("SELECT * FROM exercise", (err, data) => {
        res.status(200).send(rows);
        console.log('get works')
    })
})

app.post('/api/exercise', async(request, response) => {
    try {
        const { name, reps, duration } = req.body
        const
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