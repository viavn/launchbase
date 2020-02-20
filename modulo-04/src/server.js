const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const port = 5000

const server = express()

server.use(express.urlencoded({ extended: true }))
server.use(express.static('public'))
server.use(routes)

server.set('view engine', 'njk')

nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true
})

server.listen(port, () => {
  console.log(`server is running on localhost:${port}`)
})
