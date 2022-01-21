const express = require('express')
const request = require('request')
let content = ''
const app = express();

request('http://52.221.191.153/api/foods', function (error, response, body) {
    let data = JSON.parse(body).data

    data.map((food) => {
        let names = food.name
        let prices = food.price
        let stocks = food.stock

        content += `<p>${names} | ${prices} | ${stocks}</p>`
    })

})


app.get('/', (req, res) => {
    res.send(content)
})
app.listen(5000)




