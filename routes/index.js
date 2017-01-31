var express = require('express');
var router = express.Router();
var bok = require('../controller/books.controller.js')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/books', bok.getBooks)
router.post('/api/books', bok.newBook )
router.put('/api/books/:isbn', bok.updateBook)
router.delete('/api/books/:isbn',bok.deleteBook)
module.exports = router;
