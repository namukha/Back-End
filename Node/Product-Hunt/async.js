const fs = require('fs')
console.log('Before');
fs.readFile('/Users/mstars_lab1_04/Desktop/Product-Hunt/text1.txt', function (error, data) {
    console.log('** During **');
});
console.log('After');