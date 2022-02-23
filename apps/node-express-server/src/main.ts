const express = require('express')
const cors = require('cors')

const utility = require('./app/utility/utility');
const nasa_controller = require('./app/controllers/nasaController')
const auth_controller = require('./app/controllers/authController')

const app = express()
const port = 3000

app.use(cors())

app.get('/bingo', (req, res) => {
  res.send('{"content":"Hello to one and all in the BINGO world!"}')
})

app.get('/', (req, res) => {
  res.send('{"content":" : ) "}')
})

app.get('/nasa', utility.requireLogin, nasa_controller.nasaFetch)

app.get('/auth', auth_controller.auth)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.on('error', console.error);