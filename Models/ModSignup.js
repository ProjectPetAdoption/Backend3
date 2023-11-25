// ModSignup.js

const mongoose = require('mongoose');
const { Schema } = mongoose;

const SignupSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String
  },
  password: {
    type: String,
    required: true
  }
});

const ModSignup1 = mongoose.model('Signup', SignupSchema);

module.exports = ModSignup1;
