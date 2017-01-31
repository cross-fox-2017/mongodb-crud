var express = require('express');
var router = express.Router();
var controllerBooks = require('../controller/controllerBooks.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("use api/</books, /customers or /transactions>")
});

module.exports = router;
