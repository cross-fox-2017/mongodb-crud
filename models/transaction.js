var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var db = mongoose.connection;

var Transactions = new Schema({
  memberid : String,
  days: Number,
  out_date: Date,
  due_date: Date,
  in_date: Date,
  fine: Number,
  booklist: []
});

var transaction = mongoose.model('Transactions', Transactions);

module.exports = transactions
