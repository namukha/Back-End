// Path
const path = require('path')
const notes = '/Users/mstars_lab1_04/Desktop/node/test.txt'
console.log(path.dirname(notes));
console.log(path.basename(notes));
console.log(path.extname(notes));


// path.join()
const name = 'joe'
console.log(path.join('/', 'users', name, 'test.txt'));


// path.resolve()
console.log(path.resolve('joe.txt'));

console.log(path.resolve('tmp', 'joe.txt'));

console.log(path.normalize('/users/joe/..//test.txt'));


// path __dirname
const dir = __dirname;
console.log(__dirname);