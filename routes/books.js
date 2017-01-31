var express = require('express');
var router = express.Router();
const booksController = require('../controllers/booksController');

/* GET all books listing. */
router.get('/', booksController.getBooks);

/* GET a single book. */
router.get('/:isbn', booksController.getBook);

/* Create a book. */
router.post('/', booksController.createBook);

/* Delete a book. */
router.delete('/:isbn', booksController.deleteBook);

/* Update a book. */
router.put('/:isbn', booksController.updateBook);

module.exports = router;
