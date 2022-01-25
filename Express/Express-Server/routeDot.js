const express = require('express')
const app = express()

app.get('/plantae/:genus.:species', function (req, res) {
    res.send(req.params)
})

app.listen(3000)