var express    = require('express');
var router     = express.Router();
var controller = require('../../controllers/transactions.controller.js')


router.get('/', controller.getAllTransactions)

router.get('/:id', controller.getTransactions)

router.post('/', controller.createTransactions)

router.put('/addbook/:id', controller.addBook)

router.delete('/deletebook/:id', controller.deleteBook)

router.delete('/:id', controller.deleteTransaction)

router.put('/:id', controller.updateTransaction)


module.exports = router;
