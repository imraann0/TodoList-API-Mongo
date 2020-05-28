const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

//Middlewares
app.use(cors());
app.use(bodyParser.json());

// Import routes
const postsRoute = require("./routes/todos");
app.use("/todos", postsRoute);

//routes
app.get("/", (req, res) => {
  res.send("this is home");
});

// connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("connected to db")
);

app.listen(3000);
