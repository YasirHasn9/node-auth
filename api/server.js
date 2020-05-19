const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const server = express();
const session = require("express-session");

const userRouter = require("../users/user-router");
const authRouter = require("../auth/router");

server.use(express.json());
server.use(helmet());
// CORS is a node.js package for providing a
// Connect/Express middleware that can be used to enable
// CORS with various options.
server.use(cors());
const sessionConfig = {
  name: "sessionId",
  secret: "keep it secret, keep it safe!",
  cookie: {
    maxAge: 1000 * 60 * 60,
    secure: false, // https
    httpOnly: true // when true, js can't get to the cookie
  },
  // we should only save sessions when user allows it
  resave: false,
  saveUninitialized: false
};
// so when the user login successfully
// then we are gonna create a session that produces cookie for the client

server.use(session(sessionConfig)); // turn on session for the API

server.use("/api/users", userRouter);
server.use("/api/auth", authRouter);

server.get("/", (req, res) => {
  res.json({ message: "Up" });
});
module.exports = server;
