const mongoose = require('mongoose')

const vehiculoSchema = new mongoose.Schema({
  placas: {
    type: String,
    required: true
  },
  modelo: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Vehiculo', vehiculoSchema, 'vehiculos')
