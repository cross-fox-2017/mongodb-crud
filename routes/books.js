var express = require('express');
var router = express.Router();
var bookController = require("../controllers/books")

router.get('/', bookController.list)

router.post('/', bookController.add)

router.get('/:isbn', bookController.find)

router.put('/:isbn', bookController.update)

router.delete('/:isbn',bookController.delete)

module.exports = router;
