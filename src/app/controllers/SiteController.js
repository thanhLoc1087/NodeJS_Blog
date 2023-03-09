const Post = require('../models/Post')

class SiteController {
  // [GET] /
  index(req, res) {
    // Post.find({}, function(err, Posts) {
    //   if (!err) {
    //     res.json(Posts);
    //   } else {
    //     res.status(400).json({error: "ERROR!!"})
    //   }
    // })
    res.render('home');
  }
  // [GET] /search
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
