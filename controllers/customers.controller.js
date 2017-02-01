let Customers      = require ('../models/customers')

module.exports = {

  // GET all Customers
  getAllCustomer : function(req, res) {
    Customers.find({}, (err,data) => {
      res.send(data);
    })
  },

  // GET singe Customers
  getCustomer : function(req, res) {
    Customers.find({ memberId: req.params.memberId }).then((data) => {

      res.send(data);
    });
  },

  // CREATE Customers
  createCustomer: function(req,res,next){
    var newCustomers = Customers({
      name: req.body.name,
      memberId: req.body.memberId,
      address: req.body.address,
      zipcode: req.body.zipcode,
      phone:req.body.phone,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    newCustomers.save((err) =>{

      res.send('New customer has been created');
  })},

  //UPDATE
  updateCustomer :function(req, res, next) {
    Customers.findOneAndUpdate({memberId: req.params.memberId}, req.body, {new: true}).then( (data) => {
        res.send(data)
      })
  },

  //DELETE
  deleteCustomer : function(req,res){
    Customers.findOneAndRemove( {memberId: req.params.memberId}).then(function(data) {
      res.send('Customers has been removed')
    })
  }
}
