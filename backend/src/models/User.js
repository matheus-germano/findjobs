const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 255,
  },
  github: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    max: 11,
    min: 11,
  },
  cpf: {
    type: String,
    required: true,
    max: 9,
    min: 9,
  },
  stack: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('User', userSchema);