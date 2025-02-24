const express = require("express");

let clients = [];
let intervalId;
const app = express();

app.get("/notifications", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("Cache-Control", "no-cache");
  res.flushHeaders();

  clients.push(res);
  if (!intervalId) {
    intervalId = setInterval(() => {
      const data = JSON.stringify({
        message: `Server sent event ${new Date().toLocaleTimeString()}`,
      });
      clients.forEach((client) => client.write(`data: ${data}\n\n`));
    }, 5000);
  }

  req.on("close", () => {
    clients = clients.filter((item) => item != res);
    if (clients.length === 0) {
      clearInterval(intervalId);
      intervalId = null;
    }
  });
});

app.listen(7777, () => {
  console.log("server listening on port 7777");
});
