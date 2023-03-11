const Post = require('../models/Post')
const mongoose = require('../../util/mongoose')

class PostController {
  // [GET] /post/:slug
  show(req, res, next) {
    Post.findOne({slug: req.params.slug})
      .then((post) => 
        res.render('post/show', {
          post: mongoose.mongooseToObject(post)
        })
      )
      .catch(next)
  }

  // [GET] /post/create
  create(req, res, next) {
    res.render('post/create')
  }

  // [POST] /post/store
  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${req.body.image}/sddefault.jpg`;
    const post = new Post(formData);
    post.save()
    .then(() => res.redirect('/'))
    .catch((error) => {

    }) 
  }
}

module.exports = new PostController();
