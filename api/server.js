const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const server = express();

const userRouter = require("../users/user-router");

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use("/api/users", userRouter);
server.get("/", (req, res) => {
  res.json({ message: "Hello" });
});
module.exports = server;
