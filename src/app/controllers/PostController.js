const Post = require('../models/Post')
const mongoose = require('../../util/mongoose');
const { post } = require('../../routes/post');

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
    const post = new Post(formData);
    post
      .save()
      .then(() => res.redirect('/'))
      .catch((error) => {})
  }
  
  // [GET] /post/:id/edit
  edit(req, res, next) {
    Post.findById(req.params.id)
      .then(post =>
        res.render('post/edit', {
          post: mongoose.mongooseToObject(post)
        }),
      )
      .catch(next)
  }
  
  // [PUT] /post/:id
  save(req, res, next) {
    Post.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect('/me/posts'))
      .catch(next)
  }
}

module.exports = new PostController();
