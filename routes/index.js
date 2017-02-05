var express = require('express');
var router = express.Router();

const bookController = require('../controller/controllerBook');
const customerController = require('../controller/controllerCustomer');

/* Book */
router.get('/book', bookController.getAllBook);
router.post('/book', bookController.createNewBook);
router.delete('/book', bookController.deleteBook);
router.put('/book', bookController.updateBook);
/* customer */
router.get('/customer', customerController.getAllCustomer );
router.post('/customer', customerController.createNewCustomer );
router.delete('/customer', customerController.deleteCustomer );
router.put('/customer', customerController.updateCustomer );



module.exports = router;
