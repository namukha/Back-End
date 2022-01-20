const request = require('request')

function printFilms(str, callback) {
    request('https://ghibliapi.herokuapp.com/films', function (error, response, body) {
        if (error) {
            console.error(`Couldn't send request to API: ${error.message}`);
            return
        }
        
        if (response.statusCode != 200) {
            console.error(`Expected status code: ${response.statusCode}`);
        }

        console.log(str);
        return callback();
    })
}
function printAllCallback() {
    printFilms("A",() => {
        printFilms("B",() => {
            printFilms("C",() => {

            });
        });

    });
    

}
printAllCallback()