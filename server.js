const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose")

const app = express();
const PORT = process.env.PORT || 3000;

const db = require("./models");

const routes = require("./controllers")

app.use(logger("dev"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes)

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/workout",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
  );

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });