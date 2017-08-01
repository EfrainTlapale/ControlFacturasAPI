const router = require('express').Router()
const Techo = require('../models/techo')

router.post('/techo', (req, res) => {
  const newTecho = new Techo(req.body)
  newTecho.save(err => {
    err ? res.status(500).json({err}) : res.json({success: true})
  })
})

router.get('/techo/:periodo', (req, res) => {
  Techo.findOne({periodo: req.params.periodo}, (err, techo) => {
    if (err) {
      res.status(500).json({err})
    } else if (!techo) {
      res.status(204).json({err: 'not found'})
    } else {
      res.json({techo})
    }
  })
})

module.exports = router
