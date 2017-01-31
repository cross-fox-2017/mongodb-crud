const modelsBook = require('../models/book')

var Book = {
    insertData: function(req, res, next) {
        var saveData = new modelsBook({
            isbn: req.body.isbn,
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            stock: req.body.stock
        })
          saveData.save(function(err, data) {
              if(err){
                res.send(err);
              }else{
                res.send(data)
              }
          })
    },
    showData: function(req,res,next){

    }
}

module.exports = Book
