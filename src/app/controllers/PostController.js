const Post = require('../models/Post')
const mongoose = require('../../util/mongoose')

class PostController {
  // [GET] /
  show(req, res, next) {
    Post.findOne({slug: req.params.slug})
      .then((post) => 
        res.render('post/show', {
          post: mongoose.mongooseToObject(post)
        })
      )
  }
}

module.exports = new PostController();
