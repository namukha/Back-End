const express = require('express');
const app = express();
const port = 3002;
app.use(express.json());
app.use(express.static('public'));

// RegEx
const ageVal = /[0-9]{1,2}/;
const numVal = /^[0-9]{8}$/ ;
const nameVal = /^[A-Z][a-z]{2,25}/;
const mailVal = /([a-zA-Z0-9_.+-]+)@[a-zA-Z0-9_.+-]+\.[a-zA-Z0-9_.+-]*/;
const passVal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/


app.post("/register", (req, res) => {
    const data = req.body;
    const validAge = ageVal.test(data.age)
    const validNum = numVal.test(data.num)
    const validName = nameVal.test(data.name)
    const validMail = mailVal.test(data.mail)
    const validPass = passVal.test(data.password)
    if( validAge & validNum & validName & validMail & validPass ) {
        const arr = [data.name, data.age, data.num, data.mail, data.password]
        res.send(arr)
    }
})

app.listen(port, () => {
    console.log((`Example app listening at http://localhost:${port}`));
})