const router = require('express').Router()
const Proveedor = require('../models/proveedor')

router.post('/proveedor', (req, res) => {
  const newProvider = new Proveedor(req.body)
  newProvider.save(err => {
    err ? res.status(200).json(err) : res.json({success: true})
  })
})

router.get('/proveedor', (req, res) => {
  Proveedor.find({}, (err, providers) => {
    if (err) {
      res.json(err)
    } else {
      res.json(providers)
    }
  })
})

router.put('/proveedor/:id', (req, res) => {
  Proveedor.findById(req.params.id, (err, provider) => {
    if (err) {
      res.status(400).json({err})
    } else {
      const updatedProvider = Object.assign(provider, req.body)
      updatedProvider.save(err => {
        if (err) {
          res.status(400).json({err})
        } else {
          res.json({success: true})
        }
      })
    }
  })
})

router.delete('/proveedor/:id', (req, res) => {
  Proveedor.findByIdAndRemove(req.params.id, (err) => {
    if (err) {
      res.status(400).json(err)
    } else {
      res.json({success: true, message: 'Provider removed'})
    }
  })
})

module.exports = router
