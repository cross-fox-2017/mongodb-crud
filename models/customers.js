const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let customerSchema = new Schema({
  name: String,
  memberid: String,
  address: String,
  zipcode: String,
  phone: String,
  updatedAt: Date,
  createdAt: Date
})

var Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
