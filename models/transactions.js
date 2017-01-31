`use strict`
const mongoose = require('mongoose');
const Schema = mongoose.Schema

var transactionSchema = new Schema({
  memberid: String,
  days:Number,
  out_date: Date,
  due_date: Date,
  in_date: Date,
  fine: Number,
  booklist: Array
},
{
  timestamps: true
});

var Transaction = mongoose.model('Transaction', TransactionSchema);

module.exports = Transaction;
