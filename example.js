var express = require('express')
var app = express()


app.get('/user/:username', function (req, res) {
  res.send("Hello "+req.params.username+" profile.")
})

app.listen('3000') 
console.log('Example app listening ')

app.get('/user/array', function (req, res) {
  res.send("array is "+array)
})


