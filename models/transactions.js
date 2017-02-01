`use strict`
const mongoose = require('mongoose');
const Schema = mongoose.Schema

var transactionSchema = new Schema({
  memberid: {type: Schema.Types.ObjectId, ref: "Customer"},
  days:Number,
  out_date: Date,
  due_date: Date,
  in_date: Date,
  fine: Number,
  booklist: [
    {bookid: {type: Schema.Types.ObjectId, ref : 'Book'}, qty: Number}
  ]
},
{
  timestamps: true
});

var Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
