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
        modelsBook.find({},function(err, data) {
          // res.send(data)//atau
          res.json(data)
        })
    },

    showDataById: function(req, res, next){
      modelsBook.findById(req.params.id,function(err, data) {
        if(err){
          res.send(err)
        }else{
          res.send(data)
        }
      })
    },

    showDataByIsbn: function(req, res, next){
      modelsBook.find({isbn:req.params.isbn},function(err, data) {
        if(err){
          res.send(err)
        }else{
          res.send(data)
        }
      })
    }
}

module.exports = Book
