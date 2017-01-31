`use strict`
const mongoose = require('mongoose');
const Schema = mongoose.Schema

var customerSchema = new Schema({
  name: String,
  memberid: String,
  address: String,
  zipcode: String,
  phone: String
},
{
  timestamp: true
});

var Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
