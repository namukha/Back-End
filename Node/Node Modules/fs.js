const fs = require('fs')
// const { error } = require('console');
// fs.stat('/Users/mstars_lab1_04/Desktop/node/test.txt', (err, stats) => {
//     if(err) {
//         console.error(err);
//         return
//     }
// })


// readFile()
// fs.readFile('/Users/mstars_lab1_04/Desktop/node/test.txt', (err, data) => {
//     if (err) {
//         console.error(err)
//         return
//     }
//     console.log(data.toString());
// })


// writeFile()
// const content = "some cont"
// fs.writeFile('/Users/mstars_lab1_04/Desktop/node/test.txt', content, err => {
//     if (err) {
//         console.error(err)
//         return
//     }
//     console.log(content);
// })


// specifying a flag
// const content = "\"some contenttt"
// fs.writeFile('/Users/mstars_lab1_04/Desktop/node/test.txt', content, {flag: 'a+'},err => {
//     if (err) {
//                 console.error(err)
//                 return
//             }
//             console.log(content);
// } )


// appendFile
// const content = "qwertyh gfds"
// fs.appendFile('file.log', content, err => {
//     if (err) {
//         console.error(err)
//         return
//     }
//     console.log(content);
// })


// create a folder
// const folderName = '/Users/mstars_lab1_04/Desktop/node/test'
// try {
//     if (!fs.existsSync(folderName)) {
//         fs.mkdirSync(folderName)
//     }
// } catch (err) {
//     console.error(err)
// }


// read content of a directory
// const path = require('path')
// const folderPath = path.dirname(__dirname)
// console.log(fs.readdirSync(folderPath));


// rename a folder
// fs.rename('/Users/mstars_lab1_04/Desktop/node', '/Users/mstars_lab1_04/Desktop/nodee', err => {
//     if (err) {
//         console.error(err)
//         return
//     }
// })


// remove a folder
let dir = '/Users/mstars_lab1_04/Desktop/node'
fs.rmdir(dir, { recursive: true }, (err) => {
    if (err) {
        throw err;
    }
    console.log(`${dir} is deleted`);
})