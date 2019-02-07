const express = require("express");
const path = require("path");
const app = express();

app.get("*", express.static(path.join(__dirname, "..", "client", "build")));

app.get("/get_data", (req, res) => {
  res.json({ data: [{ name: "Ghassan", age: 35 }, { name: "Fuad", age: 34 }] });
});

module.exports = app;
