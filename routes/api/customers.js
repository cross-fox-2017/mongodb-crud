var express = require('express')
var router = express.Router()
let customersController = require('../../controllers/customers')

/* GET home page. */

router.get('/', customersController.getCustomers)

router.get('/:memberid', customersController.getCustomer)

router.post('/', customersController.createCustomer)

router.delete('/:memberid', customersController.deleteCustomer)

router.put('/:memberid', customersController.updateCustomer)
//
// router.post('/signin', libraryController.signIn)

module.exports = router
