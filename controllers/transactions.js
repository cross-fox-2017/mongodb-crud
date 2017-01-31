const Transaction = require('../models/transactions');

module.exports = {
  add: function(req, res) {
    console.log({
      memberId: req.body.memberid
    })

    let transaction = new Transaction({
      memberId: req.body.memberid
    })
    console.log(transaction)

    transaction.save(function(err, transaction) {
      if (err) throw err
      res.send(`Add Transaction Success!\n${transaction}`)
    });
  },
  addItem: function(req, res) {
    console.log({
      transactionId: req.params.id, // transaction ID
      bookId: req.body.bookId
    })
    Transaction.update(
      {_id: req.params.id},
      {$push: {books: req.body.bookId}},
      {upsert: true}
    ).then(function(data) {
      console.log({data})
      res.send('OK')
    }).catch(function(err) {
      res.send(err)
    })
  },
  deleteItem: function(req, res) {
    console.log({
      transactionId: req.params.id, // transaction ID
      bookId: req.body.bookId
    })
    Transaction.update(
      {_id: req.params.id},
      {$pull: {books: req.body.bookId}}
    ).then(function(data) {
      console.log({data})
      res.send('OK')
    }).catch(function(err) {
      res.send(err)
    })
  },
  deleteTransaction: function(req, res) {
    Transaction.findOneAndRemove({ _id: req.params.id }, function(err) {
      if (err) throw err;
      res.send(`Transaction with id : ${req.params.id} has been deleted!`);
    });
  },
  getAll: function(req, res) {
    Transaction.find({}, function(err, transactions) {
      if (err) throw err;
      res.send(transactions);
    });
  },
  populate: function(req, res) {
    Transaction.find().populate('books').populate('memberId').exec(function(error, results) {
        res.send(results);
    });
  },
  checkout: function(req,res) {
    
  }
};
