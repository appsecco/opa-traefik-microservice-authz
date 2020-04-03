'use strict'

const express = require('express')
const morgan = require('morgan')

const app = express()
const bodyParser = require('body-parser')
const port = process.env.NODE_PORT || 3000

function indexHandler(req, res) {
  // console.log(req.headers)
  // console.log(req.body)

  res.status(200).send('')
}

app.use(bodyParser.json())
app.use(morgan('combined'))

// We only get GET request from Traefik authForward middleware
app.get('/', indexHandler)
app.listen(port, () => console.log(`Middleware Service listening on port ${port}!`))


