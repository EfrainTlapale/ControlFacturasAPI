const router = require('express').Router()
const Vehiculo = require('../models/vehiculo')

router.post('/vehiculo', (req, res) => {
  const newProvider = new Vehiculo(req.body)
  newProvider.save(err => {
    err ? res.status(200).json(err) : res.json({success: true})
  })
})

router.get('/vehiculo', (req, res) => {
  Vehiculo.find({}, (err, vehicles) => {
    if (err) {
      res.json(err)
    } else {
      res.json(vehicles)
    }
  })
})

router.put('/vehiculo/:id', (req, res) => {
  Vehiculo.findById(req.params.id, (err, vehicle) => {
    if (err) {
      res.status(400).json({err})
    } else {
      const updatedVehicle = Object.assign(vehicle, req.body)
      updatedVehicle.save(err => {
        if (err) {
          res.status(400).json({err})
        } else {
          res.json({success: true})
        }
      })
    }
  })
})

router.delete('/vehiculo/:id', (req, res) => {
  Vehiculo.findByIdAndRemove(req.params.id, (err) => {
    if (err) {
      res.status(400).json(err)
    } else {
      res.json({success: true, message: 'Vehicle removed'})
    }
  })
})

module.exports = router
