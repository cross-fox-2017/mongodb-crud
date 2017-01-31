let Transactions = require('../models/transactions')

module.exports = {
  getTransactions: (req, res) => {
    Transactions.find().then(function (data) {
      res.send({Transactions: data})
    }).catch(function (err) {
      res.json(err)
    })
  },
  getTransaction: (req, res) => {
    Transactions.find({_id: req.params.transactionid}).then(function (data) {
      res.send({Transaction: data})
    }).catch(function (err) {
      res.json(err)
    })
  },
  createTransaction: (req, res) => {
    Transactions.create({
      memberid: req.body.memberid,
      booklist: [],
      days: req.body.days,
      out_date: req.body.out_date,
      due_date: req.body.due_date,
      in_date: req.body.in_date,
      fine: req.body.fine
    }).then(function (data) {
      res.json({data})
    }).catch(function (err) {
      res.json(err)
    })
  },
  addItem: (req, res) => {
    Transactions.findOneAndUpdate({_id: req.params.transactionid}, {$push: {booklist: {bookid: req.body.bookid, qty: req.body.qty}}}, {upsert: true}).then(function (data) {
      res.json({data}) // gak data terbaru
    }).catch(function (err) {
      res.json(err)
    })
  },
  deleteTransaction: (req, res) => {
    Transactions.findOneAndRemove({_id: req.params.transactionid}).then(function (data) {
      res.send(`Deleted Transaction with Id: ${req.params.transactionid}`)
    }).catch(function (err) {
      res.json(err)
    })
  },
  updateTransaction: (req, res) => {
    Transactions.findOneAndUpdate({_id: req.params.transactionid}, req.body, {new: true}).then(function (data) {
      res.json(data)
    }).catch(function (err) {
      res.json(err)
    })
  }
}
