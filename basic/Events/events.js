//Every action on a computer is an event. Like when a connection is made or file is opened 

var fs = require('fs');
var rs = fs.createReadStream('./demofile.txt');
rs.on('open', function(){
    console.log('the file is open');
});