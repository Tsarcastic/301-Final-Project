'use strict';

const pg = require('pg');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const requestProxy = require('express-request-proxy');
const PORT = process.env.PORT || 3000;
const app = express();

//const conString = 'postgres://postgres:1Bash2Bash0110!@localhost:5432/devestate';

//const conString = 'postgres://postgres:1357@localhost:5432/devestate';
const client = new pg.Client(conString);

var urlencodedParser = bodyParser.urlencoded({
  extended: false
})

client.connect();
client.on('error', err => console.error(err));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

// posting to server

app.use(express.static('./public'));

app.post('/monkey', urlencodedParser, function(request, response) {
  client.query(
    'INSERT INTO users(user) VALUES($1) ON CONFLICT DO NOTHING;', [request.body.user])
    .then(function(err) {
      if (err) console.error(err);
    }

)

});

loadDB();

app.listen(PORT, function() {
  console.log(`'Listening on port: ${PORT}'`);
});

function loadDB() {
  console.log('yes loadDB is running')
  client.query(`
    CREATE TABLE IF NOT EXISTS
    users (
      user_id SERIAL PRIMARY KEY,
      user_name VARCHAR(255) UNIQUE NOT NULL
    );`
  )
  // .then(loadUsers~x~)
  .catch(console.error);

  client.query(`
    CREATE TABLE IF NOT EXISTS
    notes (
      notes_id SERIAL PRIMARY KEY,
      user_id INTEGER NOT NULL REFERENCES users (user_id),
      "published_on" DATE,
      body TEXT NOT NULL
    );`
  )
  // .then(loadNotes~x~)
  .catch(console.error);
}
