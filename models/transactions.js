const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let transactionSchema = new Schema({
  memberid: {type: Schema.Types.ObjectId, ref: 'Customer'},
  days: Number,
  out_date: Date,
  due_date: Date,
  in_date: Date,
  fine: Number,
  booklist: [
    {bookid: {type: Schema.Types.ObjectId, ref: 'Book'},
    qty: Number}
  ],
  updatedAt: Date,
  createdAt: Date
})

var Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
