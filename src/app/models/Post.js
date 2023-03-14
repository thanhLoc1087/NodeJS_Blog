// Using Node.js `require()`
const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug)

const Post = new Schema({
  title: {type: String, default:"", maxLength: 255, require: true},
  description: {type: String, default:"", maxLength: 255, require: true},
  content: {type: String, default:"", maxLength: 2000, require: true},
  videoId: {type: String, default:"", maxLength: 255},
  image: {type: String, default: this.videoId, maxLength: 255},
  slug: {type: String, slug:'title', unique: true},
}, {
  timestamps: true,
});

module.exports = mongoose.model('Post', Post);