const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
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
  techPreference: {
    type: String,
    required: false,
  },
  repository: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model('Project', projectSchema);