var express = require('express');
var router = express.Router();
var bok = require('../controller/books.controller.js')
var cus = require('../controller/customers.controller.js')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/books', bok.getBooks)
router.post('/api/books', bok.newBook )
router.get('/api/books/:isbn', bok.getBook)
router.put('/api/books/:isbn', bok.updateBook)
router.delete('/api/books/:isbn',bok.deleteBook)

router.get('/api/customers', cus.getCustomers)
router.post('/api/customers', cus.newCustomer )
router.get('/api/customers/:memberid', cus.getCustomer)
router.put('/api/customers/:memberid', cus.updateCustomer)
router.delete('/api/customers/:memberid',cus.deleteCustomer)


module.exports = router;
