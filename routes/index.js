var express = require('express');
var router = express.Router();
var Book = require('../models/book')

/* GET home page. */
router.get('/', function(req, res, next) {
  let book = new Book({
    isbn:"12345",
    title:"belajar java",
    author:"Brown",
    category:"Computer"
  });
  book.save()
});

module.exports = router;
