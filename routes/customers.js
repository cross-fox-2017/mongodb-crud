var cus = require('../controller/customers.controller.js')
var express = require('express');
var router = express.Router();


router.get('/customers', cus.getCustomers)
router.post('/customers', cus.newCustomer )
router.get('/customers/:memberid', cus.getCustomer)
router.put('/customers/:memberid', cus.updateCustomer)
router.delete('/customers/:memberid',cus.deleteCustomer)

module.exports = router;
