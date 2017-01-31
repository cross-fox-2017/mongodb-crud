"use strict"

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var booksSchema = new Schema({
  isbn: String,
  title: String,
  author: String,
  category: String,
  stock: Number
},
  {
    timestamps : true
  }
});

var Books = mongoose('Books', bookSchema)

module.exports = Books;
