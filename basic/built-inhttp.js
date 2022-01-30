var http = require('http');

// http module listen to the server port and return 
//back to the client

//create the server object
http.createServer(function(req,res){
    //add http header 
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write('Hello world'); // write a response to the client
    res.write(req.url);// it take the request comming from the html and write it
    res.end(); // end the response
}).listen(8080); // the server object listens on port 8080

// yesma req.url le url ma bhako /bhanda paxadi ko lai string banayera request garxa
// tyo request lai read garna 11 no use hunxa ra tesle tyo request lai jasta ko tastai print garxa