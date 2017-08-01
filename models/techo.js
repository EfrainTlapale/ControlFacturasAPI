const mongoose = require('mongoose')

const techoSchema = new mongoose.Schema({
  periodo: {
    type: String,
    required: true,
    unique: true
  },
  monto: {
    type: String,
    required: true
  }
})

techoSchema.plugin(require('mongoose-unique-validator'))

module.exports = mongoose.model('Techo', techoSchema)
