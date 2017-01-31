`use strict`
const mongoose = require('mongoose');
const Schema = mongoose.Schema

var bookSchema = new Schema({
  isbn: String,
  title: String,
  author: String,
  category: String,
  stock: Number
},
{
  timestamp: true
});

var Book = mongoose.model('Book', bookSchema);

module.exports = Book;
