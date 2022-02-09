var http = require('http')
var url = require('url')

var server = http.createServer(function (request, response) {
    var cookies = request.headers.cookie;
    if(!cookies){
        var cookieText = "Cookie Text";
        response.setHeader('Set-Cookie', cookieText);
        console.log('cookie text nemlee');
        return response.end()
    } else {
        console.log(cookies);
        console.log('cookie already existed!');
    }
    return response.end(`<h1>Cookie set: ${cookies.toString()}</h1>`);
}).listen(3000);

