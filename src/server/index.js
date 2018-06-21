const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../../build')));

app.get('/feed', function(req, res) {
  res.format({
    'text/html': function() {
      res.send(
        '<html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><title>Connect with SoundCloud</title></head><body onload="window.setTimeout(window.opener.SC.connectCallback, 1)"><b style="text-align: center;">This popup should automatically close in a few seconds</b></body></html>'
      );
    }
  });
  //res.sendFile(path.join(__dirname, '../../build/feed', 'index.html'));
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log('Listening on port 8000'));
