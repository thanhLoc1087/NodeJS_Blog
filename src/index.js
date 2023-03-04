const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
// HTTP logger
app.use(morgan('combined'));

// route
app.get('/main', (req, res) => {
  res.render('home');
})

// Template engine
app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
