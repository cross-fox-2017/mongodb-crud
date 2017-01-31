var express = require('express');
var router = express.Router();
var transaction = require('../models/transaction.js')
var transactionController = require('../controller/transactionController.js')

/* GET home page. */
router.post('/newCart', transactionController.createCart)
router.post('/addItem', transactionController.addItem)
// router.post('/', transactionController.create);
router.get('/', transactionController.findAll);
// router.get('/:memberid', transactionController.findById);
// router.put('/:memberid', transactionController.updatePhone);
// router.delete('/:memberid', transactionController.delete);

module.exports = router;
