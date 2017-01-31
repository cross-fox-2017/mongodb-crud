var mongoose = require('mongoose');

var Schema   = mongoose.Schema;

var books = new Schema({
    isbn     : String,
    title    : String,
    author   : String,
    category : String,
    stock    : Number
});

var Book = mongoose.model('Book', books);

module.exports = Book
