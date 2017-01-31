const Book = require('../models/books');

module.exports = {
  getBooks: function(req,res) {
    Book.find().then(function(data){
      res.send(data)
    })
  },

  addBook: function(req,res){
  let book =  {
      isbn     : req.body.isbn,
      title    : req.body.title,
      author   : req.body.author,
      category : req.body.category,
      stock    : req.body.stock
     }

    Book.create(book)
    res.send("Data Created")
  },

  editBook: function(req,res){

    var conditions = { isbn : req.params.isbn }
    var update = {
       title    : req.body.title,
       author   : req.body.author,
       category : req.body.category,
       stock    : req.body.stock
      }

    Book.update(conditions,{ $set: update},{new: true},function(err,data){

          if(err)
          res.send(err)
          if(data)
          console.log("data updated !");
    });


    res.send(`Book ${req.body.title} updated !`)
  },

  deleteBook: function(req,res){

    var conditions = { isbn : req.params.isbn }

    Book.remove(conditions,function(data){

        res.send("Book Deleted !")
    })

  },
}
