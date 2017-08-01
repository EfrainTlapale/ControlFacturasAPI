
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const {mongoURI} = require('./config')
const cors = require('cors')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(cors())

app.use('/api', require('./routes/users'))
app.use('/api', require('./routes/proveedores'))
app.use('/api', require('./routes/facturas'))
app.use('/api', require('./routes/vehiculos'))
app.use('/api', require('./routes/techo'))

const port = process.env.PORT || 8080
mongoose.Promise = global.Promise
mongoose.connect(mongoURI, (err) => {
  if (err) {
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
