var express = require('express');
var router = express.Router();
const books = require('../controller/book')

/* GET users listing. */
router.post('/', books.insertData)

module.exports = router;
