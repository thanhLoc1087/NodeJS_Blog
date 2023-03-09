// Using Node.js `require()`
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = new Schema({
  title: {type: String, default:"", maxLength: 255},
  description: {type: String, default:"", maxLength: 255},
  image: {type: String, default:"https://vmsco.vn/placeholder-png", maxLength: 255},
  date: {type: Date, default:Date.now},
});

module.exports = mongoose.model('Post', Post);