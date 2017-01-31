var express = require('express');
var router = express.Router();
var customer = require("../models/customers")
var controller = require("../controllers/customer")


/* GET home page. */
router.get('/setup', function(req, res, next) {

  var customers = [

    { name     : "Irsan Sebastian",
      memberid : "IS14071992",
      adress   : "PIK 2, Bukit Golf medit",
      zipcode  : "14450",
      phone    : "0812890786" },

    { name     : "Iqbal Qblol",
        memberid : "QB12071992",
        adress   : "PIK 3, Bukit Golf medit",
        zipcode  : "14450",
        phone    : "081289078236" }
  ];

  customer.create(customers)
  res.send('customer created!')
})

router.get('/',controller.getCustomers)
router.post('/',controller.addCustomer)
router.put('/:memberid',controller.editCustomer)
router.delete('/:memberid',controller.deleteCustomer)

module.exports = router;
