`use strict`
var express = require('express');
var router = express.Router();
var controllerBooks = require('../../controller/controllerBooks.js')

/* GET home page. */

router.get('/', controllerBooks.findAllBooks);

router.get('/search', controllerBooks.findByIsbn);

router.post('/', controllerBooks.createBook);

router.post('/:isbn', controllerBooks.updateBook);

module.exports = router;
