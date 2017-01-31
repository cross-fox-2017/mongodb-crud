"use strict"

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var transactionsSchema = new Schema({
  memberId: String,
  days: Number,
  out_date: Date,
  due_date: Date,
  in_date: Date,
  fine: Number,
  booklist: [

  ]
},
  {
    timestamp : true
  }
});

var Transactions = mongoose('Transactions', bookSchema)

module.exports = Transactions;
