const express = require('express')
const app = express()
const port = 3000
const { quotes } = require('./data/data.json')

app.use(express.json());
app.use(express.static('public'));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("view options", { layout: false });

app.get('/', (req, res) => {
    res.render('index', {name: 'Namuun', message: "Message section"})
})

app.get('/404', (req, res) => {
    res.render('404', { error: "Oops! Error ocurred", img: "../error.jpeg"})
})

app.get('/quotes', (req, res) => {
    res.render('quotes', 
    {h5: "Quote List", quotes: quotes}
    )
})

app.get('/quotes/:id', (req, res) => {
    const paramId = req.params.id
    const result = quotes.filter(q => q.id == paramId)
    res.render('oneQuote', 
    { id: paramId, result }
    )
})

// app.get('/json', (req, res) => {
//     res.send('Hello World')
// })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})