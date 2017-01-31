var mongoose = require('mongoose');


var Schema   = mongoose.Schema;

var transactions = new Schema({
    memberid       : String,
    days           : Number,
    out_date       : Date,
    due_date       : Date,
    in_date        : Date,
    fine           : Number,
    booklist       : { type:Array, "default":[] }
});


mongoose.model('transactions', transactions);

module.exports = Transaction
