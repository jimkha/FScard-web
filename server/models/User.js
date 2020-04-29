const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  idGG: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
  },
});
module.exports = mongoose.model('User', UserSchema, 'User');
