const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../../build')));

app.get('/feed', function(req, res) {
  res.sendFile(path.join(__dirname, '../../build/feed', 'index.html'));
});

app.get('/', function(req, res) {
  console.log(req);
  res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

app.listen(8000, () => console.log('Listening on port 8000'));
