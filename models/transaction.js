var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var db = mongoose.connection;

var Transactions = new Schema({
  trscid : String,
  memberid : {type: Schema.Types.isbn, ref: 'costumers'},
  days: Number,
  out_date: Date,
  due_date: Date,
  in_date: Date,
  fine: Number,
  booklist: [{ type: Schema.Types.isbn, ref: 'books' }]
});

var transaction = mongoose.model('Transactions', Transactions);

module.exports = transactions
