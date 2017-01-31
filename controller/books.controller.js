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

    // save the user
    newBook.save(function(err) {
      if (err) throw err;
      res.send('Book created!');
    });
  },
  getBooks: function(req,res){
    Book.find({}, function(err,books) {
      if (err) throw err;

      // object of all the users
      res.send(books);
    });

  }

}
