const mongoose = require('mongoose');

const cardsSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  link: {
    type: String,
    required: true,
    match: /^((https?:\/{2})([a-z-_0-9]{1,}\.)?[a-z-_0-9]{2,}\.[a-z]{2,}((\/[a-z-_0-9]+)*?)(\/[a-z-_0-9]+\.[a-z-_0-9]{3,}))$/,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    require: true,
  },
  likes: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'user',
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('card', cardsSchema);
