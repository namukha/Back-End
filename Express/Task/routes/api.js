const express = require('express');
const app = express();
const { books } = require('../data/book.json')

app.get('/random', function (req, res) {
    // var randomnum = Math.floor((Math.random() * books.length));

    let bookList = [];
    for (let i = 0; i < 3; i++) {
        var randomNumbers = Math.floor(Math.random() * books.length);
        bookList.push(books[randomNumbers])
    }
    // let data = bookList.map((j) => {
    //     let nomnuud = `<div><h4>${j.title}</h4> ${j.author}</div>`
    //     return nomnuud
    // })
    res.send(bookList)
})

app.get('/order', function (req, res) {
    const sortedBook = books.slice().sort((a, b) => {
        b.published - a.published
    })
    // let sortedBooks = ""
    // for (let a = 0; a < books.length; a++){
    //     sortedBooks += `<div><p>${sortedBook[a].title}</p><i>${sortedBook[a].author}</i></div>`
    // }
    res.send(sortedBook)
})

app.get('/authors', function (req, res) {
    let authors = ""
    for (let a = 0; a < books.length; a++){
        authors += `<p>${books[a].author}</p>`
    }
    res.send(authors)
})

app.get('/books', function(req, res) {
    res.send(books)
})

app.get('/book/:isbn_id', function (req, res, next) {
    const isbn_id = req.params.isbn_id

})

module.exports = router