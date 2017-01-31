# mongodb-crud

1. insert books document
```
db.books.insert(
  {
    "isbn" : "978-1-891830-77-8",
    "title" : "Every Girl is the End of the World for Me",
    "author" : "Jeffrey Brown",
    "category" : "Mature (16+)",
    "stock": 5
  }
);
```
