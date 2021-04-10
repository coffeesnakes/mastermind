const express = require("express");
const path = require("path");
const morgan = require('morgan');
const mongoose = require("mongoose");
const cors = require("cors");
const favicon = require('serve-favicon')

const app = express();
const port = 3005;

// db
const url = process.env.DATABASE_URL || "mongodb://localhost/mastermind";

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("successfully connected to MongoDB!"));

app.get('/', (req, res) => {
  res.send('hello friend')
})

// parse
app.use(morgan('dev'));
app.use(express.json());

// serve
app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

// routing
// app.use("/api/scores", require("./routes/api/scores"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => console.log(`connected on http://localhost:${port}`));
