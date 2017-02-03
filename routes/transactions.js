var tran = require('../controller/transactions.controller.js')
var express = require('express');
var router = express.Router();


router.get('/transactions', tran.getTrans)
router.post('/transactions', tran.newTransaction )
router.post('/transactions/:id',tran.addBook)
router.get('/transactions/:id',tran.bookOut)
router.delete('/transactions/:id',tran.deleteTrans)

module.exports = router;
