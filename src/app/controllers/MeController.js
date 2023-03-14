const Post = require('../models/Post')
const mongoose = require('../../util/mongoose')

class MeController {
  // [GET] /me/posts
  mePosts(req, res, next) {
    Post.find({})
    .then(posts => res.render('me/mePosts', {
      posts: mongoose.mogoosesToObjects(posts),
    }))
    .catch(next);
  }
  // [GET] /me/saved
  meSaved(req, res, next) {
    res.render('me/meSaved')
  }

}

module.exports = new MeController();
