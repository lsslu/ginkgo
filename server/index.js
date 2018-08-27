const express = require('express');
const path = require('path');
const port = 3000;

const app = express();

app.use('/', express.static(path.resolve(__dirname, '../build')));
app.use('/static', express.static(path.resolve(__dirname, '../build/static')));

app.listen(port, function() {
  console.log(`listening port: ${port}`);
});