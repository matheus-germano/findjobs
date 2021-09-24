const mongoose = require('mongoose');

module.exports = async function(req, res, next) {
  const projectId = req.params.id;

  isValid = await mongoose.Types.ObjectId.isValid(projectId);

  if(!isValid) {
    return res.status(404).send('Project ID is not valid');
  }

  return next();
}