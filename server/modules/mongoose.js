/** -------- MONGOOSE CONNECTION --------**/
var mongoose = require('mongoose');

var databaseUrl = 'mongodb://localhost:27017/mean-star-wars';

mongoose.connection.on('connected', function() {
  console.log('mongoose connected to : ', databaseUrl);
});

mongoose.connection.on('error', function(err) {
  console.log('mongoose connection error: ', err);
});

mongoose.connect(databaseUrl);

module.exports = mongoose;