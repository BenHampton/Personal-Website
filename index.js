const path = require('path');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/ben', (req, res) => {
  res.send('hello');
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/about.html'));
});

app.use(express.static('public'));

app.listen(3000, () => {
   console.log('Example app listening on port 3000!');
 });
