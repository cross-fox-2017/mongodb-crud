'use strict'
var costumers = require('../models/costumer.js')

let costumerController = {
  create : function(req, res){
    let data = {
      memberid : req.body.memberid,
      name : req.body.name,
      address: req.body.address,
      zipcode: req.body.zipcode,
      phone: req.body.phone
    }
    let newcostumers = costumers(data)
    newcostumers.save(function(err){
      if(err) throw err;
      res.json({
        msg: 'costumer Created!',
        costumer: newcostumers
      })
    })
  },
  findAll: function(req, res){
    costumers.find({}, function(err, costumers){
      if (err) throw err;
      res.json(costumers)
    })
  },
  findById: function(req, res){
    let memberid = req.params.memberid
    costumers.find({memberid: memberid}, function(err, costumer){
      if (err) throw err;
      res.json(costumer)
    })
  },
  updateStock: function(req, res){
    let memberid = req.params.memberid
    let phone = req.body.phone
    costumers.findOneAndUpdate({memberid: memberid}, {phone: phone}, {new: true}, function(err, costumer){
      if (err) throw err;
      res.json({
        msg: 'Phone Updated',
        costumer: costumer
      })
    })
  },
  delete: function(req, res){
    let memberid = req.params.memberid
    costumers.find({ memberid: memberid }, function(err, costumer) {
      if (err) throw err;
      costumers.remove(function(err) {
        if (err) throw err;
        res.json({
          msg: 'costumers Deleted',
          costumer: costumer
        });
      });
    });
  }
}
