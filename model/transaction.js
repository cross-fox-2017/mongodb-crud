var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var transactionSchema = new Schema({
  memberid: String,
  days:Number,
  out_date: Date,
  due_date: Date,
  in_date: Date,
  fine:Number,
  booklist:{}
});
var transaction = mongoose.model('Transaction', transactionSchema);

module.exports = transaction;
