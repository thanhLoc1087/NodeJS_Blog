const Post = require('../models/Post')
const mongoose = require('../../util/mongoose');
// const { post } = require('../../routes/post');

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
  async store(req, res, next) {
    req.body.image = req.body.videoId;
    const post = new Post(req.body);
    post.save()
    .then(() => res.redirect('/me/posts'))
    .catch(next) 
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
  
  // [DELETE] /post/:id/
  delete(req, res, next) {
    Post.delete({_id: req.params.id})
      .then(() => res.redirect('/me/posts'))
      .catch(next)
  }
  
  // [DELETE] /post/:id/force
  forceDelete(req, res, next) {
    Post.deleteOne({_id: req.params.id})
      .then(() => res.redirect('/me/trash/posts'))
      .catch(next)
  }
  
  // [PUT] /post/:id
  save(req, res, next) {
    Post.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect('/me/posts'))
      .catch(next)
  }
  
  // [PATCH] /post/:id/restore
  restore(req, res, next) {
    Post.restore({ _id: req.params.id})
      .then(() => res.redirect('back'))
      .catch(next)
  }
}

module.exports = new PostController();
