const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true,
    enum: ['director', 'auxiliar']
  },
  password: {
    type: String,
    required: true
  }
})

userSchema.pre('save', function(next){
  var user = this
  if (this.isModified('password') || this.isNew) {
    bcrypt.hash(user.password, 8, function(err, hash) {
      user.password = hash
      return next()
    })
  }else{
    return next()
  }
})

userSchema.methods.comparePassword = function(password, cb){
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if(err){
      return cb(err)
    } else {
      cb(null, isMatch)
    }
  })
}

module.exports = mongoose.model('User', userSchema)