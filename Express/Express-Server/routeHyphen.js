const express = require('express')
const app = express()

app.get ('/flights/:from-:to', function (req, res) {
    res.send(req.params)
})

app.listen(3000)