var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// create a schema
var customerSchema = new Schema({
  name: String,
  memberid: String,
  address: String,
  zipcode: String,
  created_at: Date,
  updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
var Customer = mongoose.model('Customer', customerSchema);

// make this available to our users in our Node applications
module.exports = Customer;
