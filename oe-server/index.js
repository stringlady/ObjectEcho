"use strict"

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));


mongoose.connect(process.env.DATABASE_URL,{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


function authenticateToken(req, res, next) {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
  
    if (!token) {
      return res.status(401).json({ message: 'Authorization token missing.' });
    }
  
    jwt.verify(token, process.env.SECRETKEY, (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Invalid or expired token.' });
      }
      req.user = user;
      next();
    });
  }

const userSchema = new mongoose.Schema({
  username: String,
  firstname: String,
  lastname: String,
  password: String
}, {collection: 'user'})

const entrySchema = new mongoose.Schema({
  name: String,
  call: String,
  description: String,
  time: Date,
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }
}, {collection: 'entries'})

const commentSchema = new mongoose.Schema({
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  entryUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  comment: String
}, {collection: 'comments'})

const User = mongoose.model('userModel', userSchema);
const Entry = mongoose.model('entryModel', entrySchema);
const Comment = mongoose.model('commentModel', commentSchema);

app.post('/register', async (req, res) => {
  const route = new User({
    username: req.body.username,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    password: req.body.password
  });

  try {
    const newRoute = await route.save();
    const payload = {
      user: {
        id: req.body.username
      }
    }
    const token = jwt.sign(payload, process.env.SECRETKEY);

    res.status(201).json({ newRoute, token });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username, password });

    if (!user) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    const payload = {
      user: {
        id: username
      }
    }
    const token = jwt.sign(payload, process.env.SECRETKEY);

    res.status(200).json({ message: 'Login successful', user, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/users', async (req, res) => {
  try {
    const routes = await User.find();
    res.json(routes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))