'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const requestProxy = require('express-request-proxy');
const PORT = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./'));

app.get('', function(request, response) {
  response.sendfile('index.html', {root: './'})
});

function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ad24cd1a1ac4847d98a5c93319a6285210016ac3`}
  }))(request, response);
}

app.get('/github/*', proxyGitHub);

app.listen(PORT, function() {
  console.log(`'Listening on port: ${PORT}'`);
});
