var express = require('express');
var router = express.Router();
var costumers = require('../models/costumer.js')
var costumerController = require('../controller/costumerController.js')

/* GET home page. */
router.post('/', costumerController.create);
router.get('/', costumerController.findAll);
router.get('/:memberid', costumerController.findById);
router.put('/:memberid', costumerController.updatePhone);
router.delete('/:memberid', costumerController.delete);

module.exports = router;
