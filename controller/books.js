const Book = require('../models/books');

module.exports = {
    getAllBooks : function(req, res) {
      Book.find({}).then(function(data){
        res.send({books: data})
      })
  }, getSingleBook : function(req,res){
      Book.find({isbn: req.params.isbn}).then(function(data){
        res.send({books: data})
      })
  }, createBook : function(req, res) {
      var newBook = Book({
        isbn: req.body.isbn,
        title: req.body.title,
        author:req.body.author,
        category: req.body.category,
        stock: req.body.stock,
        createdAt: new Date(),
        updatedAt: new Date()
      })
      newBook.save().then(function(data){
        res.send({books: data})
      })
  }, deleteBook : function(req,res){
      Book.findOneAndRemove({isbn: req.body.isbn}).then(function(data){
        res.send(`Book with isbn:${req.params.isbn} has been deleted`)
      })
  }, updateBook : function(req,res){
      Book.findOneAndUpdate({isbn: req.body.isbn},{
        title: req.body.title,
        author:req.body.author,
        category: req.body.category,
        stock: req.body.stock,
        updatedAt: new Date()
      },
    {new: true}).then(function(data){
        res.send({books: data})
      })
  }
}
