const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const usersRouter = require("./controllers/users");
const categoriesRouter = require("./controllers/categories");
const subCategoriesRouter = require("./controllers/sub_category");

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT;
const DB_ENDPOINT = process.env.DB_ENDPOINT;
const API_URL = process.env.API_URL;

// Connect to the database
mongoose
  .connect(DB_ENDPOINT, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.error("Error connecting to the database:", err));

// Middleware
app.use(cors());
app.options("*", cors());
app.use(morgan("tiny"));
app.use(bodyParser.json());

// Routers

app.use(API_URL, usersRouter);
app.use(API_URL, categoriesRouter);
app.use(API_URL, subCategoriesRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
