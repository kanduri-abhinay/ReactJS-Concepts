const express = require("express");

const app = express();

let data = "initial data"; // Correct initialization
const waitingList = [];

app.use(express.urlencoded({ extended: true }));

app.get("/getData", (req, res) => {
  if (req.query.lastData !== data) {
    res.json({ data });
  } else {
    waitingList.push(res);
  }
});

app.post("/updateData", (req, res) => {
  data = req.query.newData;

  res.send("updated successfully");
  waitingList.forEach((client) => {
    client.json({ data });
  });
  waitingList.length = 0; // Clear the waiting list after notifying all clients
});

app.listen(7777, () => {
  console.log("Server listening at port 7777");
});
