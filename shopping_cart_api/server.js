const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./api/routes/routes');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  next();
});

app.use(bodyParser.json());
app.use(routes);

app.get('/', (req, res) => {
  res.send('hello from server');
});

app.listen(4000, () => {
  console.log('server listening on port 4000');
});
