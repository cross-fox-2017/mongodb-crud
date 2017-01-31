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

  }

  // getCustomer: function(req, res, next) {
  //   customers.find({ memberid: req.params.memberid }, function(err, customer) {
  //     if (err) throw err;
  //
  //     // object of the customer
  //     res.send(`${customer}`);
  //   });
  // },
  // getCustomers: function(req, res, next) {
  //   customers.find({}, function(err, customers) {
  //     if (err) throw err;
  //
  //     // object of all the books
  //     res.send(customers);
  //   });
  // },
  // updateCustomer: function(req, res, next) {
  //   // find the memberid
  //   // update from the memberid
  //   customers.findOneAndUpdate(
  //     {
  //       memberid: req.params.memberid
  //     },
  //     {
  //       name: req.body.name,
  //       address: req.body.address,
  //       zipcode: req.body.zipcode,
  //       phone: req.body.phone
  //     }, function(err) {
  //     if (err) throw err;
  //     // we have the updated book returned to us
  //     res.send(`Customer with memberid : ${req.params.memberid} has been updated!`);
  //   });
  // },
  // deleteCustomer: function(req, res, next) {
  //   // get the user
  //   customers.findOneAndRemove({ memberid: req.params.memberid }, function(err) {
  //     if (err) throw err;
  //     // we have deleted the customer
  //     res.send(`Customer with memberid : ${req.params.memberid} has been deleted!`);
  //   });
  // }
};
