var mongoose = require('mongoose');

var transaction = mongoose.Schema({
    memberid: String,
    days: Integer,
    out_date: Date,
    due_date: Date,
    in_date: Date,
    fine: Number,
    booklist: Array
});

var Transaction = mongoose.model('Transaction', transaction);

module.exports = Transaction
