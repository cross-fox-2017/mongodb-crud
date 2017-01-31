var mongoose = require('mongoose');

var Schema   = mongoose.Schema;

var books = new Schema({
    isbn     : String,
    title    : String,
    author   : String,
    category : String,
    stock    : Number
});

mongoose.model('books', books);

module.exports = Book
