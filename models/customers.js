"use strict"

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customersSchema = new Schema({
  name: String,
  memberId: String,
  address: String,
  zipcode: String,
  phone: String
},
  {
    timestamps : true
  }
});

var Customers = mongoose('Customers', bookSchema)

module.exports = Customers;
