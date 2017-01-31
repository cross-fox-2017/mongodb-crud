var mongoose = require('mongoose');

var Schema   = mongoose.Schema;

var customers = new Schema({
    name        : String,
    memberid    : String,
    address     : String,
    zipcode     : String,
    phone       : String
});

mongoose.model('customers', customers);

module.exports = customers
