var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/library');
var Schema   = mongoose.Schema;
var db = mongoose.connection;

var Books = new Schema({
  title : String,
  isbn: String,
  author: String,
  category: String,
  stock: String,
});

// var Transactions = new Schema({
//   memberid : String,
//   days: Number,
//   out_date: Date,
//   due_date: Date,
//   in_date: Date,
//   fine: Number,
//   booklist: []
// });

var Costumers = new Schema({
  name : String,
  memberid: String,
  address: String,
  zipcode: String,
  phone: String
});

var books = mongoose.model('Books', Books);
var costumers = mongoose.model('Costumers', Costumers);

let models = {
  books: books,
  costumers: costumers
}

module.exports = models

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected');
  // console.log(Books.schema);
  // console.log(Costumers.schema);
});
