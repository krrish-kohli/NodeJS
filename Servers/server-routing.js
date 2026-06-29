const http = require("http");

// Create a server
const server = http.createServer((req, res) => {
  // set the content to plain text
  res.setHeader("Content-Type", "text/plain");
  if (req.url === "/" && req.method === "GET") {
    res.statusCode = 200;
    res.end("Welcome to the Home Page");
  } else if (req.url === "/about" && req.method === "GET") {
    res.statusCode = 200;
    res.end("Welcome to the About Page");
  } else if (req.url === "/contact" && req.method === "GET") {
    res.statusCode = 200;
    res.end("Contact us at: support@janedoe.com");
  } else {
    res.statusCode = 404;
    res.end("404 - Page Not Found");
  }
});

// Define port
const PORT = 5050;
//Start the server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log("Press Ctrl + C to stop the server");
});
