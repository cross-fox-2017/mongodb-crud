const mongoose = require('mongoose')
const Schema = mongoose.Schema;


var customerSchema = new Schema({
  name:String,//Dilarang ditulis dengan huruf Besar
  memberid:String,
  address:String,
  zipcode:String,
  phone:String
})

let Customer = mongoose.model('Customer',customerSchema)

module.exports = Customer
