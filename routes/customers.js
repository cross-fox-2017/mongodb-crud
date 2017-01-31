var express = require('express');
var router = express.Router();
var db = require("../models/customer");
var customerController = require("../controllers/customers")

router.get('/', customerController.list)

router.post('/', customerController.add)

router.get('/:memberid', customerController.find)

router.put('/:memberid', customerController.update)

router.delete('/:memberid',customerController.delete)

module.exports = router;
