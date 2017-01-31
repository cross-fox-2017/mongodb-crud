var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var transactionsSchema = new Schema({
    memberid: String,
    days: Number,
    out_date: new Date(),
    due_date: new Date(),
    in_date: new Date(),
    fine: Number,
    booklist:
      [{
        type: Schema.Types.ObjectId,
        ref: "Books"
      }]
});

module.exports = mongoose.model('Transactions', transactionsSchema);
