var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var transactionsSchema = new Schema({
    memberId: {
      type: Schema.Types.ObjectId,
      ref: "Customers"
    },
    books: [{
      type: Schema.Types.ObjectId,
      ref: "Books"
    }]
});

module.exports = mongoose.model('Transactions', transactionsSchema);
