const express = require("express");
const fsPromises = require("fs").promises;
const favicon = require("express-favicon");
const path = require("path");

const bodyParser = require("body-parser");
const sassMiddleware = require("node-sass-middleware");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  sassMiddleware({
    src: __dirname + "/public/sass", // Sass source directory
    dest: __dirname + "/public/css", // Compiled CSS destination directory
    debug: false, // Output source maps for development
    outputStyle: "compressed", // Minify the output CSS
  })
);

app.use(express.static("public"));
app.use(favicon(__dirname + "/public/favicon.ico"));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function (req, res) {
  console.log(req.body);

  res.send(
    "Post received. We will get back to you within 24 hours, " +
      req.body.fullName +
      "."
  );
});

app.listen(3000, function () {
  console.log("Server is running at port 3000");
});
