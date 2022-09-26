const express = require('express');
const path = require('path');
const app = express();
const rootRouter = require('./Router/router');

app.use(express.static(path.join(__dirname, '../build')));


const port = 5080;
app.listen(port, () => { console.log(`listening on ${port}`) });