# mongodb-crud

###Manage Books

| Route              | HTTP    | Description              |
| -------------------|:-------:|-------------------------:|
| /api/books         | GET     | Find All Books           |
| /api/books/search  | GET     | Find Books by query Isbn |
| /api/books         | POST    | Create Book              |
| /api/books/:isbn   | PUT     | Update Book              |
| /api/books/:isbn   | DELETE  | Delete Book              |

###Manage customers

| Route                  | HTTP    | Description                      |
| -----------------------|:-------:|---------------------------------:|
| /api/customers          | GET     | Find All Customer                |
| /api/customers/search   | GET     | Find Customer by query Member id |
| /api/customers          | POST    | Create Customer                  |
| /api/customers/:memberid| PUT     | Update Customer                  |
| /api/customers/:memberid| DELETE  | Delete Customer                  |

###Manage Transactions

| Route                           | HTTP    | Description                    |
| --------------------------------|:-------:|-------------------------------:|
| /api/transactions               | GET     | Find All transactions          |
| /api/transactions/search        | GET     | Find Transaction by query id   |
| /api/transactions               | POST    | Create Transaction             |
| /api/transactions/:isbn         | PUT     | Update Transaction             |
| /api/transactions/:isbn         | DELETE  | Delete Transaction             |
| /api/transactions/addbook/:id   | PUT     | Add Book to Cart               |
| /api/transactions/deletebook/:id| PUT     | Delete Book to Cart            |

###Need to Do

```
npm install

```
