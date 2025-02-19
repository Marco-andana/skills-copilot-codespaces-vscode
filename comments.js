// Create web server
// 1. Create a web server
// 2. Read the file "index.html"
// 3. Send the file as a response to the client
// 4. Listen on port 8080
// 5. Print a message to the console

var http = require("http");
var fs = require("fs");

http.createServer(function(request, response) {
    fs.readFile("index.html", function(err, data) {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(data);
        response.end();
    });
}).listen(8080);

console.log("Server is running at http://localhost:8080");