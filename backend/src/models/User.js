const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    max: 255,
  },
  img: {
    type: String,
    required: true,
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
    required: false,
    max: 11,
    min: 11,
  },
  cpf: {
    type: String,
    required: true,
    max: 11,
    min: 11,
  },
  stack: {
    type: String,
    required: false,
  },
  experience: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('User', userSchema);