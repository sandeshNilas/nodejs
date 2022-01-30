var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr,true);

console.log(q.host); // return host name
console.log(q.pathname);// return htmlname
console.log(q.search);// returns query search code
var qdata = q.query;// returns an object of query 

console.log(qdata.month)// returns months
