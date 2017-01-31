const customers = require('../models/customers');

module.exports = {
  addCustomer: function(req, res, next) {
    let newCustomer = customers({
      name: req.body.name,
      memberid: req.body.memberid,
      address: req.body.address,
      zipcode: req.body.zipcode,
      phone: req.body.phone
    });

    // save the Customer
    newCustomer.save(function(err, customer) {
      if (err) throw err;
      res.send(`Add Customer Success!\n${customer}`);
    });
  },
  getCustomer: function(req, res, next) {
    customers.find({ memberid: req.params.memberid }, function(err, customer) {
      if (err) throw err;

      // object of the customer
      res.send(`${customer}`);
    });
  },
  getCustomers: function(req, res, next) {
    customers.find({}, function(err, customers) {
      if (err) throw err;

      // object of all the books
      res.send(customers);
    });
  },
  updateCustomer: function(req, res, next) {
    // find the memberid
    // update from the memberid
    customers.findOneAndUpdate(
      {
        memberid: req.params.memberid
      },
      {
        name: req.body.name,
        address: req.body.address,
        zipcode: req.body.zipcode,
        phone: req.body.phone
      }, function(err) {
      if (err) throw err;
      // we have the updated book returned to us
      res.send(`Customer with memberid : ${req.params.memberid} has been updated!`);
    });
  },
  deleteCustomer: function(req, res, next) {
    // get the user
    customers.findOneAndRemove({ memberid: req.params.memberid }, function(err) {
      if (err) throw err;
      // we have deleted the customer
      res.send(`Customer with memberid : ${req.params.memberid} has been deleted!`);
    });
  }
};
