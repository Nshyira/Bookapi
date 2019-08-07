const express = require("express");
const app = express();

app.use(express.json());
const Joi = require("Joi");

const books = require("./books.js");

/*app.get("/", (req, res) => {
  res.send("Welcome to books API");
});*/

//get all books
app.get("/api/books", (req, res) => {
  res.send(books);
});

//get book by id
app.get("/api/books/:id", (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book)
    return res.status(404).send("The book with the given ID was not found");
  res.send(book);
});

//add a book
app.post("/api/books", (req, res) => {
  const book = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author
  };
  console.log(req.body);
  books.push(book);
  res.send(book);
});

//update a book
app.put("/api/books/:id", (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book)
    return res.status(404).send("The book with the given ID was not found.");

  const schema = {
    title: Joi.string()
      .min(2)
      .required()
  };

  const result = Joi.validate(req.body, schema);
  if (result.error) {
    res.status(400).send(result.error);
  }

  book.title = req.body.title;
  res.send(book);
});

//delete a book
app.delete("/api/books/:id", (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book)
    return res.status(404).send("The book with the given ID was not found.");

  const index = books.indexOf(book);
  books.splice(index, 1);
  res.send(book);
});

app.listen(3000, () => console.log("Listening on port 3000"));
