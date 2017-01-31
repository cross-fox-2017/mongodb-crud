"use strict"

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customersSchema = new Schema({
  name: String,
  memberId: String,
  address: String,
  zipcode: String,
  phone: String,
  createdAt: Date,
  updatedAt: Date
});

var Customers = mongoose.model('Customers', customersSchema)

module.exports = Customers;
