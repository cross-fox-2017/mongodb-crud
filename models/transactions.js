const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let transactionSchema = new Schema({
  memberid: String,
  days: Number,
  out_date: Date,
  due_date: Date,
  in_date: Date,
  fine: Number,
  booklist: Object,
  updatedAt: Date,
  createdAt: Date
})

var Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
