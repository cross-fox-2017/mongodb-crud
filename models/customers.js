const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let customerSchema = new Schema({
  name: String,
  memberid: {type: String, required: true, unique: true},
  address: String,
  zipcode: String,
  phone: {type: String, required: true, unique: true},
  updatedAt: Date,
  createdAt: Date
})

var Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
