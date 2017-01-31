let Books      = require ('../models/books')
// let Books       = model.Books;

module.exports = {

  // GET all Books
  getAllBook : function(req, res) {
    Books.find({}, (err,data) => {
      res.send(data);
    })
  },

  // GET singe Book
  getBook : function(req, res) {
    Books.find({ isbn: req.params.isbn }).then((data) => {

      res.send(data);
    });
  },

  // CREATE Book
  createBook : function(req,res,next){
    var newBook = Books({
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    newBook.save((err) =>{

      res.send('Book created!');
  })},

  //UPDATE
  updateBook :function(req, res, next) {
    Books.findOneAndUpdate({isbn: req.params.isbn}, req.body, {new: true}).then( (data) => {
        res.send(data)
      })
  },

  //DELETE
  deleteBook : function(req,res){
    Books.findOneAndRemove( {isbn: req.params.isbn}).then(function(data) {
      res.send('Book has been removed')
    })
  }
}
