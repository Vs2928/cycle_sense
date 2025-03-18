const { userDB } = require('./connection');
const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const LoginData = userDB.model('logindetails', loginSchema);
module.exports = LoginData;
