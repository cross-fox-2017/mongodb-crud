var express = require('express');
var router = express.Router();
var book = require("../models/books");
var controller = require("../controllers/book")
/* GET home page. */

router.get('/setup', function(req, res, next) {

  var books = [

    { isbn     : "978-1-60309-057-5",
      title    : "Dragon Puncher",
      author   : "James Kochalka",
      category : "All Ages",
      stock    : 3 },

    { isbn     : "978-1-891830-77-8",
      title    : "Every Girl is the End of the World for Me",
      author   : "Jeffrey Brown",
      category : "Mature (16+)",
      stock    : 5 }

  ];

  book.create(books);
  res.send('books created!')
})

router.get('/',controller.getBooks)

module.exports = router;
