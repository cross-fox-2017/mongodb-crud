const mongoose = require('mongoose')
const Schema = mongoose.Schema

var customerSchema = new mongoose.Schema({
  name:STRING,
  memberid:STRING,
  address:STRING,
  zipcode:STRING,
  phone:STRING
})

let Customer = mongoose.model('Customer',customerSchema)

module.exports = Customer
