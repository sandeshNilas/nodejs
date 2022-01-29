var fs = require('fs');
fs.writeFile('myfilename3.txt', 'hello Content!', function(err){
    if (err) throw err;
    console.log('Saved');
});