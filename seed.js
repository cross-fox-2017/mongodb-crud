let Customers = require('./models/customers')
let Books = require('./models/books')
let faker = require('faker')

function seedBook () {
  Books.create({
    isbn: faker.random.number,
    title: faker.name.title,
    author: faker.name.findName,
    category: faker.random.word,
    stock: faker.random.number
  })
}

seedBook()
