var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var db = mongoose.connection;

var Costumers = new Schema({
  name : String,
  memberid: String,
  address: String,
  zipcode: String,
  phone: String
});
var costumers = mongoose.model('Costumers', Costumers);

module.exports = costumers
