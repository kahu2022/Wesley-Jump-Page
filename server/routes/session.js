const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getSessions()
    .then(sessions => {
      return res.json(sessions)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.post('/', (req, res) => {
  db.addSession(req.body)
    .then(id => {
      return res.json(id[0])
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.patch('/', (req, res) => {
  db.updateSession(req.body)
    .then(updateCount => {
      return res.json(updateCount)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

module.exports = router
