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

app.get('/pr', (req, res) => {
    if (!process.env.NODE_ENV) {
        res.send('no thing')
    } else {
        res.json({ processIs: pr })
    }
})

app.post('/api/exercise', async(req, res) => {
    try {
        const { name, reps, duration } = req.body
        const insert = 'INSERT INTO exercise (name, reps, duration) VALUES ($1, $2, $3) RETURNING *'
        const newExercise = [
            name,
            reps,
            duration
        ]
        await pool.query(insert, newExercise, (err, res) => {
            if (err) {
                console.log(err.stack)
            }
            res.status(200).send(res.rows[0])
            console.log('working')
        })
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

app.delete('/api/exercise', async(request, response) => {
    const deleteCmd = 'DELETE FROM exercise WHERE exercise_id = 3 RETURNING *'
    try {
        const { id } = request.params
        let { rows } = await pool.query(deleteCmd);
        response.status(200).json(rows[0])
    } catch (error) {
        console.log('Server error')
        response.status(500).json(error)
    }
})

app.delete('/api/exercise', async(request, response) => {
    app.patch('', async(request, response) => {
        try {
            const { id } = request.params;
            const { name, reps, duration } = request.body
            if (name == null || reps == null || typeof duration !== 'number') {
                response.status(400).send("Bad Request")
            } else {
                const updateCmd = 'UPDATE exercise SET name = $1, reps = $2, duration = $3 WHERE exercise_id = $4 RETURNING *'
                const values = [name, reps, duration, id]
                await pool.query(updateCmd, values, (err, res) => {
                    if (err) {
                        console.log(err.stack)
                    }
                    response.status(201).send(res.rows[0])
                })
            }
        } catch (error) {
            console.log('Server error')
            response.status(500).json(error)
        }
    })
})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})