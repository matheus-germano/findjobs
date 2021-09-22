const mongoose = require('mongoose');

const opinionsSchema = new mongoose.Schema({
  projectOwner: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    max: 255,
  },
  description: {
    type: String,
    required: true,
    max: 255,
  },
});

module.exports = mongoose.model('Opinions', opinionsSchema);