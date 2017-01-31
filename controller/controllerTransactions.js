`use strict`
var Transaction = require('../models/transactions.js');

module.exports = {

    findAllTransactions : function(req, res, next) {
      Transaction.find({}, function(err, transactions){
        if(err) throw err;
        res.send(transactions);
      })
    },

    findByMemberId : function(req, res, next) {
      Transaction.find({memberid: req.query.memberid}, function(err,transactions){
        if(err) throw err;
        res.send(transactions);
      })
    },

    createTransaction : function(req, res, next) {

    var newTransaction = Transaction({
      memberid: req.body.memberid,
      days: req.body.days,
      out_date: req.body.out_date,
      due_date: req.body.due_date,
      in_date: req.body.in_date,
      fine: req.body.fine,
      booklist:[ ]
    })

    newTransaction.save(function(err){
      if (err) throw err;

      res.send(`transaction for user with ${req.body.memberid} has been created`)
    })

    },

    updateTransaction : function(req, res, next) {
      Transaction.findOneAndUpdate({memberid: req.params.memberid}, req.body ,{new : true}, function(err,book){
        if(err) throw err;

          res.send(book);
        })
    },

    deleteTransaction : function(req, res, next) {
      Transaction.findOneAndRemove({memberid: req.params.memberid}, function(err){
        if(err) throw err;

          res.send(`transactions with id ${req.params.memberid} has been removed`);
        })
    }

}
