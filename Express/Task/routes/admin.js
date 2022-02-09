const express = require('express');
const path = require('path')
const app = express();

const { books } = require('./data/book.json')

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
app.set("view options", { layout: false });

app.get('/api/add', (req, res) => {
    res.render('add')
})

app.get('/api/books', (req, res) => {
    res.render('books', {books})
})

