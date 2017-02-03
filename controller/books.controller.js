'use strict'

const Book =  require('../models/book.js')


module.exports={
  newBook: function(req,res){
    var newBook = Book({
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock,
    });

    newBook.save(function(err) {
      if (err) throw err;
      res.send(newBook);
    });
  },
  getBooks: function(req,res){
    Book.find({}, function(err,books) {
      if (err) throw err;

      res.send(books);
    });

  },
  getBook: function(req,res){
    Book.find({isbn:req.params.isbn}, function(err,book) {
      if (err) throw err;

      res.send(book);
    });

  },
  updateBook: function(req,res){
    Book.findOne({isbn:req.params.isbn}, function(err, book) {
      if (err) throw err;


      book.title= req.body.title,
      book.author= req.body.author,
      book.category= req.body.category,
      book.stock= req.body.stock,

      // save the user
      book.save(function(err) {
        if (err) throw err;

        res.send(book);
      });

    });
  },
  deleteBook: function(req,res){
    Book.findOneAndRemove({isbn:req.params.isbn}, function(err) {
        if (err) throw err;

      res.send(`Book with isbn ${req.params.isbn} deleted!`);
    });
  }

}
