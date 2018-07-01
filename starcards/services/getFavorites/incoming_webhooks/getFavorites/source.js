exports = function(arg) {
    const mongodb = context.services.get('mongodb-atlas');
    const db = mongodb.db('starcards');
    db.collection('favorites').find({ _id: { $eq: arg }}).toArray(function(err, result) {
      if (err) {
        console.log('error getting all my rides', err);
        res.sendStatus(500);
      }
      else {
        response.setStatusCode(201);
        response.setBody(result.insertedId);
      }
    });
};
