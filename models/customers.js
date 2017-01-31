const mongoose = require('mongoose')

const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  memberid: {
    type: String,
    required: true
  },
  address: String,
  zipcode: String,
  phone: String
},
  {
    timestamps: true
  })

module.exports = mongoose.model('Customer', CustomerSchema)
