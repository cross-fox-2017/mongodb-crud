const modelsCustomer = require('../models/customer')

var Book = {
    insertData: function(req, res, next) {
        var saveData = new modelsCustomer({
            name: req.body.name,
            memberid: req.body.memberid,
            address: req.body.address,
            zipcode: req.body.zipcode,
            phone: req.body.phone
        })
        saveData.save(function(err, data) {
            if (err) {
                res.send(err);
            } else {
                res.send(data)
            }
        })
    },
    showData: function(req, res, next) {
        modelsCustomer.find({}, function(err, data) {
            // res.send(data)//atau
            res.json(data)
        })
    },

    showDataById: function(req, res, next) {
        modelsCustomer.findById(req.params.id, function(err, data) {
            if (err) {
                res.send(err)
            } else {
                res.send(data)
            }
        })
    },

    showDataByIsbn: function(req, res, next) {
        modelsCustomer.find({
            memberid: req.params.memberid
        }, function(err, data) {
            if (err) {
                res.send(err)
            } else {
                res.send(data)
            }
        })
    },

    updateBook: function(req, res, next) {
        modelsCustomer.findOneAndUpdate({
            memberid: req.params.memberid
        },{
            name: req.body.name,
            address: req.body.address,
            zipcode: req.body.zipcode,
            phone: req.body.phone
        }, {
          new: true
        }).then(function(err, updateData) {
          if(err){
            res.send(err)
          }else{
            res.send(updateData)
          }
        })
    },
    deleteData: function(req,res, next) {
      modelsCustomer.find({
          memberid: req.params.memberid
      },function(err, data) {
        if(err){
          res.send(err)
        }else{
          data[0].remove(function(err) {
            if(err){
              res.send(err)
            }else{
              res.send("Data Dengan ISBN: "+data[0].memberid+" Terhapus")
            }
          })
        }
      })
    }
}

module.exports = Customer
