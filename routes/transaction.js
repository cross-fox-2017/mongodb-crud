var express = require('express');
var router = express.Router();
var transaction = require('../models/transaction.js')
var transactionController = require('../controller/transactionController.js')

/* GET home page. */
router.post('/newCart', transactionController.createCart)
router.post('/addItem', transactionController.addItem)
router.post('/removeItem', transactionController.removeItem)
// router.post('/', transactionController.create);
router.get('/', transactionController.findAll);
// router.get('/:transactionid', transactionController.findById);
// router.put('/:transactionid', transactionController.updatePhone);
router.delete('/:transactionid', transactionController.delete);

module.exports = router;
