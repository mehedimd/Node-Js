const http = require("http");
let port = 200;
let hostName = "127.0.0.1";

// Nodemon Package Using....
// http
//   .createServer((req, res) => {
//     console.log(req.url);
//     res.end("Mehedi Hasan Rasel...");
//   })
//   .listen(port, hostName, () => {
//     console.log(`Server running at 'http://${hostName}:${port}'`);
//   });

// Routing ....
const fs = require("fs");
http
  .createServer((req, res) => {
    if (req.url === "/") {
      fs.readFile("index.html", (err, data) => {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(data);
        res.end();
      });
    } else if (req.url === "/about") {
      fs.readFile("about.html", (err, data) => {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(data);
        res.end();
      });
    } else if (req.url === "/contact") {
      fs.readFile("contact.html", (err, data) => {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(data);
        res.end();
      });
    }
  })
  .listen(port, hostName, () => {
    console.log(`Server running at 'http://${hostName}:${port}'`);
  });
