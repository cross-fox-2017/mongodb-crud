var express = require('express')
var router = express.Router()
let customersController = require('../../controllers/transactions')

/* GET home page. */

router.get('/', customersController.getTransactions)

router.get('/:transactionid', customersController.getTransaction)

router.post('/', customersController.createTransaction)

router.post('/:transactionid', customersController.addItem)

router.post('/item/:transactionid', customersController.populateItem)

router.delete('/:transactionid', customersController.deleteTransaction)

router.put('/:transactionid', customersController.updateTransaction)
//
// router.post('/signin', libraryController.signIn)

module.exports = router
