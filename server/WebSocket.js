const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  socket.on("message", (message) => {
    console.log(`new message : ${message}`);
    io.emit("message", message);
  });

  socket.on("disconnect", () => {
    console.log("socket disconnected");
  });
});
server.listen(7777, () => {
  console.log("server listening at port 7777");
});
