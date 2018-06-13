const path = require("path");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/view/home.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "/view/about.html"));
});

app.get("/project/:projectId", (req, res) => {
  res.sendFile(path.join(__dirname, "/view/project.html"));
  //res.send(`${req.params.projectId}`);
});

app.use(express.static('public'));

app.listen(3000, () => {
  console.log("Example app listening on port 3000");
});
