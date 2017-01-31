const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
  isbn: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  category: String,
  stock: Number
},
  {
    timestamps: true
  })

module.exports = mongoose.model('Book', BookSchema)
