var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var db = mongoose.connection;

var Transactions = new Schema({
  memberid : {
    type: Schema.Types.ObjectId,
    ref: 'Customers'
  },
  days: Number,
  out_date: Date,
  due_date: Date,
  in_date: Date,
  fine: Number,
  booklist: [{
    bookid: {
      type: Schema.Types.ObjectId,
      ref: 'Books'
    },
    qty: Number
  }]
});

var transaction = mongoose.model('Transactions', Transactions);

module.exports = transaction
