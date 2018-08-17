var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');

// Route modules
// (2) Include your Survey Questions router
var surveyQuestionListsRouter = require('./controllers/surveyQuestionListsController');
// (2) Include your Survey Answers router
var surveyAnswersControllerRouter = require('./controllers/surveyAnswersController');

var app = express();

// Use mongoose to connect to mongo
// (2) Include Mongoose
const mongoose = require('mongoose');

// (2) Don't forget your config file
const config = require('./config/connect');

// (2) Connect to Mongoose
mongoose.connect(config.db);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: false,
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

// register routes
// (3) Register your Survey Question List router
app.use('/', surveyQuestionListsRouter);
// (3) Register your Survey Answer router
app.use('/',surveyAnswersControllerRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
