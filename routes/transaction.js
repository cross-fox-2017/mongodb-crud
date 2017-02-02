var express = require('express');
var router = express.Router();
var transaction = require('../models/transaction.js')
var transactionController = require('../controller/transactionController.js')

/* GET home page. */
router.post('/newCart', transactionController.createCart)
router.post('/addItem', transactionController.addItem)
router.post('/removeItem', transactionController.removeItem)
router.get('/:transactionid', transactionController.populate);
router.get('/', transactionController.findAll);
// router.get('/:transactionid', transactionController.findById);
// router.put('/:transactionid', transactionController.updatePhone);
router.delete('/:transactionid', transactionController.deleteTransaction);

module.exports = router;
