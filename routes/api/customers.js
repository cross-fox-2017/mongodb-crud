var express    = require('express');
var router     = express.Router();
var controller = require('../../controllers/customers.controller.js')


router.get('/', controller.getAllCustomer)

router.get('/:memberId', controller.getCustomer)

router.post('/', controller.createCustomer)

router.delete('/:memberId', controller.deleteCustomer)

router.put('/:memberId', controller.updateCustomer)





module.exports = router;
