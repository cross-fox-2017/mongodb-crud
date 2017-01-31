
const Customer = require('../models/customers');

module.exports = {
  getCustomers: function(req,res) {
    Customer.find().then(function(data){
      res.send(data)
    })
  },

  addCustomer: function(req,res){
    let Customers =  {
      name        : req.body.name,
      memberid    : req.body.memberid,
      address     : req.body.address,
      zipcode     : req.body.zipcode,
      phone       : req.body.phone
    }

    Customer.create(Customers)
    res.send("New customer added")
  },

  editCustomer: function(req,res){

    var conditions = { memberid : req.params.memberid }
    var update = {
      name        : req.body.name,
      memberid    : req.body.memberid,
      address     : req.body.address,
      zipcode     : req.body.zipcode,
      phone       : req.body.phone
    }

    Customer.update(conditions,{ $set: update},{new: true},function(err,data){

      if(err)
      res.send(err)
      if(data)
      console.log("customer updated !");
    });


    res.send(`Customer ${req.body.name} updated !`)
  },

  deleteCustomer: function(req,res){

    var conditions = { memberid : req.params.memberid }

    Customer.remove(conditions,function(data){

      res.send("Customer Deleted !")
    })

  },
}
