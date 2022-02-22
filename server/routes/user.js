const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getUser()
    .then(user => {
      return res.json(user)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

module.exports = router