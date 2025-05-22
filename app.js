const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;

mongoose.connect("mongodb://mongo:27017/testdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", () => {
  console.log("MongoDB connected");
});

app.get("/", (req, res) => {
  res.send("Hello from Node.js app with Monitoring!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
