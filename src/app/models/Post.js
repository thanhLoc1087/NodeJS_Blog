// Using Node.js `require()`
const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug)

const Post = new Schema({
  title: {type: String, default:"", maxLength: 255, require: true},
  description: {type: String, default:"", maxLength: 255, require: true},
  content: {type: String, default:"", maxLength: 2000, require: true},
  image: {type: String, default:"https://i1.wp.com/www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg", maxLength: 255},
  videoId: {type: String, default:"", maxLength: 255},
  slug: {type: String, slug:'title', unique: true},
}, {
  timestamps: true,
});

module.exports = mongoose.model('Post', Post);