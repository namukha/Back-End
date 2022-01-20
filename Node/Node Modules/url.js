var url = require('url');
var adr = 'https://meet.google.com/wfq-fvxq-mho?pli=1';
var q = url.parse(adr, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);