const { json } = require('express');
const express = require('express');
const fs = require('fs')
const util = require('util')
const app = express();

app.get('/users/:userId', function (req, res) {
    const userIdd = req.params.userId;
    const readFile = util.promisify(fs.readFile);
    readFile('./data/user.json')
        .then((text) => {
            const data = JSON.parse(text.toString("utf8"));
            data.map((dt) => {
                if (dt.id == userIdd) {
                    res.send(dt)
                }
            });
            res.send("not found")
        })
        .catch((err) => {console.log("Error", err);})
})

app.listen(3000)

// let result = [];

// app.get('/library', function (req, res) {
//     const utga = req.query.category;
//     const readFile = util.promisify(fs.readFile);
//     readFile('./foods.json')
//         .then((text) => {
//             const data = JSON.parse(text.toString("utf8"));
//             data.map((dt) => {
//                 if (dt.category.includes(utga)) {
//                     result.push(dt)
//                 }              
//             });
//             res.send(result)          
//         })
//         .catch((err) => {console.log("Error", err);})
// })

app.listen(3000)