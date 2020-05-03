const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const movie = require('./routes/movie');
const search = require('./routes/search');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});


app.use('/api/movie', movie);
app.use('/api/search', search);

module.exports = app;
