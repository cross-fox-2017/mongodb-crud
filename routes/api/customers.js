var express = require('express');
var router = express.Router();
const controller = require('../../controller/customers');

router.get('/customers', controller.getAllCustomers);

router.get('/customers/:memberid', controller.getSingleCustomer);

router.post('/customers/', controller.createCustomer);

router.delete('/customers/:memberid', controller.deleteCustomer);

router.put('/customers/:memberid', controller.updateCustomer);

module.exports = router;
