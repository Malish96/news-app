// imports

const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");

const cors = require("cors");
const db = require("./models");
const http = require("http");
const app = express();

app.use(logger("dev")); // log requests to console

// default route setup and json response on the welcome message
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "http://localhost:8000",
    credentials: true,
  })
);

app.get("/api", (req, res) =>
  res.status(200).send({
    message: "Welcome to the News App API",
  })
);

require("./routes/UserRoutes")(app);
require("./routes/NewsCategoryRoutes")(app);
require("./routes/NewsRoutes")(app);

db.sequelize
  .sync()
  .then(function () {
    console.log("Database sync sucessful");
  })
  .catch(function (err) {
    console.log(err, "Error syncing database");
  });

const port = parseInt(process.env.PORT, 10) || 8081;

app.set("port", port);

const server = http.createServer(app);

server.listen(port);

module.exports = app;
