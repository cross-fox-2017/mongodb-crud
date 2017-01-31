var express    = require('express');
var router     = express.Router();
var controller = require('../../controller/books.controller.js')


router.get('/', controller.getAllUser)

router.get('/:id', controller.getUser)

router.post('/', controller.createUser)

router.delete('/:id', controller.deleteUser)

router.put('/:id', controller.updateUser)
