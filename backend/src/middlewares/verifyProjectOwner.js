const jwt = require('jsonwebtoken');
const Project = require('../models/Project');

module.exports = async function(req, res, next) {
  const token = req.header('auth-token');

  const projectId = req.params.id;
  const { _id } = jwt.verify(token, process.env.TOKEN_SECRET);

  // Checking if the project exists in database
  const project = await Project.findById(projectId);

  if(!project) {
    return res.status(400).send('Project not found');
  }

  // Verify if ser is authorized to delete the project
  if(_id !== project.projectOwner) {
    return res.status(400).send('You are not allowed to delete this project');
  }

  return next();
}