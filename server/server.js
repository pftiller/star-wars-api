const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routes/star-wars.router');
const port = process.env.PORT || 5000;
const mongoose = require('./modules/mongoose');

app.use(express.static('server/public/'));
app.use(bodyParser.json()); 


app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
