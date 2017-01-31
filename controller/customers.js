const Customer = require('../models/customers');

module.exports = {
    getAllCustomers : function(req, res) {
      Customer.find({}).then(function(data){
        res.send({customers: data})
      })
  }, getSingleCustomer : function(req,res){
      Customer.find({memberid: req.params.memberid}).then(function(data){
        res.send({customers: data})
      })
  }, createCustomer : function(req, res) {
      var newCustomer = Customer({
        name: req.body.name,
        memberid: req.body.memberid,
        address:req.body.address,
        zipcode: req.body.zipcode,
        phone: req.body.phone,
        createdAt: new Date(),
        updatedAt: new Date()
      })
      newCustomer.save().then(function(data){
        res.send({customers: data})
      })
  }, deleteCustomer : function(req,res){
      Customer.findOneAndRemove({memberid: req.body.memberid}).then(function(data){
        res.send(`Customer with memberid:${req.params.memberid} has been deleted`)
      })
  }, updateCustomer : function(req,res){
      Customer.findOneAndUpdate({memberid: req.body.memberid},{
        name: req.body.name,
        address:req.body.address,
        zipcode: req.body.zipcode,
        phone: req.body.phone,
        updatedAt: new Date()
      },{new: true}).then(function(data){
        res.send({customers: data})
      })
  }
}
