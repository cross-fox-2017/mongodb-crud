# mongodb-crud

### Library Crud
sistem crud dasar untuk penggunaan di Library

## Models
```
Books
Costumers
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

## Routes Costumers
| Route               | HTTP  | Description
| --------------------| ----  | -----------
| /costumers          | GET   | List all costumers
| /costumers          | POST  | Create new costumer
| /costumers/memberid | GET   | get single costumer by memberid
| /costumers/memberid | PUT   | Update Phone costumer by memberid
| /costumers/memberid | DELETE| Delete costumer

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
