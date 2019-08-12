const express = require('express');
const open = require('open');
// const router = require('./routes.js');
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();
const port = process.env.PORT || 5000;

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

function allowCrossDomain (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

app.use(allowCrossDomain);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use('/', express.static(`${__dirname}/public`));
app.use(express.static(path.join(__dirname, 'public')));

// TODO: add routes for taking authenticated User to analytics dashboard page.
app.use('/', router);

// Acts as a placeholder for the browser in this project. Otherwise the express global error handler will be triggered when the path is set to '/'
app.get('/', (req, res) => {
  res.sendFile(express.static(`${__dirname}/public`));
});

// Catches requests that fall through w/out triggering any route handlers, send 404 if no other route matched
app.use((req, res, next) => {
  let error = new Error('Something went wrong.  Dashboard API Route Not Found.');
  error.status = 404;
  next(error);
});

// global error handler { "error": {} }
app.use((error, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = error.message;
  res.locals.error = req.app.get('env') === 'development' ? error : {};
  // render the error page
  res.status(error.status || 500)
    .json({ error: { message: error.message } });
});

app.listen(port, async (err) => {
  if (err) { console.error('Something bad happened', err) }

  console.log(`Server is running at: http://localhost:${port}`)
  await open(`http://localhost:${port}`)
});
