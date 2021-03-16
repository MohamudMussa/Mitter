
'use strict';
const express = require('express');
const createError = require('http-errors');
const bodyParser = require('body-parser');
const cors = require('cors');
const { TWITTER } = require('./config/CONSTS.json');

// INIT MY APP
const app = express();

app.use(bodyParser.json());

app.use(cors());

//!Tweet
const tweetRoute = require('./Routes/tweet');
app.use(`${TWITTER}`, tweetRoute);


// error handling
app.use((req, res, next) => {
    next(createError(404, 'Resource not found'));
});

app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).send(err.message || "something went wrong");
})


const server = app.listen(4500, () => {
    console.log(`server has started on port number:  ${server.address().port}`);
});


module.exports = server;