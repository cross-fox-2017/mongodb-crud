`use strict`
var Transaction = require('../models/transactions.js');

module.exports = {

    findAllTransactions : function(req, res, next) {
      Transaction.find({}, function(err, transactions){
        if(err) throw err;
        res.send(transactions);
      })
    },

    findById : function(req, res, next) {
      Transaction.find({_id: req.query.id}, function(err,transactions){
        if(err) throw err;
        res.send(transactions);
      })
    },

    createTransaction : function(req, res, next) {

    var newTransaction = Transaction({
      memberid: req.body.memberid,
      days: req.body.days,
      out_date: new Date(),
      due_date: new Date(),
      in_date: new Date(),
      fine: req.body.fine,
      booklist:[]
    })

    newTransaction.save(function(err){
      if (err) throw err;

      res.send(`transaction with memberid ${req.body.memberid} has been created`)
    })

    },

    addBooksToCart : function (req, res) {
      Transaction.update(
        {_id: req.params.id},
        {$push: {booklist:{bookid: req.body.bookid, qty: req.body.qty}}},
        {upsert: true}).then(function(data){
          res.send(data)
        })
    },

    deleteBooksfromCart : function (req, res) {
      Transaction.update(
        {_id: req.params.id},
        {$pull: {booklist:{bookid: req.body.bookid, qty: req.body.qty}}},
        {upsert: true}).then(function(data){
          res.send(data)
        })
    },

    updateTransaction : function(req, res, next) {
      Transaction.findOneAndUpdate({_id: req.params.id}, req.body ,{new : true}, function(err,book){
        if(err) throw err;

          res.send(book);
        })
    },

    deleteTransaction : function(req, res, next) {
      Transaction.findOneAndRemove({_id: req.params.id}, function(err){
        if(err) throw err;

          res.send(`transactions with id ${req.params.id} has been removed`);
        })
    }

}
