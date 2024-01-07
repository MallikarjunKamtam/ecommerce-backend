const express = require("express");
require("dotenv/config");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const PORT = process.env.PORT;
const DB_ENDPOINT = process.env.DB_ENDPOINT;
const API_URL = process.env.API_URL;
const mongoose = require("mongoose");
const router = require("./controllers/users");

mongoose
  .connect(DB_ENDPOINT)
  .then(() => {
    console.log("Database is connected!");
  })
  .catch((err) => console.log(err, "Somthing went wrong"));

app.use(cors());
app.options(cors());
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(API_URL, router);

app.listen(PORT, () => {
  console.log("server is runnig at -> " + PORT);
});
