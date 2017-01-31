var express = require('express');
var router = express.Router();
const controller = require('../../controller/transactions');

router.get('/transactions', controller.getAllTransactions);

router.get('/transactions/:id', controller.getSingleTransaction);

router.post('/transactions/', controller.createTransaction);

router.delete('/transactions/:id', controller.deleteTransaction);

router.put('/transactions/:id', controller.updateTransaction);

router.put('/transactions/addbook/:id', controller.addBooks);

router.put('/transactions/deletebook/:id', controller.deleteBooks);

module.exports = router;
