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
    type: String,
    required: true
  },
  zipcode: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  }
});
var customers = mongoose.model('Customers', customers);

module.exports = customers
