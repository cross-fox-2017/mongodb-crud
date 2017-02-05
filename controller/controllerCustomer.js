const Customer = require('../model/customer');

module.exports = {
  /* get all data customer form database */
  getAllCustomer : function(req, res, next){
    Customer.find({},function(err, customer){
      if(err)throw err;
    res.json(customer)
    })
  },
  /* create new customer */
  createNewCustomer : function(req, res, next){
    var newCustomer = new Customer({
      name: req.body.name,
      memberid: req.body.memberid,
      address: req.body.address,
      zipcode: req.body.zipcode,
      phone: req.body.phone
    })
      newCustomer.save(function(err,data){
      if(err)throw err;
      res.send({data:data})
    })
  },
  /* delete customer */
  deleteCustomer: function(req, res, next) {
    var input_memberId = req.body.memberid;
    Customer.findOneAndRemove({ memberid: input_memberId }, function(err) {
    if (err) throw err;
    res.send({msg:"Deleted"})
    });
  },
  /* update data book */
  updateCustomer: function(req, res, next) {
    Customer.findOneAndUpdate({ memberid: req.body.memberid }, { name: req.body.name, address: req.body.address, zipcode: req.body.zipcode, phone: req.body.phone},
    function(err, user) {
    if (err) throw err;
    res.send({msg:"updated"})
  });
  }
} // end module export
