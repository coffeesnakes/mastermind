const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

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
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// serve
app.use("/", express.static(path.join(__dirname, "../client/dist")));

// routing
app.use('/api/highScores', function(req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.listen(port, () => console.log(`connected on http://localhost:${port}`));
