var express = require('express');

var app = express();

//informar para o express que o engine de views será o ejs
app.set('view engine', 'ejs');
app.set('views','./app/views');

module.exports = app;