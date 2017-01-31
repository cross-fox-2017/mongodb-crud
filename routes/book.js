var express = require('express');
var router = express.Router();
var books = require('../models/book.js')
var bookController = require('../controller/bookController.js')

/* GET home page. */
router.post('/', bookController.create);
router.get('/', bookController.findAll);
router.get('/:isbn', bookController.findByISBN);
router.put('/:isbn', bookController.updateStock);
router.delete('/:isbn', bookController.delete);



module.exports = router;
