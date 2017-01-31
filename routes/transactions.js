var express = require('express');
var router = express.Router();
const controller = require('../controllers/transactions');

// router.get('/', controller.getAll);
//
// router.get('/:memberid', controller.getOne);

router.post('/', controller.add);

router.post('/:id', controller.addItem);

// router.delete('/:memberid', controller.delete);
//
// router.put('/:memberid', controller.update);

module.exports = router;
