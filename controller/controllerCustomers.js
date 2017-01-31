`use strict`
var Customer = require('../models/customers.js');

module.exports = {

    findAllCustomers : function(req, res, next) {
      Customer.find({}, function(err, customers){
        if(err) throw err;
        res.send(customers);
      })
    },

    findByMemberId : function(req, res, next) {
      Customer.find({isbn: req.query.memberid}, function(err,customers){
        if(err) throw err;
        res.send(customers);
      })
    },

    createMember : function(req, res, next) {

    var newMember = Customer({
      name: req.body.name,
      memberid: req.body.memberid,
      address: req.body.address,
      zipcode: req.body.zipcode,
      phone: req.body.phone
    })

    newMember.save(function(err){
      if (err) throw err;

      res.send(`user ${req.body.name} has been created`)
    })

    },

    updateMember : function(req, res, next) {
      Customer.findOneAndUpdate({isbn: req.params.memberid}, req.body ,{new : true}, function(err,book){
        if(err) throw err;

          res.send(book);
        })
    }

}
