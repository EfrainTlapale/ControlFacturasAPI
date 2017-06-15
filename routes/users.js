const router = require('express').Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const {secret} = require('../config')

router.post('/signup', (req, res) => {
  const newUser = new User(req.body)
  newUser.save(err => {
    err ? res.status(200).json(err) : res.json({success: true})
  })
})

router.post('/login', (req, res) => {
  User.findOne({username: req.body.username}, (err, user) => {
    if (err || !user) {
      res.status(403).json({err: 'user not found'})
    } else {
      user.comparePassword(req.body.password, (err, isMatch) => {
        if(err || !isMatch) {
          res.status(403).json({err: 'auth failed'})
        } else {
          user.password = undefined
          const token = jwt.sign(user, secret, {expiresIn: '8h'})
          res.json({token})
        }
      })
    }

  })
})

module.exports = router