var http = require("http");

//create a server object:
http
  .createServer(function(req, res) {
    // HTTP header
	// 200 is the status code ok
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello World! This is my VSCode."); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080

  console.log('Server running at http://127.0.0.1:8080/');