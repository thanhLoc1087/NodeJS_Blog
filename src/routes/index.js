const newsRoute = require('./news');
const siteRoute = require('./site');

function route(app) {
  app.use('/', siteRoute);
  app.use('/news', newsRoute);
}

module.exports = route;
