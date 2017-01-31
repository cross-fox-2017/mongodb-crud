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
        msg: 'User Created!',
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
  findByTitle: function(req, res){
    let title = req.body.title
    books.find({title: title}, function(err, book){
      if (err) throw err;
      res.json(book)
    })
  },
  updateStock: function(req, res){
    let title = req.body.title
    let stock = req.body.stock
    books.find({title: title}, function(err, book){
      if (err) throw err;
      book.stock = stock
      user.save(function(err){
        if (err) throw err;
        res.json({
          msg: 'Stock Updated',
          book: book
        })
      })
    })
  },
  delete: function(req, res){
    let title = req.body.title
    books.find({ username: 'starlord55' }, function(err, book) {
      if (err) throw err;
      book.remove(function(err) {
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
