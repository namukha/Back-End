// const word = "aaewewedsdewddsxac";
// const a = word.replace(new RegExp("[Aa]*"), 's');

// console.log("old: " + word);
// console.log("new: " + a);



// without Regex
// let word = 'something102asdfkj1948948';
// let numbers = ''
// for (let i = 0; i < word.length; i++) {
//     if(!isNaN(word.charAt(i))) {
//         numbers += word.charAt(i);
//     }
// }
// console.log(word);
// console.log(numbers);



// with Regex
// let word = 'something102asdfkj1948948';
// let pattern = /\d+/g;
// console.log(word.match(pattern))



// exercise 2
// let word = "nraasn@dlsfkss.com"
// let pattern = new RegExp("([a-zA-Z0-9_.+-]+)@[a-zA-Z0-9_.+-]+\.[a-zA-Z0-9_.+-]+");
// console.log(word.match(pattern))