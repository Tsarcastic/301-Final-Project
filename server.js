'use strict';

const pg = require('pg');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const requestProxy = require('express-request-proxy');
const PORT = process.env.PORT || 3000;
const app = express();
const conString = 'postgres://postgres:1Bash2Bash0110!@localhost:5432/devestate';
const client = new pg.Client(conString);
client.connect();
client.on('error', err => console.error(err));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

app.get('', function(request, response) {
  response.sendfile('index.html', {root: './public'})
});

// function proxyGitHub(request, response) {
//   console.log('Routing GitHub request for', request.params[0]);
//   (requestProxy({
//     url: `https://api.github.com/${request.params[0]}`,
//     headers: {Authorization: `token ad24cd1a1ac4847d98a5c93319a6285210016ac3`}
//   }))(request, response);
// }


// app.get('/github/*', proxyGitHub);
// app.get('/notes', (request, response) => {
//   let currentUser = app.user;
//   client.query(`
//     SELECT notes FROM ${currentUser};`
//   )
//   .then(result => response.send(result.rows))
//   .catch(console.error);
// });

app.listen(PORT, function() {
  console.log(`'Listening on port: ${PORT}'`);
});

function loadDB() {
  let currentUser = app.user;
  client.query(`
    CREATE TABLE IF NOT EXISTS
    ${currentUser} (
      note_id SERIAL PRIMARY KEY,
      subject VARCHAR(255) NOT NULL,
      "publishedOn" DATE,
      body TEXT NOT NULL
    );`
  )
  .then(loadNotes)
  .catch(console.error);
}
