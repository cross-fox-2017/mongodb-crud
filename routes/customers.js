var express = require('express');
var router = express.Router();
const customers = require('../controller/customer')

/* GET users listing. */
router.post('/', customers.insertData)
router.get('/', customers.showData)
router.get('/:id', customers.showDataById)
router.get('/memberid/:memberid', customers.showDataByIsbn)
router.put('/:memberid', customers.updateBook)
router.delete('/:memberid',customers.deleteData)


module.exports = router;
