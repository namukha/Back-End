console.log(10 + 10);
console.log("hello world");

const date1 = new Date();
const date2 = new Date("2022-12-31");
const diff = date2 - date1;
var diffDays = parseInt((date2 - date1) / (1000 * 60 * 60 * 24), 10);
console.log(diffDays)