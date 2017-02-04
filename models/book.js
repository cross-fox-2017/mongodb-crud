var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var db = mongoose.connection;

var Books = new Schema({
  title : {
    type: String,
    required: true
  },
  isbn: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  category: String,
  stock: {
    type: Number,
    required: true
  },
});

var books = mongoose.model('Books', Books);

module.exports = books

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected');

});
