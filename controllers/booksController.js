const books = require('../models/books');

module.exports = {
  createBook: function(req, res, next) {
    let newBook = books({
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
    });

    // save the Book
    newBook.save(function(err, book) {
      if (err) throw err;
      res.send(`Insert Data Success!\n${book}`);
    });
  },
  getBook: function(req, res, next) {
    books.find({ isbn: req.params.isbn }, function(err, book) {
      if (err) throw err;

      // object of the book
      res.send(`${book}`);
    });
  },
  getBooks: function(req, res, next) {
    books.find({}, function(err, books) {
      if (err) throw err;

      // object of all the books
      res.send(books);
    });
  },
  updateBook: function(req, res, next) {
    // find the isbn
    // update from the isbn
    books.findOneAndUpdate(
      {
        isbn: req.params.isbn
      },
      {
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        stock: req.body.stock
      }, function(err, book) {
      if (err) throw err;
      // we have the updated book returned to us
      res.send(`Book with isbn : ${req.params.isbn} has been updated!`);
    });
  },
  deleteBook: function(req, res, next) {
    // get the user
    books.findOneAndRemove({ isbn: req.params.isbn }, function(err) {
      if (err) throw err;
      // we have deleted the user
      res.send(`Book with isbn : ${req.params.isbn} has been deleted!`);
    });
  }
};
