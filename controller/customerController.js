'use strict'
var customers = require('../models/customer.js')

let customerController = {
  create : function(req, res){
    let data = {
      memberid : req.body.memberid,
      name : req.body.name,
      address: req.body.address,
      zipcode: req.body.zipcode,
      phone: req.body.phone
    }
    let newcustomers = customers(data)
    newcustomers.save(function(err){
      if(err) throw err;
      res.json({
        msg: 'customer Created!',
        customer: newcustomers
      })
    })
  },
  findAll: function(req, res){
    customers.find({}, function(err, customers){
      if (err) throw err;
      res.json(customers)
    })
  },
  findById: function(req, res){
    let memberid = req.params.memberid
    customers.find({memberid: memberid}, function(err, customer){
      if (err) throw err;
      res.json(customer)
    })
  },
  updatePhone: function(req, res){
    let memberid = req.params.memberid
    let phone = req.body.phone
    customers.findOneAndUpdate({memberid: memberid}, {phone: phone}, {new: true}, function(err, customer){
      if (err) throw err;
      res.json({
        msg: 'Phone Updated',
        customer: customer
      })
    })
  },
  delete: function(req, res){
    let memberid = req.params.memberid
    customers.find({ memberid: memberid }, function(err, customer) {
      if (err) throw err;
      customers.remove(function(err) {
        if (err) throw err;
        res.json({
          msg: 'customers Deleted',
          customer: customer
        });
      });
    });
  }
}

module.exports = customerController;
