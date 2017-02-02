var Customer = require("../models/customer");

module.exports = {
  list: function(req, res, next){
    Customer.find({}).then(function(data){
    res.json(data);
    })
  },

  find: function(req, res, next){
    Customer.findOne({memberid: req.params.memberid},function(err, member){
      if (err) throw err;
      res.json(member);
    })
  },

  delete: function(req, res, next){
    Customer.findOne({memberid: req.params.memberid},function(err, member){
      if (err) throw err;
      Customer.remove(function(err){
        if (err) throw er;
      })
      res.send(`Customer dengan ID ${req.params.memberid} berhasil dihapus`);
    })
  },

  add: function(req, res, next){
    Customer.create({
      name: req.body.name,
      memberid: req.body.memberid,
      address: req.body.address,
      zipcode: req.body.zipcode,
      phone: req.body.phone})
      .then(function(custom){
        res.json(custom);
      })
      .catch(function(err){
        res.json('error')
      })
  },
  update: function(req, res, next){
    Customer.update({
      address: req.body.address})
      .then(function(user){
        res.send(`Alamat sekarang adalah: ${req.body.address}`);
      })
      .catch(function(err){
        res.json('error')
      })
  }
}
