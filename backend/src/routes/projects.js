const router = require('express').Router();
const Project = require('../models/Project');
const jwt = require('jsonwebtoken');

// Middlewares
const verifyToken = require('../middlewares/verifyToken');
const verifyProjectOwner = require('../middlewares/verifyProjectOwner');

// Validations
const { createProjectValidation } = require('../validation/projectFields');

router.use(verifyToken);

router.get('/list', async (req, res) => {
  const projects = await Project.find({});

  return res.send(projects);
});

router.get('/own-projects', async (req, res) => {
  const token = req.header('auth-token');
  const { _id } = jwt.verify(token, process.env.TOKEN_SECRET);

  const projects = await Project.find({ projectOwner: _id });

  return res.status(200).send(projects);
});

router.post('/create', async (req, res) => {
  // Throw an error if fields are not correct
  const { error } = createProjectValidation(req.body);

  if(error) {
    return res.status(400).send(error.details[0].message);
  }

  const token = req.header('auth-token');
  const { _id } = jwt.verify(token, process.env.TOKEN_SECRET);

  // Create new project
  const project = new Project({
    projectOwner: _id,
    title: req.body.title,
    description: req.body.description,
    techPreference: req.body.techPreference,
  });

  // Save new project
  try {
    const savedProject = await project.save();
    res.status(200).send('Project created successfully');
  } catch (err) {
    return res.status(400).send(err);
  }
});

router.delete('/delete/:id', verifyProjectOwner, async (req, res) => {
  const id = req.params.id;

  await Project.findOneAndDelete({ _id: id }, (err) => {
    if(err) {
      throw err;
    }

    return res.status(200).send('Project deleted successfully');
  })
});

module.exports = router;