'use strict'
var transactions = require('../models/transaction.js')

let transactionController = {
  createCart: function(req, res){
    let data = {
      memberid : req.body.memberid,
      booklist: []
    }
    let newCart = transactions(data)
    newCart.save(function(err, cart){
      if (err) throw err
      res.json({
        msg: 'New Cart Created',
        cart: cart})
    })
  },
  addItem : function (req, res){
    let bookid = req.body.bookid
    let transactionid = req.body.transactionid
    transactions.findOneAndUpdate(
      { _id: transactionid},
      { $push: {booklist: bookid}},
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
  }
}

module.exports = transactionController
