const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const morgan = require("morgan");

const consultationRoute = require("./routes/consultation");
const machineryRoute = require("./routes/machinery");
const rentalRoute = require("./routes/rental");

const app = express();

mongoose.connect("mongodb://localhost:27017/constrution").then(() => {
  console.log("Connected to database");
});
// app.use(dotenv.config);
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("public"));

app.use('/api/v1/consultation', consultationRoute);
app.use('/api/v1/machinery', machineryRoute);
app.use('/api/v1/rental', rentalRoute);

app.listen(5000, () => {
  console.log(`Server running at 5000`);
});
