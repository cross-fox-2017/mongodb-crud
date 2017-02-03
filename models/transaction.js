var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// create a schema
var transactionSchema = new Schema({
  memberid: {type:Schema.Types.ObjectId,ref:'Customer'},
  booklist: [
    {bookid:{type:Schema.Types.ObjectId,ref:'Book'},
     qty:Number}
  ],
  borrow_date: Date,
  Return_date: Date,
  created_at: Date,
  updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
var Transaction = mongoose.model('Transaction', transactionSchema);

// make this available to our users in our Node applications
module.exports = Transaction;
