const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var transactionSchema = new Schema({
  memberId: {
    type: Schema.Types.ObjectId,
    ref: "Customer"
  },
    // day: Number,
    // out_date: new Date(),
    // due_date: new Date(),
    // in_date: new Date(),
    // fine: Number,
    booklist: [{
      type: Schema.Types.ObjectId,
      ref: "Book"
    }]
})

let Transaction = mongoose.model('Transaction',transactionSchema)

module.exports = Transaction
