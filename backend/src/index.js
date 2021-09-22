const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Importing routes
const userRoute = require('./routes/users');
const projectRoute = require('./routes/projects');

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

// Connect to db
mongoose.connect(
  process.env.DB_CONNECT,
  (err) => {
    if (err) throw err;
    console.log('🧾 Connected to db');
}
);

// Using routes
app.use('/api/user', userRoute);
app.use('/api/project', projectRoute);

app.listen(3333, () => { 
  console.log('🚀 Server running on http://localhost:3333/') 
});