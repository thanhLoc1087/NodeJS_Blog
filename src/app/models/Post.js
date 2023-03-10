// Using Node.js `require()`
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = new Schema({
  title: {type: String, default:"", maxLength: 255},
  description: {type: String, default:"", maxLength: 255},
  image: {type: String, default:"https://i1.wp.com/www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg", maxLength: 255},
  date: {type: Date, default:Date.now},
  slug: {type: String, default:"", maxLength: 255},
  videoId: {type: String, default:"", maxLength: 255},
});

module.exports = mongoose.model('Post', Post);