const request = require('request')
const fs = require('fs')

request('http://52.221.191.153/api/foods', function (body) {
    let data = JSON.parse(body).data

    data.map((food) => {
        let names = food.name
        let prices = food.price
        let stocks = food.stock
        let content = `${names} | ${prices} | ${stocks}\n`
        fs.writeFileSync('/Users/mstars_lab1_04/Desktop/Product-Hunt/text1.txt', content, {flag: 'a+'}, err => {
            if (err) {
                console.error(err);
                return
            }
        })
    })
})


