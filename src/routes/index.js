const newsRoute = require('./news');
const siteRoute = require('./site');
const postRoute = require('./post');

function route(app) {
  app.use('/', siteRoute);
  app.use('/news', newsRoute);
  app.use('/post', postRoute);
}

module.exports = route;
