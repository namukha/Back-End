const request =require('request')
const fs =require('fs')


function printFilms (str, callback) {
    const Mypromise = new Promise((resolve, reject) => {
        request('https://ghibliapi.herokuapp.com/films', function (error, response, body) {
            if (response) {
                console.log(str);
                return resolve()
            } else {
                return reject()
            }
        })
    })

    return Mypromise
}

function printAllPromise () {
    printFilms('A', () =>{
       
    })
        .then(() => {
            return printFilms('B', () => {})
        })
        .then(() => {
            return printFilms('C', () => {})
        })
}

printAllPromise();