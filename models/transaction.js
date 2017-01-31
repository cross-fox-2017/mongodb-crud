var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var db = mongoose.connection;

var Transactions = new Schema({
  trscid : {
    type: String,
    required: true
  },
  memberid : {type: Schema.Types.isbn, ref: 'customers'},
  days: Number,
  out_date: Date,
  due_date: Date,
  in_date: Date,
  fine: Number,
  booklist: [{ type: Schema.Types.isbn, ref: 'books' }]
});

var transaction = mongoose.model('Transactions', Transactions);

module.exports = transactions
