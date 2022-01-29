// Include function in node js use require
var http = require('http');
// including external module
var dt = require('./myFirst')

//Creating the server
http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type': 'text/html'})
    res.write("The date and time are currentely:" + dt.myDateTime());
    res.end();
}).listen(8080);

//creating own Modules 

exports.myDateTime = function (){
    return Date();
};