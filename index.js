const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res
    .status(200)
    .json({ message: "endpoint is working successfully..." });
});

app.get("/name", (req, res) => {
  res.send("sahul");
});

app.listen(3001, () => {
  console.log("server running at port 3001");
});
