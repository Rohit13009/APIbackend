require('dotenv').config();
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var port = process.env.PORT || 3000;
var baseURL = process.env.baseURL;
var user = require('./routes/route');


app.use(user);


app.listen(port, function () {
    console.log("Server is running on port ".concat(port, "."));
});
