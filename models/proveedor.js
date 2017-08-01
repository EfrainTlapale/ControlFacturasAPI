const mongoose = require('mongoose')

const proveedorSchema = new mongoose.Schema({
  rfc: {
    type: String,
    required: true
  },
  nombre: {
    type: String,
    required: true
  },
  domicilioFiscal: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Proveedor', proveedorSchema, 'proveedores')
