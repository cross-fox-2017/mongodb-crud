var mongoose = require('mongoose');

var customer = mongoose.Schema({
    name: String,
    memberid: String,
    address: String,
    zipcode: String,
    phone: String
});

var Customer = mongoose.model('Customer', customer);

module.exports = Customer
