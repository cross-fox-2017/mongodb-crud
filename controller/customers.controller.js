'use strict'

const Customer =  require('../models/customer.js')


module.exports={
  newCustomer: function(req,res){
    var newCustomer = Customer({
      name: req.body.name,
      memberid: req.body.memberid,
      address: req.body.address,
      zipcode: req.body.zipcode,
    });

    newCustomer.save(function(err) {
      if (err) throw err;
      res.send(newCustomer);
    });
  },
  getCustomers: function(req,res){
    Customer.find({}, function(err,customers) {
      if (err) throw err;

      res.send(customers);
    });

  },
  getCustomer: function(req,res){
    Customer.find({memberid:req.params.memberid}, function(err,customer) {
      if (err) throw err;

      res.send(customer);
    });

  },
  updateCustomer: function(req,res){
    Customer.findOne({memberid:req.params.memberid}, function(err, customer) {
      if (err) throw err;


      customer.name= req.body.name,
      customer.address= req.body.address,
      customer.zipcode= req.body.zipcode

      // save the user
      customer.save(function(err) {
        if (err) throw err;

        res.send(customer);
      });

    });
  },
  deleteCustomer: function(req,res){
    Customer.findOneAndRemove({memberid:req.params.memberid}, function(err) {
        if (err) throw err;

      res.send(`Customer with memberid ${req.params.memberid} deleted!`);
    });
  }

}
