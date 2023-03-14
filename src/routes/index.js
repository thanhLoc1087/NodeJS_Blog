const newsRoute = require('./news');
const siteRoute = require('./site');
const postRoute = require('./post');
const meRoute = require('./me');

function route(app) {
  app.use('/news', newsRoute);
  app.use('/post', postRoute);
  app.use('/me', meRoute);
  
  app.use('/', siteRoute);
}

module.exports = route;
