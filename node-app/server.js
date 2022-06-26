const http = require("http");

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`
    <h1>Hello from inside the very basic Node app!</h1>
  `);
});

const server = http.createServer(app);

server.listen(3000);
