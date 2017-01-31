var Book = require("../models/book");

module.exports = {
  list: function(req, res, next){
    Book.find({}).then(function(users_data){
    res.json(users_data);
    })
  },
  //
  find: function(req, res, next){
    Book.findOne({isbn: req.params.isbn},function(err, book){
      if (err) throw err;
      res.json(book);
    })
  },
  //
  // delete: function(req, res, next){
  //   db.User.findById(req.params.id).then(function(result){
  //     result.destroy().then(function(){
  //       res.send('Data with id: '+req.params.id+' has been deleted')
  //     })
  //   })
  // },
  //
  add: function(req, res, next){
    Book.create({
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock})
      .then(function(user){
        res.json(user);
      })
      .catch(function(err){
        res.json('error')
      })
  }
  //
  // signup: function(req, res, next){
  //   db.User.create({
  //     username: req.body.username,
  //     password: passwordHash.generate(req.body.password),
  //     name: req.body.name,
  //     age: req.body.age}).then(function(user){
  //     res.json(user);
  //   })
  // },
  //
  // update: function(req, res, next){
  //   db.User.findById(req.params.id).then(function(result){
  //     result.update({
  //       username: req.body.username,
  //       password: passwordHash.generate(req.body.password),
  //       name: req.body.name,
  //       age: req.body.age}).then(function(user){
  //       res.json(user);
  //     })
  //   })
  // },
  //
  // signin: function(req, res, next){
  //   db.User.findOne({
  //     where: { username: req.body.username }
  //   }).then(function(hasil) {
  //     if(!hasil) {
  //       res.send('Anda belum melakukan registrasi')
  //     }
  //     if(passwordHash.verify(req.body.password, hasil.password)){
  //       res.json({message: 'Selamat Datang'});
  //     } else {
  //       res.send('Silahkan masukkan username dan password yang sudah terdaftar')
  //     }
  //   })
  // }
}
