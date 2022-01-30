//create a new file using appendFile() method
var fs = require('fs');

fs.appendFile('../mynewfile1.txt','this is new text', function(err){
    if (err) throw err;
    console.log('Upadted!');
});