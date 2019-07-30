const express = require('express');
const bodyparser =  require('body-parser');
const mongoose =  require('mongoose');

app.get('/', (req, res) => {
    res.send('Welcome to APIs!');
});
 
app.listen(3000, () => console.log('Listening on port 3000'));
/*const books = [
    {title: 'Harry Potter', id: 1, author:'Jk Rowling'},
    {title: 'Twilight', id: 2, author:'Stephnie Meyer'},
    {title: 'Lorien Legacies', id: 3, author:'Pittacus Lore'}
    ]
     */