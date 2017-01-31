var express = require('express');
var router = express.Router();
var books = require('../models/book.js')
var bookController = require('../controller/bookController.js')

/* GET home page. */
router.post('/', bookController.create);

module.exports = router;
