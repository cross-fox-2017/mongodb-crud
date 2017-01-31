var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var db = mongoose.connection;

var Books = new Schema({
  title : String,
  isbn: String,
  author: String,
  category: String,
  stock: String,
});

var books = mongoose.model('Books', Books);

module.exports = books

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected');
  // console.log(Books.schema);
  // console.log(Costumers.schema);
});
