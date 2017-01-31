var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var db = mongoose.connection;

var Customers = new Schema({
  name : {
    type: String,
    required: true
  },
  memberid: {
    type: String,
    required: true
  },
  address: {
    type: String
  },
  zipcode: {
    type: String
  },
  phone: {
    type: String
  },
});
var customers = mongoose.model('Customers', Customers);

module.exports = customers
