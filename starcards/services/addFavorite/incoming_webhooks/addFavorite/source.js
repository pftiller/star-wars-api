exports = function(arg) {
    const mongodb = context.services.get('mongodb-atlas');
    const db = mongodb.db('starcards');
    db.collection('favorites').insertOne({
      body: EJSON.parse(arg.body),
      query: arg.query
  }).then(result => {
    response.setStatusCode(201);
    response.setBody(result.insertedId);
  }).catch((err) => {
      console.log('error getting all my rides' + err);
      response.sendStatus(500);
  });
};