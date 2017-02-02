var express = require('express');
var router = express.Router();
const controllerCustomer = require('../controllers/controller.customer');

/* get customer listing. */
router.get('/', controllerCustomer.getAllCustomer);
/* get one customer */
router.get('/:memberid', controllerCustomer.getOneCustomer);
/* create customer */
router.post('/', controllerCustomer.createCustomer);
/* edit customer */
router.put('/:memberid', controllerCustomer.editOneCustomer);
/* delete customer */
router.delete('/:memberid', controllerCustomer.deleteOneCustomer);

module.exports = router;
