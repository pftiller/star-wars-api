exports = function(arg) {
    const mongodb = context.services.get('mongodb-atlas');
    const db = mongodb.db('starcards');
    db.collection('favorites').deleteOne({
      query: arg.query
  }).then(result => {
    response.setStatusCode(201);
  }).catch((err) => {
      console.log('error:', err);
      result.sendStatus(500);
  });
};
