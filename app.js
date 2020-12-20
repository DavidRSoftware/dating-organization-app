const express = require("express");
// const mongoose = require("mongoose");
const path = require("path");
// const bodyParser = require("body-parser");
// const dotenv = require("dotenv");

// dotenv.config();

const app = express();
// app.use(bodyParser.json());
// app.use(cors());

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));