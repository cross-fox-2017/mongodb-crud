const Transaction = require('../models/transactions');

module.exports = {
    getAllTransactions : function(req, res) {
      Customer.find({}).then(function(data){
        res.send({transactions: data})
      })
  }, getSingleTransaction : function(req,res){
      Transaction.find({id: req.params.id}).then(function(data){
        res.send({transactions: data})
      })
  }, createTransaction : function(req, res) {
      var newTransaction = Transaction({
        memberid: req.body.memberid,
        days: req.body.days,
        out_date:req.body.out_date,
        due_date: req.body.due_date,
        in_date: req.body.in_date,
        fine: req.body.fine,
        booklist: req.body.booklist,
        createdAt: new Date(),
        updatedAt: new Date()
      })
      newTransaction.save().then(function(data){
        res.send({transactions: data})
      })
  }, deleteTransaction : function(req,res){
      Transaction.findOneAndRemove({memberid: req.body.memberid}).then(function(data){
        res.send(`Transaction with memberid:${req.params.memberid} has been deleted`)
      })
  }, updateTransaction : function(req,res){
      Transaction.findOneAndUpdate({memberid: req.body.memberid},{
        name: req.body.name,
        address:req.body.address,
        zipcode: req.body.zipcode,
        phone: req.body.phone,
        updatedAt: new Date()
      },{new: true}).then(function(data){
        res.send({transactions: data})
      })
  }
}
