
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express() // Build an express server
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

// Get request to a /status endpoint
app.get('/status', (req, res) => {
  res.send({
    message: 'It\'s alive!'
  })
})

app.listen(process.env.PORT || 8081)
