const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { engine } = require('express-handlebars');
const app = express();
const methodOverride = require('method-override');
const sortMiddleware = require('./app/middleware/SortMiddleware');
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

// Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(sortMiddleware);

app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

// HTTP logger
app.use(morgan('combined'));

// Override method
app.use(methodOverride('_method'))

// route init
route(app);

// Template engine
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
      sortable(field, sort) {
        const sortType = field === sort.column ? sort.type : 'default';

        const icons = {
          default: 'bi bi-arrow-down-up',
          asc: 'bi bi-sort-up',
          desc: 'bi bi-sort-down',
        }
        const types = {
          default: 'desc',
          asc: 'desc',
          desc: 'asc',
        }
        const icon = icons[sortType];
        const type = types[sortType];
        return `
        <a href="?_sort&column=${field}&type=${type}">
          <i class="${icon}"></i>
        </a>
        `
      },
      dateFormat: require('handlebars-dateformat'),
    },
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});