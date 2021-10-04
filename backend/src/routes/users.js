const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');

const verifyToken = require('../middlewares/verifyToken');
const { registerValidation, loginValidation } = require('../validation/userFields');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/images/profiles');
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ 
  storage: storage,
  limits: { 
    fieldSize: 1024 * 1024 * 3 
  }
});

router.post('/register', upload.single('img'), async (req, res) => {
  // Throw an error if the fields are not correct
  const { error } = registerValidation(req.body);

  if(error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  // Verify if the user is already registered
  const userAlreadyExists = await User.findOne({ cpf: req.body.cpf });

  if(userAlreadyExists) {
    return res.status(400).json({ error: 'CPF already exists' });
  }

  // Hash user password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // Create a new user
  const user = new User({
    name: req.body.name,
    img: request.file.filename,
    email: req.body.email,
    password: hashedPassword,
    github: req.body.github,
    cpf: req.body.cpf,
    experience: req.body.experience,
  });

  // Save new user
  try {
    const savedUser = await user.save();
    res.status(200).json({ success: 'User registered successfully' });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
});

router.post('/login', async (req, res) => {
  const { error } = loginValidation(req.body);

  if(error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  // Checking if the cpf exists in database
  const user = await User.findOne({ cpf: req.body.cpf });

  if(!user) {
    return res.status(400).json({ error: 'User not found' });
  }

  // Validate password
  const isValidPassword = await bcrypt.compare(req.body.password, user.password);

  if(!isValidPassword) {
    return res.status(400).json({ error: 'Invalid password' });
  }

  // Create and assign a token to user
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header('auth-token', token).json({
    token: token,
  });
});

router.get('/user', verifyToken, async (req, res) => {
  const token = req.header('auth-token');
  const { _id } = jwt.verify(token, process.env.TOKEN_SECRET);

  const userData = await User.findOne({ _id: _id });

  return res.json({ userData });
});

router.get('/logout', (req, res) => {
  res.removeHeader('auth-token');
  res.json({
    message: 'User logged out successfully',
  });

  res.redirect('/');
});

module.exports = router;