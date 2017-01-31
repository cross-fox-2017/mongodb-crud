const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({
  memberid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer'
  },
  days: Number,
  out_date: Date,
  due_date: Date,
  in_date: Date,
  fine: Number,
  booklist: [{
    bookid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book'
    },
    qty: {
      type: Number,
      ref: 'Book'
    }
  }]
},
  {
    timestamps: true
  })

module.exports = mongoose.model('Transaction', TransactionSchema)
