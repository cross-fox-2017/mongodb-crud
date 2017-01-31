`use strict`
var express = require('express');
var router = express.Router();
var controllerCustomers = require('../../controller/controllerCustomers.js')

/* GET home page. */

router.get('/', controllerCustomers.findAllBooks);

router.get('/search', controllerCustomers.findByIsbn);

router.post('/', controllerCustomers.createBook);

router.post('/:memberid', controllerCustomers.updateBook);

module.exports = router;
