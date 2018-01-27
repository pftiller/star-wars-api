const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routes/star-wars.router');
const port = process.env.PORT || 5000;
var mongoose = require('./modules/mongoose');


app.use(express.static('server/public'));

app.listen(port, function() {
    console.log('Listening on port: ', port);
});
