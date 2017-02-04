var express = require('express');
var router = express.Router();
var customers = require('../models/customer.js')
var customerController = require('../controller/customerController.js')

/* GET home page. */
router.post('/', customerController.create);
router.get('/', customerController.findAll);
router.get('/:memberid', customerController.findById);
router.put('/:memberid', customerController.updatePhone);
router.delete('/:memberid', customerController.delete);

module.exports = router;
