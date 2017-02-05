const Book = require('../model/book');

module.exports = {

/* show all data book */
getAllBook : function(req, res, next) {
  Book.find({},function(err,books){
    if(err)throw err;
    res.json(books)
  })
},
/* insert new book */
createNewBook : function(req, res, next) {
  var newBook = new Book({
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    stock: req.body.stock
  })
  newBook.save(function(err,data){
    if(err)throw err;
    res.send({data:data})
  })
},
/* deleted book from database */
deleteBook: function(req, res, next) {
  var input_isbn = req.body.isbn
  Book.findOneAndRemove({ isbn: input_isbn }, function(err) {
  if (err) throw err;
    Book.find({},function(err,books){
      if(err)throw err;
      res.send({msg:"Deleted"})
    })
  });
},
/* update data book */
updateBook: function(req, res, next) {
  Book.findOneAndUpdate({ isbn: req.body.isbn }, { title: req.body.title, author: req.body.author, category: req.body.category, stock: req.body.stock}, function(err, user) {
  if (err) throw err;
  Book.find({},function(err,books){
    if(err)throw err;
    res.send({msg:"updated"})
  })
});
}
}
