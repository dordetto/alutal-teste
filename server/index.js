const http = require("http");
const express = require("express");
const sequelize = require("./src/config/database");
const app = express();
const routes = require("./src/routes.js");
const cors = require("cors");

app.use(express.json());

app.use(cors());

app.use("/", routes);

sequelize.sync({ force: false }).then(() => {
  const port = 3003;
  app.set("port", port);
  const server = http.createServer(app);
  server.listen(port);
});
