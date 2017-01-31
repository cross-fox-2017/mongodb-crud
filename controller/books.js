const Book = require('../models/books');

module.exports = {
    getAllBooks : function(req, res) {
      Book.find({}).then(function(data){
        res.send({books: data})
      })
  }, getSingleBook : function(req,res){
      Book.find({title: req.params.title}).then(function(data){
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
      Book.findOneAndRemove({title: req.body.title}).then(function(data){
        res.send(`Book with title:${req.params.title} has been deleted`)
      })
  }, updateBook : function(req,res){
      Book.findOneAndUpdate({title: req.body.title},{
        isbn: req.body.isbn,
        title: req.body.title,
        author:req.body.author,
        category: req.body.category,
        stock: req.body.stock,
        createdAt: new Date(),
        updatedAt: new Date()
      }).then(function(data){
        res.send({books: data})
      })
  }
}
