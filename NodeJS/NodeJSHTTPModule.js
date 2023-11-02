var http = require("http");

//create a server object:
http
  .createServer(function(req, res) {
    // 200 is the status code ready
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello Web World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
