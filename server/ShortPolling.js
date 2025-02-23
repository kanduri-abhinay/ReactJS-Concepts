const express = require("express");

const app = express();

let data = {
  data: "data from server",
};

app.use(express.urlencoded({ extended: true }));
app.get("/getData", (req, res) => {
  res.send(data);
});

app.post("/updateData", (req, res) => {
  data = data = {
    data: "updated data",
  };
  res.send("updated successfully");
});

app.listen(7777, () => {
  "server listening at port 7777";
});
