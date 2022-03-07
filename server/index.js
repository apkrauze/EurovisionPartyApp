require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");

//HERE IS DATABASE CONNECTION
connection();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));
