const express = require("express");

const app = express();

let data = "initial data";
const waitingList = [];

app.use(express.urlencoded({ extended: true }));
app.get("/getData", (req, res) => {
  if (req.query.lastData != data.data) {
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
});

app.listen(7777, () => {
  "server listening at port 7777";
});
