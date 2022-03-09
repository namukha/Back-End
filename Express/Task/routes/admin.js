const express = require('express');
const path = require('path');
const app = express();

app.use( '/static' , express.static('public'))
const { books } = require('../data/book.json')

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
app.set("view options", { layout: false });

const validate = () => {
    return [
        body("title").not().isEmpty(),
        body("subtitle").not().isEmpty(),
        body("isbn").isNumeric().isLength(10)
    ]
}

app.post('/', (req, res) => {
    res.render('add')
})

app.get('/books', (req, res) => {
    res.render('books', {books})
})

module.exports = app