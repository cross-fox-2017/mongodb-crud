var express = require('express');
var router = express.Router();
var controller = require('../controllers/transactions');

router.get('/', controller.getAll);

router.get('/all', controller.populate);

router.post('/', controller.add);

router.post('/:id', controller.addItem);

router.delete('/:id', controller.deleteItem);

router.delete('/delete/:id', controller.deleteTransaction);

module.exports = router;
