const Transaction = require('../models/transactions');

module.exports = {
    getAllTransactions : function(req, res) {
      Transaction.find({}).then(function(data){
        res.send({transactions: data})
      })
  }, getSingleTransaction : function(req,res){
      Transaction.find({_id: req.params.id}).then(function(data){
        res.send({transactions: data})
      })
  }, createTransaction : function(req, res) {
      var newTransaction = Transaction({
        memberid: req.body.memberid,
        days: req.body.days,
        out_date: new Date(),
        // due_date: out_date.setDate(new Date() + req.body.days),
        booklist: [],
        createdAt: new Date(),
        updatedAt: new Date()
      })
      newTransaction.save().then(function(data){
        res.send({transactions: data})
      })
  }, addBooks : function(req, res) {
      Transaction.update(
        {_id: req.params.id},
        {$push: {booklist:{bookid: req.body.bookid, qty: req.body.qty}}},
        {upsert: true}).then(function(data){
        res.send({transactions: data})
      })
  }, deleteBooks : function(req, res) {
      Transaction.update(
        {_id: req.params.id},
        {$pull: {booklist:{bookid: req.body.bookid, qty: req.body.qty}}},
        {upsert: true}).then(function(data){
        res.send({transactions: data})
      })
  }, deleteTransaction : function(req,res){
      Transaction.findOneAndRemove({id: req.body.id}).then(function(data){
        res.send(`Transaction with id:${req.params.id} has been deleted`)
      })
  }, updateTransaction : function(req,res){
      Transaction.findOneAndUpdate({id: req.body.id},{
        memberid: req.body.memberid,
        days: req.body.days,
        // due_date: out_date.setDate(new Date() + req.body.days),
        updatedAt: new Date()
      },{new: true}).then(function(data){
        res.send({transactions: data})
      })
  }
}
