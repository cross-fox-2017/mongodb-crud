var express = require('express');
var router = express.Router();
const controllerCustomer = require('../controllers/controller.customer');

/* get customer listing. */
router.get('/', controllerCustomer.getAllCustomer);
/* get one customer */
router.get('/:isbn', controllerCustomer.getOneCustomer);
/* create customer */
router.post('/', controllerCustomer.createCustomer);
/* edit customer */
router.put('/:isbn', controllerCustomer.editOneCustomer);
/* delete customer */
router.delete('/:isbn', controllerCustomer.deleteOneCustomer);

module.exports = router;
