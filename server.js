const express = require('express');
const db = require("./helpers/dbconnect");
var bodyParser = require('body-parser');
const path = require("path");
const userController = require("./controllers/userController");
const app = express();
const port = process.env.port || 8081;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "views"))); 

app.use("/api/users",userController);

const server = app.listen(port, function () {
  const host = server.address().address
  const port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})