var express    = require('express');
var router     = express.Router();
var controller = require('../../controllers/books.controller.js')


router.get('/', controller.getAllBook)

router.get('/:isbn', controller.getBook)

router.post('/', controller.createBook)

router.delete('/:isbn', controller.deleteBook)

router.put('/:isbn', controller.updateBook)





module.exports = router;
