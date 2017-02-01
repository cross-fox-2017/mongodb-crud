"use strict"

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var transactionsSchema = new Schema({
  memberId: {type: Schema.Types.ObjectId, ref: 'Customers'},
  // days: Number,
  // out_date: Date,
  // due_date: Date,
  // in_date: Date,
  // fine: Number,
  booklist: [{
    bookId : {type: Schema.Types.ObjectId, ref: 'Book'},
    qty : Number
  }],
  updatedAt: Date,
  createdAt: Date
});

var Transactions = mongoose.model('Transactions', transactionsSchema)

module.exports = Transactions;
