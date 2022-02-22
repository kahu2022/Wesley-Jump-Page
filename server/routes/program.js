const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getPrograminfo()
    .then(program => {
      return res.json(program)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.get('/workout', (req, res) => {
    db.getWorkout()
      .then(workout => {
        return res.json(workout)
      })
      .catch(err => {
        res.status(500).json({ error: err.message })
      })
  })

  router.get('/statistics', (req, res) => {
    db.getStatistics()
      .then(statistics => {
        return res.json(statistics)
      })
      .catch(err => {
        res.status(500).json({ error: err.message })
      })
  })



module.exports = router
