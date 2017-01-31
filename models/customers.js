var mongoose = require('mongoose');

var Schema   = mongoose.Schema;

var customers = new Schema({
    name        : String,
    memberid    : String,
    address     : String,
    zipcode     : String,
    phone       : String
});

var Customer = mongoose.model('Customer', customers);

module.exports = Customer
