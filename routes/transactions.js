var express = require('express');
var router = express.Router();
const transaction = require('../controller/transaction')

/* GET home page. */
router.post('/', transaction.insertData)
router.put('/:id', transaction.addBook)
router.get('/', transaction.getTransaction)
router.delete('/:id', transaction.deleteTransaction)

module.exports = router;
