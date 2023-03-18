const Post = require('../models/Post')
const mongoose = require('../../util/mongoose')

class MeController {
  // [GET] /me/posts
  mePosts(req, res, next) {
    Promise.all([Post.find({}), Post.countDocumentsDeleted()])
    .then(([posts, deletedCount]) => {
      res.render('me/mePosts', {
        deletedCount,
        posts: mongoose.mogoosesToObjects(posts),
      })
    })
    .catch(next)
  }
  // [GET] /me/saved
  meSaved(req, res, next) {
    res.render('me/meSaved');
  }
  // [GET] /me/trash/posts
  meTrashPost(req, res, next) {
    Post.findDeleted({})
    .then(posts => res.render('me/meTrashPosts', {
      posts: mongoose.mogoosesToObjects(posts),
    }))
    .catch(next);
  }

}

module.exports = new MeController();
