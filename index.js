var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('<h1 style="margin:30px">Express</h1><p style="margin:30px">Welcome to Express</p>')
})

app.listen(3000, function () {
  console.log('Listening on port 3000...')
})
