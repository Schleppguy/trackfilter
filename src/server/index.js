const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../../build')));

app.get('/feed', function(req, res) {
  res.sendFile(path.join(__dirname, '../../build/feed', 'index.html'));
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log('Listening on port 8000'));
