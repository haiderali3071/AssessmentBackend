var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

var indexRouter = require('./src/routes/index');
var booksRouter = require('./src/routes/books');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', indexRouter);
app.use('/books', booksRouter);

// // catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_URL, (err) => {
    if (err) {
        console.error('mongoose connect', err);
    }
})


module.exports = app;
