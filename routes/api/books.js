var express = require('express');
var router = express.Router();
const controller = require('../../controller/books.js');

router.get('/books', controller.getAllBooks);

router.get('/books/:isbn', controller.getSingleBook);

router.post('/books/', controller.createBook);

router.delete('/books/:isbn', controller.deleteBook);

router.put('/books/:isbn', controller.updateBook);

module.exports = router;
