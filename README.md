# mongodb-crud

### Library Crud
sistem crud dasar untuk penggunaan di Library

## Models
```
Books
customers
Transaction
```

## Routes Books
| Route       | HTTP  | Description
| ---------   | ----  | -----------
| /books      | GET   | List semua list buku
| /books      | POST  | Create new book
| /books/isbn | GET   | get single book by isbn
| /books/isbn | PUT   | Update Stock book by isbn
| /books/isbn | DELETE| Delete Book

## Routes Customers
| Route               | HTTP  | Description
| --------------------| ----  | -----------
| /customers          | GET   | List all customers
| /customers          | POST  | Create new customer
| /customers/memberid | GET   | get single customer by memberid
| /customers/memberid | PUT   | Update Phone customer by memberid
| /customers/memberid | DELETE| Delete customer

## Routes Transaction
| Route                      | HTTP  | Description
| --------------------       | ----  | -----------
| /transaction               | GET   | List all transaction
| /transaction               | POST  | Create new transaction
| /transaction/transactionid | GET   | get single transaction by transactionid
| /transaction/transactionid | PUT   | Update booklist transaction by transactionid
| /transaction/transactionid | DELETE| Delete transaction

## Usage
```
npm install
```
