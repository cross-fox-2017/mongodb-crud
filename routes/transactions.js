var express = require('express');
var router = express.Router();
const transaction = require('../controller/transaction')

/* GET home page. */
router.post('/', transaction.insertData)
router.put('/:id', transaction.addBook)
router.get('/', transaction.getTransaction)
router.delete('/:id', transaction.deleteTransaction)
router.put('/cancelbook/:id', transaction.deleteBookTransaction)
router.put('/checkout/:id', transaction.checkOut)

module.exports = router;
