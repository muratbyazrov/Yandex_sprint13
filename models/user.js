const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  about: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
    match: /^((https?:\/{2})([a-z-_0-9]{1,}\.)?[a-z-_0-9]{2,}\.[a-z]{2,}((\/[a-z-_0-9]+)*?)(\/[a-z-_0-9]+\.[a-z-_0-9]{3,}))$/,
  },
});

module.exports = mongoose.model('user', userSchema);
