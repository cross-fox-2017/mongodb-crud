'use strict'
var transactions = require('../models/transaction.js')
var books = require('../models/book.js')


let transactionController = {
  createCart: function(req, res){
    let data = {
      memberid : req.body.memberid,
      booklist: [],
      days: req.body.days,
      out_date: req.body.out_date,
      due_date: req.body.due_date,
      in_date: req.body.in_date,
      fine: req.body.fine
    }
    let newCart = transactions(data)
    newCart.save(function(err, cart){
      if (err) throw err
      res.json({
        msg: 'New Cart Created',
        cart: cart})
    })
  },
  removeItem : function (req, res){
    let bookid = req.body.bookid
    let transactionid = req.body.transactionid
    transactions.findOneAndUpdate(
      { _id: transactionid},
      { $pull: {booklist: bookid}},
      { new : true},
      function(err, data){
        if(err) throw err;
        res.json(data)
      }
    )
  },
  addItem : function (req, res){
    let bookid = req.body.bookid
    let transactionid = req.body.transactionid
    let qty = req.body.qty
    transactions.findOneAndUpdate(
      { _id: transactionid},
      { $push: {booklist: {bookid: bookid, qty: qty}}},
      {safe: true, upsert: true, new : true},
      function(err, data){
        if(err) throw err;
        res.json(data)
      }
    )
  },
  findAll: function(req, res){
    transactions.find({}, function(err, transactions){
      if (err) throw err;
      res.json(transactions)
    })
  },
  deleteTransaction: function(req, res){
    let transactionid = req.params.transactionid
    transactions.findOne({ _id: transactionid}, function(err, transaction){
      if (err) throw err;
      if (!transaction){res.send('not found')
      } else {
        transaction.remove(function(err){
          if (err) throw err;
          res.json({
            msg: 'transaction deleted',
            transaction: transaction
          })
        })
      }
    })
  },
  findById: function(req, res, next){
    let transactionid = req.params.transactionid
    transactions.find({_id: transactionid}).populate('memberid').populate('booklist.bookid').exec(function(err, data){
      res.json(data)
    }).catch(function(err){
      res.send(err)
    })
  },
  checkOut: function(req, res){
    let transactionid = req.params.transactionid
    transactions.findOne({_id: transactionid}).populate('booklist.bookid').exec(function(err, data){
      data.booklist.forEach(function(book){
        books.findOneAndUpdate({_id: book.bookid}, {stock: book.qty}, {new: true}).then(function(data) {
          console.log(data);
        })
      })
    })
  }
}

module.exports = transactionController
