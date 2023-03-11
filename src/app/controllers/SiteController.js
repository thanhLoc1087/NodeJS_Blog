const Post = require('../models/Post')
const mongoose = require('../../util/mongoose')

class SiteController {
  // [GET] /
  index(req, res, next) {
    Post.find({})
      .then(Posts => {
        res.render('home', {
          Posts: mongoose.mogoosesToObjects(Posts)
        })
      })
      .catch(next)
  }

  // [GET] /search
  search(req, res) {
    res.render('search')
  }
  // [POST] /search
  searchPost(req, res) {
    res.json(req.body);
  }
}

module.exports = new SiteController();
