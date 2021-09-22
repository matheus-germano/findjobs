const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { registerValidation, loginValidation } = require('../validation/userFields');
const { response } = require('express');

router.post('/register', async (req, res) => {
  // Throw an error if the fields are not correct
  const { error } = registerValidation(req.body);

  if(error) {
    return res.status(400).send(error.details[0].message);
  }

  // Verify if the user is already registered
  const userAlreadyExists = await User.findOne({ cpf: req.body.cpf });

  if(userAlreadyExists) {
    return res.status(400).send('CPF already exists');
  }

  // Hash user password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // Create a new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
    github: req.body.github,
    phoneNumber: req.body.phoneNumber,
    cpf: req.body.cpf,
    stack: req.body.stack,
    experience: req.body.experience,
  });

  // Save new user
  try {
    const savedUser = await user.save();
    res.status(200).send('User registered successfully');
  } catch (err) {
    return res.status(400).send(err);
  }
});

router.post('/login', async (req, res) => {
  const { error } = loginValidation(req.body);

  if(error) {
    return res.status(400).send(error.details[0].message);
  }

  // Checking if the cpf exists in database
  const user = await User.findOne({ cpf: req.body.cpf });

  if(!user) {
    return res.status(400).send('User not found');
  }

  // Validate password
  const isValidPassword = await bcrypt.compare(req.body.password, user.password);

  if(!isValidPassword) {
    return res.status(400).send('Invalid password');
  }

  // Create and assign a token to user
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header('auth-token', token).send(token);
});

module.exports = router;