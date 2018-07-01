const express = require('express');
const router = express.Router();
const http = require('http');
// http.get('/', (req, res) => {
//   MongoClient.connect(databaseUrl, function(err, client) {
//     console.log('connected to db');
//     db.collection.find({}, (error, storedFavorite) => {
//       if (error) {
//           console.log('error: ', error);
//           res.sendStatus(500);
//       } else {
//           console.log('found: ', storedFavorite);
//           res.send(storedFavorite);
//       }
//   }).catch((err) => {
//     console.log('There was an error', '', 'error');
//   })
// });

let options = {
    "scheme": 'https',
    "host": 'webhooks.mongodb-stitch.com',
    "path": '/api/client/v2.0/app/starcards-zftcg/service/getFavorites/incoming_webhook/getFavorites',
    "method": "GET",
    headers: {
      "Content-Type": [ "application/json" ]
    }
  };
  


let makeRequest = function(message) {
    let request = http.request(options,function(response) {
       console.log('working');
     })
     response.on('data', function(result) {
        console.log(`BODY: ${result}`);
    });
    process.on('uncaughtException', function (err) {
      console.log(err);
  }); 
}
  
  
  
  
  
    //   .then(resp => {
    //     console.log('here is the response', response);
    //     return resp;
    //   })
    //   .catch((err) => {
    //     console.log('error getting favorites', err);
    //     res.sendStatus(500);
    // })
  // POST
  // axios.post('/', (req, res) => {
  //   cosnole.log(req.body)
  //   .then((result) => {
  //     res.sendStatus(200);
  // })
  // .catch((err) => {
  //     console.log('put query actual miles err', err);
  //     res.sendStatus(500);
  // })
  // });
  
  // // DELETE
  // http.delete('/:id', (req, res) => {
  //   let favoriteId = req.params.id;
  //   Favorite.findByIdAndRemove(
  //       {"_id": favoriteId},
  //       // function(error, removed) 
  //       (error, removedDocument) => {
  //           if (error) {
  //               console.log('error on remove: ', error);
  //               res.sendStatus(500);
  //           } else {
  //               console.log('Document we removed: ', removedDocument);
  //               res.sendStatus(200);
  //           }
  //       }
  //   )
  
  // });
  
  module.exports = router;