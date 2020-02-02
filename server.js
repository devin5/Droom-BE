const express = require("express");
const config = require("./middleware/configureMiddleware");
const restricted = require("./middleware/restrict");

const employeeAuthRouter = require("./employees/auth/authRouter");
const employeeApiRouter = require("./employees/employeeApi/employeeRouter");

const employerAuthRouter = require("./employers/auth/authRouter");
const employerApiRouter = require("./employers/employersApi/employersRouter");

server = express();

config(server);

server.use("/employee/auth/droom/api", employeeAuthRouter);
server.use("/employee/droom/api", restricted, employeeApiRouter);

server.use("/employer/auth/droom/api", employerAuthRouter);
server.use("/employer/droom/api", restricted, employerApiRouter);

server.get("/", (req, res) => {
  res.send(
    "<h1>Hello im the API for droom. I have been to many places... but this one is the coldest... please, help me escape from this place</h1>"
  );
});

module.exports = server;
