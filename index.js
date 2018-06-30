const bodyParser = require('body-parser');
const router = require('./routes/star-wars.router');
const appID = 'starcards-zftcg';
const collection = client.db('starcards').collection('favorites');
const {
  Stitch,
  AnonymousCredential,
} = require('./modules/mongodb-stitch-server-sdk');
const stitchClient = Stitch.initializeDefaultAppClient(appID);
var databaseUrl ="mongodb+srv://mongodb-stitch-starcards-tcevq:Roundmind50%20@portfolio-pmjlv.mongodb.net"
var MongoClient = require('mongodb').MongoClient;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

//ROUTES
// "url": {
//   "scheme": "https",
//   "host": "webhooks.mongodb-stitch.com",
//   "path": "/api/client/v2.0/app/starcards-zftcg/service/addFavorite/incoming_webhook/addFavorite"
//   }
// })
// GET 
router.get('/', (req, res) => {
  MongoClient.connect(databaseUrl, function(err, client) {
    console.log('connected to db');
    db.collection.find({}, (error, storedFavorite) => {
      if (error) {
          console.log('error: ', error);
          res.sendStatus(500);
      } else {
          console.log('found: ', storedFavorite);
          res.send(storedFavorite);
      }
  }).catch((err) => {
    console.log('There was an error', '', 'error');
  })
});
  



  Favorite.find({}, (error, storedFavorite) => {
      if (error) {
          console.log('error: ', error);
          res.sendStatus(500);
      } else {
          console.log('found: ', storedFavorite);
          res.send(storedFavorite);
      }
  }); 
}); 

// POST
router.post('/', (req, res) => {
  console.log('new entry to be added: ', req.body);
  let newFavorite = new Favorite(req.body);
  newFavorite.save( (error, newStoredFavorite) => {
      if (error) {
          console.log('error: ', error);
          res.sendStatus(500);            
      } else {
          console.log('success: ', newStoredFavorite);            
          res.sendStatus(201);
      }
  }); 
  
}); 

// DELETE
router.delete('/:id', (req, res) => {
  let favoriteId = req.params.id;
  Favorite.findByIdAndRemove(
      {"_id": favoriteId},
      // function(error, removed) 
      (error, removedDocument) => {
          if (error) {
              console.log('error on remove: ', error);
              res.sendStatus(500);
          } else {
              console.log('Document we removed: ', removedDocument);
              res.sendStatus(200);
          }
      }
  )

});


module.exports = indexer;
