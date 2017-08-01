const mongoose = require('mongoose')

const facturaSchema = new mongoose.Schema({
  folio: {
    type: String,
    required: true,
    unique: true
  },
  fecha: {
    type: Date,
    required: true
  },
  proveedor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Proveedor',
    required: true
  },
  concepto: {
    type: String,
    required: true
  },
  vehiculo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vehiculo'
  },
  refacciones: String,
  alimento: Boolean,
  total: {
    type: Number,
    required: true
  }
})

facturaSchema.plugin(require('mongoose-unique-validator'))

module.exports = mongoose.model('Factura', facturaSchema, 'facturas')
