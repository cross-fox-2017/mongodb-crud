let Transactions      = require ('../models/transactions')

module.exports = {

  // GET all Transactions
  getAllTransactions : function(req, res) {
    Transactions .find({}, (err,data) => {
      res.send(data);
    })
  },

  // GET singe Transaction
  getTransactions : function(req, res) {
    Transactions.find({ memberId: req.params.memberId }).then((data) => {
      res.send(data);
    })
  },

  // CREATE Transaction
  createTransactions: function(req,res,next){
    var newTransaction = Transactions({
      memberId: req.body.memberId,
      // days: req.body.days,
      // out_date: new Date(),
      // due_date: Date,
      // in_date: new Date(),
      // fine: Number,
      booklist : [],
      createdAt: new Date(),
      updatedAt: new Date()
    })
    newTransaction.save().then(function(data){
      res.send(data);
    })
  },

  // DELETE TRANSACTION
  deleteTransaction : function (req,res) {
    Transactions.findOneAndRemove(
      {_id: req.params.id})
      .then(function(data) {
        res.send(`Transaction with id "${req.params.id}" has been deleted`)
      })
  },

  // ADD BOOK
  addBook: function(req,res){
  Transactions.update(
      { _id: req.params.id },
      { $push:
        {   booklist:
            { bookId: req.body.bookid,
              qty: req.body.qty           }
        }
      },
      // {updatedAt: new Date()},
      {upsert: true}).then( function(data) {
        res.send(data)
        // console.log(data);
      })
  },

  // DELETE BOOK
  deleteBook : function (req, res) {
    Transactions.update(
      {_id: req.params.id},
      {$pull:
        {   booklist:
            { bookid : req.body.bookid,
              qty: req.body.qty
            }
        }
      },
      {upsert: true}).then( function(data){
        res.send(data)
      })
  },

  //UPDATE
  updateTransaction :function(req, res) {
    Transactions.findOneAndUpdate(
      {id: req.params.id},
      {memberId: req.body.memberid,
       days: req.body.days,
       updatedAt: new Data()},
      {new: true}).then(function(data){
        res.send(data)
      })
  }

}
