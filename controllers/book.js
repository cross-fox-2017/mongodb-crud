const Book = require('../models/books');

module.exports = {
  getBooks: function(req,res) {
    Book.find().then(function(data){
      res.send(data)
    })
  }
}
