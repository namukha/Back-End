const request = require('request')
const fs = require('fs')

request.post(
    {
        url: 'https://gorest.co.in/public/v1/users',
        body: JSON.stringify(
            {
                "name": "namuwwurwuuwwunn",
                "email": "qwewqwwwrwwe@qwe.com",
                "gender": "female",
                "status": "active"
            }
        ),
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer 2e61c68504e01eac6fa6027b5434bc4e67eefd5f378f1c492332339e674f38e1' }
    }, function (error, response, body) {

        if (error) {
            console.error(error)
            return
        }
        if (response.statusCode != 200) {
            console.error(`Expected status code: ${response.statusCode}`);
        }

        let data = JSON.parse(body).data
        let name = data.name;
        let id = data.id;
        let email = data.email;
        let gender = data.gender;
        let status = data.status;
        let content = `name: ${name} \nid: ${id} \nemail: ${email} \ngender: ${gender} \nstatus: ${status}`;

        fs.writeFile('/Users/mstars_lab1_04/Desktop/node-experience/text.txt', content, err => {
            if (err) {
                console.error(err)
                return
            }
            console.log(JSON.parse(body));
        })
    }
)
