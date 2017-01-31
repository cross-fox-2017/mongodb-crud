const modelCustomer = require('../models/model.customer');

var controllerCustomer = {
  /* create new book */
  createCustomer : function(req, res, next){

    // create a new customer
    var newCustomer = modelCustomer({
      memberid: req.body.memberid,
      name: req.body.name,
      address: req.body.address,
      zipcode: req.body.zipcode,
      phone: req.body.phone
    });

    // save the customer
    newCustomer.save(function(err, data) {
      if (err) throw err;
      res.json("customer has been succesfully created : ", data)
    });

  },
  /* get All customer */
  getAllCustomer : function(req, res, next){
    modelCustomer.find({}, function(err, data){
      res.json(data);
    })
  },
  /* find one customer */
  getOneCustomer : function(req, res, next){
    modelCustomer.find({memberid: req.params.memberid}, function(err, data){
      res.json(data);
    })
  },
  /* edit customer */
  editOneCustomer : function(req, res, next){
    modelCustomer.findOneAndUpdate({ memberid: req.params.memberid}, {
      name: req.body.name,
      address: req.body.address,
      zipcode: req.body.zipcode,
      phone: req.body.phone
    },{
      new: true
    }, function(err, data) {
      if (err) throw err;
      // we have the updated book returned to us
      res.json("data has been updated : ", data);
    });
  },
  /* delete customer */
  deleteOneCustomer : function(req, res, next){
    modelCustomer.findOneAndRemove({ memberid: req.params.memberid }, function(err, data) {
      if (err) throw err;
      res.json("member with memberid : " + data.isbn + " has been deleted");
    });
  }
}

module.exports = controllerCustomer
