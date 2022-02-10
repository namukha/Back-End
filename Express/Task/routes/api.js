const express = require('express');
const { books } = require('../data/book.json');
const { all } = require("./admin");
const router = express.Router();

router.get('/random', function (req, res) {
    let a = [];
    let bookList = [];
    function randomIntFromInterval(min, max, count) {
        var random = Math.floor(Math.random() * (max - min + 1) + min)
        for (let i = 1; i <= count; i++) {
            while (a.includes(random) > 0) {
                random = Math.floor(Math.random() * (max - min + 1) + min)
            }
            a.push(random);
        }
        return a;
    }
    const rndInt = randomIntFromInterval(1, 7, 3)

    for (let i = 0; i < 3; i++) {
        let num = [...rndInt]
        console.log(num[i]);
        bookList.push(books[num[i]])
    }
    res.send(bookList)
})

router.get('/order', function (req, res) {
    const sortedBook = books.slice().sort((a, b) => {
        b.published - a.published
    })
    // let sortedBooks = ""
    // for (let a = 0; a < books.length; a++){
    //     sortedBooks += `<div><p>${sortedBook[a].title}</p><i>${sortedBook[a].author}</i></div>`
    // }
    res.send(sortedBook)
})

router.get('/authors', function (req, res) {
    let authors = ""
    for (let a = 0; a < books.length; a++) {
        authors += `<p>${books[a].author}</p>`
    }
    res.send(authors)
})

router.get('/books', function (req, res) {
    res.send(books)
})

router.get('/book/:isbn_id', function (req, res, next) {
    const isbn_id = req.params.isbn_id
    books.map((id) => {
        if (id.isbn == isbn_id) {
            res.send(id)
        }
    })
    res.send("Not Found")
})

router.get('/search?', function (req, res) {
    const titleOfBook = req.query
    books.map((t) => {
        if (t.title == titleOfBook.title) {
            res.send(t)
        }
    })
    res.send("Not Found!")
})

router.get('/zuzaanNom', function (req, res) {
    let page = [];
    for (let i = 0; i < books.length; i++) {
        page.push(books[i].pages);
    }
    const max = Math.max(...page);
    books.map((p) => {
        if (p.pages == max) {
            res.send(p)
        }
    })
    res.send('Not Found')
})

router.get('/nimgenNom', function (req, res) {
    let page = [];
    for (let i = 0; i < books.length; i++) {
        page.push(books[i].pages);
    }
    const min = Math.min(...page);
    books.map((p) => {
        if (p.pages == min) {
            res.send(p)
        }
    })
    res.send('Not Found')
})

router.get('/hevlel', function (req, res) {
    publishers = books.map((book) => {
        return book.publisher        
    })
    var count = {};
    publishers.forEach((i) => {count[i] = (count[i]||0) + 1})
    res.send(count)
})

module.exports = router