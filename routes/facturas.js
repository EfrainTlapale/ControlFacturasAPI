const router = require('express').Router()
const Factura = require('../models/factura')

router.post('/factura', (req, res) => {
  const newProvider = new Factura(req.body)
  newProvider.save(err => {
    err ? res.status(200).json(err) : res.json({success: true})
  })
})

router.get('/factura', (req, res) => {
  Factura.find({}).populate('proveedor', 'nombre').populate('vehiculo', 'modelo color placas').exec((err, bills) => {
    if (err) {
      res.status(500).json({success: false})
    } else {
      res.json(bills)
    }
  })
})

router.get('/factura/:id', (req, res) => {
  Factura.findById(req.params.id).populate('proveedor vehiculo').exec((err, bill) => {
    err ? res.status(200).json({err}) : res.json(bill)
  })
})

router.put('/factura/:id', (req, res) => {
  Factura.findById(req.params.id, (err, factura) => {
    if (err) {
      res.status(400).json({err, message: 'Error al encontrar factura'})
    } else {
      const updatedFactura = Object.assign(factura, req.body)
      updatedFactura.save(err => {
        if (err) {
          res.status(400).json({err, message: 'Error al actualizar factura'})
        } else {
          res.json({success: true})
        }
      })
    }
  })
})

router.delete('/factura/:id', (req, res) => {
  Factura.findByIdAndRemove(req.params.id, (err, doc) => {
    err ? res.status(500).json(err) : res.json({doc})
  })
})

module.exports = router
