'use strict'

const Transaction =  require('../models/transaction.js')


module.exports={
  newTransaction: function(req,res){
    var newTrans = Transaction({
      memberid: req.body.memberid
    });

    newTrans.save(function(err) {
      if (err) throw err;
      res.send(newTrans);
    });
  },
  getTrans: function(req,res){
    Transaction.find({},{__v:false}).populate('booklist.bookid').populate('memberid').then(function(trans){
      res.send(trans)
    })
  },
  addBook: function(req,res){
    var book = {bookid:req.body.bookid,qty:req.body.qty}
    Transaction.update(
      {_id: req.params.id},
      {$push:{booklist:book}},
      {upsert:true}
    ).then(function(tes){
      res.send(tes)
    })
  },
  deleteTrans: function(req,res){
    Transaction.find({_id:req.params.id}).then(function(tes){
      tes.destroy()
    })
  },
  bookOut: function(req,res){
    Transaction.find({_id: req.params.id}).then(function(tes){

      tes.forEach(function(result){
          var bok = result.booklist.map(function(a) {return a.bookid;});
          res.send(bok.toString())
        //borrow_date: new Date()
      })
    })
  }

}
