var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const env = require('dotenv');
const cors = require('cors');
env.config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var postsRouter = require('./routes/posts');
const connectDB = require('./config/db');


var app = express();
app.use(cors({
  // origin:'http//localhost:3000',
  // // origin:['http//localhost:3000','http//localhost:3001']  // ithream header check cheyyum ithil ninnu varunnathu mathrae accept cheyyoo
  // // origin: "*"  // ithintae meaning ella header ninnum varunnathu accept cheytholoo ennanu
  // methods:["GET","POST"],  // GET & POST nnuu varunna req mathramae accept aakoo
  // allowedHeaders: ["Content-Type","Authorization"]
}));
console.log(process.env.PORT);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

connectDB();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);

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
