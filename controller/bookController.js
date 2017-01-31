'use strict'
var books = require('../models/book.js')

let bookController = {
  create : function(req, res){
    let data = {
      isbn : req.body.isbn,
      title : req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
    }
    let newbooks = books(data)
    newbooks.save(function(err){
      if(err) throw err;
      res.json({
        msg: 'book Created!',
        book: newbooks
      })
    })
  },
  findAll: function(req, res){
    books.find({}, function(err, books){
      if (err) throw err;
      res.json(books)
    })
  },
  findByISBN: function(req, res){
    let isbn = req.params.isbn
    books.find({isbn: isbn}, function(err, book){
      if (err) throw err;
      res.json(book)
    })
  },
  updateStock: function(req, res){
    let isbn = req.params.isbn
    let stock = req.body.stock
    books.findOneAndUpdate({isbn: isbn}, {stock: stock}, {new: true}, function(err, book){
      if (err) throw err;
      res.json({
        msg: 'Stock Updated',
        book: book
      })
    })
  },
  delete: function(req, res){
    let isbn = req.params.isbn
    books.find({ isbn: isbn }, function(err, book) {
      if (err) throw err;
      books.remove(function(err) {
        if (err) throw err;
        res.json({
          msg: 'books Deleted',
          book: book
        });
      });
    });
  }
}

module.exports = bookController
