const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var transactionSchema = new Schema({
    memberid: STRING,
    day: INTEGER,
    out_date: DATE,
    due_date: DATE,
    in_date: DATE,
    fine: INTEGER,
    booklist: [{
        isbn: STRING,
        qty: INTEGER
    }]
})

let Transaction = mongoose.model('Transaction',transactionSchema)

module.exports = Transaction
