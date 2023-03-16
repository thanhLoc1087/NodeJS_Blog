// Using Node.js `require()`
const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Post = new Schema({
  title: {type: String, default:"", maxLength: 255, require: true},
  description: {type: String, default:"", maxLength: 255, require: true},
  content: {type: String, default:"", maxLength: 2000, require: true},
  videoId: {type: String, default:"", maxLength: 255},
  image: {type: String, maxLength: 255},
  slug: {type: String, slug: "title", unique: true},
}, {
  timestamps: true,
});

// Plugin
mongoose.plugin(slug)
Post.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: 'all',
});

module.exports = mongoose.model('Post', Post);