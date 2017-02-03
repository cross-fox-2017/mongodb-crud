var bok = require('../controller/books.controller.js')
var express = require('express');
var router = express.Router();

router.get('/books', bok.getBooks)
router.post('/books', bok.newBook )
router.get('/books/:isbn', bok.getBook)
router.put('/books/:isbn', bok.updateBook)
router.delete('/books/:isbn',bok.deleteBook)

module.exports = router;
