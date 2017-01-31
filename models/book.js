var mongoose = require('mongoose');

var book = mongoose.Schema({
    isbn: String,
    title: String,
    author: String,
    category: String,
    stock: Number
});

var Book = mongoose.model('Book', book);

module.exports = Book
