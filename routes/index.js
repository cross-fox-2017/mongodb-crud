var express = require('express');
var router = express.Router();
var models = require('../models/database')
var books = models.books
var costumers = models.costumers

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(books);
});

module.exports = router;
