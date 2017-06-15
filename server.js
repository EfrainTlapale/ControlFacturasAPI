
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const {mongoURI} = require('./config')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(require('./routes/users'))

const port = process.env.PORT || 8080
mongoose.connect(mongoURI, (err) => {
  if(err) {
    console.log(err)
  } else {
    app.listen(port, (err) => {
      if (err) {
        console.log(err)
      } else {
        console.log('App listening in port:' + port)
      } 
    })
  }
})