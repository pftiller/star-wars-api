const express = require('express');
const app = express();
const http = require('http');
const bodyParser = require('body-parser');
const appID = 'starcards-zftcg';
const {
  Stitch,
  AnonymousCredential,
} = require('./modules/mongodb-stitch-server-sdk');
const stitchClient = Stitch.initializeDefaultAppClient(appID);
var databaseUrl ="mongodb+srv://mongodb-stitch-starcards-tcevq:Roundmind50%20@portfolio-pmjlv.mongodb.net"
var MongoClient = require('mongodb').MongoClient;

// Route includes
const router = require('./routes/router');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

/* Routes */
app.use('/router', router);

// Serve static files
app.use(express.static('index.html'));

const PORT = 5555;

/** Listen * */
app.listen(PORT, () => {
       console.log(`Listening on port: ${PORT}`);
});