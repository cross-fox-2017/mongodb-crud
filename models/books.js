const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let bookSchema = new Schema({
  isbn: {type: String, required: true, unique: true},
  title: String,
  author: String,
  category: String,
  stock: {type: Number, required: true},
  updatedAt: Date,
  createdAt: Date
})

var Book = mongoose.model('Book', bookSchema);

module.exports = Book;
