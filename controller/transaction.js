const modelsTransaction = require('../models/transaction')
const modelsBook = require('../models/book')
const modelsCustomer = require('../models/customer')


var Transaction = {
    insertData: function(req, res, next) {
        var saveData = new modelsTransaction({
            memberId: req.body.memberid,
            booklist: []
        })
        saveData.save(function(err, data) {
            if (err) {
                res.send(err);
            } else {
                res.send({
                    _id: data._id,
                    memberId: data.memberId,
                    booklist: []
                })
            }
        })
    },
    addBook: function(req, res, next) {
        modelsTransaction.findOneAndUpdate({
            _id: req.params.id
        }, {
            $push: {
              booklist: req.body.booklist
            }
        }, {
            new: true
        }).then(function(err, updateBook) {
            if (err) {
                res.send(err)
            } else {
                res.send(updateData)
            }
        })
    },
    test: function(req, res, next) {
        modelsTransaction.find().populate('memberId').exec(function(err, data) {
            res.send(data[0]);
        })
    }


}

module.exports = Transaction
