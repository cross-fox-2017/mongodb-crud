var Book = require("../models/book");

module.exports = {
  list: function(req, res, next){
    Book.find({}).then(function(buku){
    res.json(buku);
    })
  },

  find: function(req, res, next){
    Book.findOne({isbn: req.params.isbn},function(err, book){
      if (err) throw err;
      res.json(book);
    })
  },

  delete: function(req, res, next){
    Book.findOne({isbn: req.params.isbn},function(err, book){
      if (err) throw err;
      Book.remove(function(err){
        if (err) throw er;
      })
      res.send(`Buku dengan isbn ${req.params.isbn} berhasil dihapus`);
    })
  },

  add: function(req, res, next){
    Book.create({
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock})
      .then(function(user){
        res.json(user);
      })
      .catch(function(err){
        res.json('silahkan isi data dengan lengkap')
      })
  },
  update: function(req, res, next){
    Book.update({
      stock: req.body.stock})
      .then(function(user){
        res.send(`Stok buku sekarang adalah: ${req.body.stock}`);
      })
      .catch(function(err){
        res.json('error')
      })
  }
}
