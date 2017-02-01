var express = require('express');
var router = express.Router();
const transaction = require('../controller/transaction')

/* GET home page. */
router.post('/', transaction.insertData)

module.exports = router;
