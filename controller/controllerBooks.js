`use strict`
var Book = require('../models/books.js');

module.exports = {

    findAllBooks : function(req, res, next) {
      Book.find({}, function(err, books){
        if(err) throw err;
        res.send(books);
      })
    },

    findByIsbn : function(req, res, next) {
      Book.find({isbn: req.query.isbn}, function(err,books){
        if(err) throw err;
        res.send(books);
      })
    },

    createBook : function(req, res, next) {

    var newBook = Book({
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
    })

    newBook.save(function(err){
      if (err) throw err;

      res.send(`${req.body.title} has been created`)
    })

    },

    updateBook : function(req, res, next) {
      Book.findOneAndUpdate({isbn: req.params.isbn}, req.body ,{new : true}, function(err,book){
        if(err) throw err;

          res.send(book);
        })
    },

    deleteBook : function(req, res, next) {
      Book.findOneAndRemove({isbn: req.params.isbn}, function(err){
        if(err) throw err;

          res.send(`book with isbn ${req.params.isbn} has been removed`);
        })
    }

}
