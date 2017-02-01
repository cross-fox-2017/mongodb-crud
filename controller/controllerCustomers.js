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
      Customer.find({memberid: req.query.memberid}, function(err,customers){
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
      Customer.findOneAndUpdate({memberid: req.params.memberid}, req.body ,{new : true}, function(err,book){
        if(err) throw err;

          res.send(book);
        })
    },

    deleteMember : function(req, res, next) {
      Customer.findOneAndRemove({memberid: req.params.memberid}, function(err){
        if(err) throw err;

          res.send(`member with id ${req.params.memberid} has been removed`);
        })
    }

}
