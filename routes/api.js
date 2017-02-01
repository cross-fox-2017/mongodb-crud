`use strict`
var express = require('express');
var router = express.Router();
var controllerBooks = require('../controller/controllerBooks.js')
var controllerCustomers = require('../controller/controllerCustomers.js')
var controllerTransactions = require('../controller/controllerTransactions.js')

/* GET home page. */
router.get('/', function(req,res, next){
  res.send('select path /books or /customers or /transactions')
});

router.get('/books/', controllerBooks.findAllBooks);

router.get('/books/search', controllerBooks.findByIsbn);

router.post('/books/', controllerBooks.createBook);

router.put('/books/:isbn', controllerBooks.updateBook);

router.delete('/books/:isbn', controllerBooks.deleteBook);

router.get('/customers/', controllerCustomers.findAllCustomers);

router.get('/customers/search', controllerCustomers.findByMemberId);

router.post('/customers/', controllerCustomers.createMember);

router.put('/customers/:memberid', controllerCustomers.updateMember);

router.delete('/customers/:memberid', controllerCustomers.deleteMember);

router.get('/transactions/', controllerTransactions.findAllTransactions);

router.get('/transactions/search', controllerTransactions.findById);

router.post('/transactions/', controllerTransactions.createTransaction);

router.put('/transactions/addbook/:id', controllerTransactions.addBooksToCart);

router.put('/transactions/deletebook/:id', controllerTransactions.deleteBooksfromCart);

router.put('/transactions/:id', controllerTransactions.updateTransaction);

router.delete('/transactions/:id', controllerTransactions.deleteTransaction);

module.exports = router;
