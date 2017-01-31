var express = require('express');
var router = express.Router();
var book = require("../models/books");
var controller = require("../controllers/book")
/* GET home page. */

router.get('/setup', function(req, res, next) {

  var books = [

    { isbn     : "isbn1",
      title    : "Dragon Puncher",
      author   : "James Kochalka",
      category : "All Ages",
      stock    : 3 },

    { isbn     : "isbn2",
      title    : "Every Girl is the End of the World for Me",
      author   : "Jeffrey Brown",
      category : "Mature (16+)",
      stock    : 5 }

  ];

  book.create(books);
  res.send('books created!')
})

router.get('/',controller.getBooks)
router.post('/',controller.addBook)
router.put('/:isbn',controller.editBook)
router.delete('/:isbn',controller.deleteBook)

module.exports = router;
