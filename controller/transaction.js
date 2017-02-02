const modelsTransaction = require('../models/transaction')
const modelsBook = require('../models/book')
const modelsCustomer = require('../models/customer')


var Transaction = {
    insertData: function(req, res, next) {
        var saveData = new modelsTransaction({
            memberId: req.body.memberid,
            booklist: []
        })
        saveData.save(function(err, data) {
            if (err) {
                res.send(err);
            } else {
                res.send({
                    _id: data._id,
                    memberId: data.memberId,
                    booklist: []
                })
            }
        })
    },
    addBook: function(req, res, next) {
        modelsTransaction.findOneAndUpdate({
            _id: req.params.id
        }, {
            $push: {
                booklist: req.body.booklist
            }
        }, {
            new: true
        }).then(function(err, updateBook) {
            if (err) {
                res.send(err)
            } else {
                res.send(updateData)
            }
        })
    },

    deleteBookTransaction: function(req, res, next) {
      modelsTransaction.find({
          _id: req.params.id
      },function(err, data) {
        if(err){
          res.send(err)
        }else{
          var booklist = data[0].booklist
          if(booklist.indexOf(req.body.booklist)>=0){
            booklist.splice(booklist.indexOf(req.body.booklist),1)
            $pushAll: {
                data[0].booklist= booklist
            }
            data[0].save(function(err) {
              if(err){
                res.send(err)
              }else{
                res.send(data[0])
              }
            })
          }else{
            res.send("Buku Belum Masuk Keranjang Transaksi")
          }
        }
      })
    },
    getTransaction: function(req, res, next) {
        modelsTransaction.find().populate('memberId').populate('booklist').exec(function(err, data) {
            res.send(data);
        })
    },
    deleteTransaction: function(req, res, next) {
        modelsTransaction.findByIdAndRemove(req.params.id, function(err) {
          if(err){
            res.send(err)
          }else{
            res.send("Transaction ID : "+ req.params.id +" Terhapus")
          }
        })
    },
    checkOut:function(req, res, next) {
      
    }
}

module.exports = Transaction
