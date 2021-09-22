const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors());

const projects = [];

function validateProjectInformation(request, response, next) {
  const {
    projectName,
    projectTech,
    projectDescription,
    projectDeadline
  } = request.body;

  if(projectName.trim() === '' || projectTech.trim() === '' || projectDescription.trim() === '' || projectDeadline.trim() === '') {
    return response.status(400).json({ error: 'Projects fields are not correctly filled.' });
  } else {
    return next();
  }
}

function validadeProjectExistence(request, response, next) {
  const { id } = request.params;

  const projectIndex = projects.findIndex(project => project.projectId === id);

  if(projectIndex < 0) {
    return response.status(400).json({ error: 'Project not found.' });
  } else {
    return next();
  }
}

app.get('/list-projects', (request, response) => {
  return response.json(projects);
});

app.post('/insert-project', validateProjectInformation, (request, response) => {
  const {
    projectName,
    projectTech,
    projectDescription,
    projectDeadline
  } = request.body;

  const newProject = {
    projectId: uuidv4(),
    projectName: projectName,
    projectTech: projectTech,
    projectDescription: projectDescription,
    projectDeadline: projectDeadline
  }

  projects.push(newProject);

  return response.status(200).json(newProject);
});

app.put('/update-project/:id', validadeProjectExistence, (request, response) => {
  const { id } = request.params;

  const {
    projectName,
    projectTech,
    projectDescription,
    projectDeadline
  } = request.body;

  const newProject = {
    projectId: id,
    projectName: projectName,
    projectTech: projectTech,
    projectDescription: projectDescription,
    projectDeadline: projectDeadline
  }

  const projectIndex = projects.findIndex(project => project.projectId === id);

  projects[projectIndex] = newProject;

  return response.status(200).json(newProject);
});

app.delete('/delete-project/:id', validadeProjectExistence, (request, response) => {
  const { id } = request.params;

  const projectIndex = projects.findIndex(project => project.projectId === id);

  projects.splice(projectIndex, 1);

  return response.status(200).json({ success: 'Project deleted.' });
});

app.listen(3333, () => { 
  console.log('🚀 Server running on http://localhost:3333/') 
});