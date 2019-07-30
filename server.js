const express = require('express');
const bodyparser =  require ('body-parser');
const mongoose =  require('mongoose');
var Book = require('./models/books');

var app = express();

app.use(bodyparser.urlencoded({ extended: false }));
 

app.use(bodyparser.json());
mongoose.connect(' mongodb://localhost/bookstore',{useNewUrlParser: true});

app.get('/books',function (req,res) {
// do smething
res.json({message:"All books are here"});
});


app.get('/books/:id',function (req,res) {
    
});

app.post('/books',function(req,res){
var bookdata=req.body;
var newBook = new Book(bookdata);
newBook.save()
.then(function(results) {
    console.log(results);
})
.catch(function(err) {
    console.log(err);
    
});
 

});


app.put('/books/:id',function(req,res) {
  var id=req.params.id;  
});

app.delete('/books/:id',function(req,res){

});




app.listen(8080,function(){
    console.log('app running on port 8080');
});

