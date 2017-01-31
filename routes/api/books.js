var express = require('express');
var router = express.Router();
const controller = require('../../controller/books.js');

router.get('/books', controller.getAllBooks);

router.get('/books/:id', controller.getSingleBook);

router.post('/books/', controller.createBook);

router.delete('/books/:id', controller.deleteBook);

router.put('/books/:id', controller.updateBook);

module.exports = router;
