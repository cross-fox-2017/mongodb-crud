"use strict"

const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var booksSchema = new Schema({
  isbn: String,
  title: String,
  author: String,
  category: String,
  stock: Number,
  createdAt: Date,
  updatedAt: Date
});

var Books = mongoose.model('Books', booksSchema)

module.exports = Books;
