const express = require("express");
const helmet = require("helmet");
//
const cors = require("cors");
const server = express();

const userRouter = require("../users/user-router");
const authRouter = require("../auth/router");

server.use(express.json());
server.use(helmet());
// CORS is a node.js package for providing a
// Connect/Express middleware that can be used to enable
// CORS with various options.
server.use(cors());
server.use("/api/users", userRouter);
server.use("/api/auth", authRouter);

server.get("/", (req, res) => {
  res.json({ message: "Up" });
});
module.exports = server;
