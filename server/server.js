const path = require('path')
const express = require('express')

const helloRoutes = require('./routes/hello')
const programRoutes = require('./routes/program')
const userRoutes = require('./routes/user')
const sessionRoutes = require('./routes/session')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))
server.use(express.json())

server.use('/api/v1/hello', helloRoutes)
server.use('/api/v1/program', programRoutes)
server.use('/api/v1/user', userRoutes)
server.use('/api/v1/session', sessionRoutes)

// for browser router (react-router-dom)
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

module.exports = server
