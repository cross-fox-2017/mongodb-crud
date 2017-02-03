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
            if (err) {
                res.send(err);
            } else {
                res.send(data)
            }
        })
    },
    showData: function(req, res, next) {
        modelsBook.find({}, function(err, data) {
            // res.send(data)//atau
            res.json(data)
        })
    },

    showDataById: function(req, res, next) {
        modelsBook.findById(req.params.id, function(err, data) {
            if (err) {
                res.send(err)
            } else {
                res.send(data)
            }
        })
    },

    showDataByIsbn: function(req, res, next) {
        modelsBook.find({
            isbn: req.params.isbn
        }, function(err, data) {
            if (err) {
                res.send(err)
            } else {
                res.send(data)
            }
        })
    },

    updateBook: function(req, res, next) {
        modelsBook.findOneAndUpdate({
            isbn: req.params.isbn
        },{
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            stock: req.body.stock
        }, {
          new: true
        }).then(function(err, updateData) {
          if(err){
            res.send(err)
          }else{
            res.send(updateData)
          }
        })
    },
    deleteData: function(req,res, next) {
      modelsBook.find({
          isbn: req.params.isbn
      },function(err, data) {
        if(err){
          res.send(err)
        }else{
          data[0].remove(function(err) {
            if(err){
              res.send(err)
            }else{
              res.send("Data Dengan ISBN: "+data[0].isbn+" Terhapus")
            }
          })
        }
      })
    }
}

module.exports = Book
