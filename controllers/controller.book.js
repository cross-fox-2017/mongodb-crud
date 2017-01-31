const modelBook = require('../models/model.book');

var controllerBook = {
  /* create new book */
  createBook : function(req, res, next){

    // create a new book
    var newBook = modelBook({
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
    });

    // save the user
    newBook.save(function(err, data) {
      if (err) throw err;
      res.json("buku telah berhasil di buat : " + data)
    });

  },
  /* get All Book */
  getAllBook : function(req, res, next){
    modelBook.find({}, function(err, data){
      res.json(data);
    })
  },
  /* find one book */
  getOneBook : function(req, res, next){
    modelBook.find({isbn: req.params.isbn}, function(err, data){
      res.json(data);
    })
  },
  /* edit book */
  editOneBook : function(req, res, next){
    modelBook.findOneAndUpdate({ isbn: req.params.isbn}, {
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
    },{
      new: true
    }, function(err, data) {
      if (err) throw err;
      // we have the updated book returned to us
      res.json("data has been updated : " + data);
    });
  },
  /* delete book */
  deleteOneBook : function(req, res, next){
    modelBook.findOneAndRemove({ isbn: req.params.isbn }, function(err, data) {
      if (err) throw err;
      res.json("book with isbn : " + data.isbn + "has been deleted");
    });
  }
}

module.exports = controllerBook
