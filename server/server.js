const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.use("/", express.static(path.join(__dirname, "client")));
app.use(bodyParser.json());

app.listen(3002, () => {
  console.log("Server is running at 3002");
});
