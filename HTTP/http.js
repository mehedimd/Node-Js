const http = require("http");
const port = 500;
const myHost = "127.0.0.1";

// Create Server One Way
//   http.createServer((req, res) => {
//     res.end("Server Created Successfully");
//   })
//   .listen(4252, () => {
//     console.log("Server is Running Now");
//   });

// Create Server Another Way
// const server = http.createServer((req, res) => {
//   res.end("Server Created Successfully");
// });

// server.listen(port, () => {
//   console.log(`Server is Running Now 'http://${myHost}:${port}'`);
// });

// Create Server
const server = http.createServer((req, res) => {
  res.writeHead(210, { "Content-Type": "text/html" });
  res.write("<h1>Server Created Successfully</h1>");
  res.end();
});

server.listen(port, () => {
  console.log(`Server is Running Now 'http://${myHost}:${port}'`);
});
