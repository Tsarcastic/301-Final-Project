'use strict';

const pg = require('pg');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const requestProxy = require('express-request-proxy');
const PORT = process.env.PORT || 3000;
const app = express();
const conString = 'postgres://localhost:5432/devestate';
const client = new pg.Client(conString);
client.connect();
client.on('error', err => console.error(err));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static('./public'));

app.get('', function(request, response) {
  response.sendfile('index.html', {
    root: './public'
  })
});

app.listen(PORT, function() {
  console.log(`'Listening on port: ${PORT}'`);
});
