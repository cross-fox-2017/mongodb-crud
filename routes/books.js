var express = require('express');
var router = express.Router();
const books = require('../controller/book')

/* GET users listing. */
router.post('/', books.insertData)
router.get('/', books.showData)

module.exports = router;
