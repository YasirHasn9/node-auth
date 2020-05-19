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

const configSession = {
  cookie: {
    // // this is telling for how long we want our cookie to be stored
    // maxAge: 1000 * 6 * 60,
    // // send cookie only over  https ,
    // //means if the connection encrypted
    // // i will send the cookie other wise im not gonna do it
    // // should be true in production
    // secure: process.env.SECURE_COOKIE || false,
    // // means js cant get access the cookie .
    // // always true for authentication
    // httpOnly: true,
    // resave: false,
    // // this pops up the message for user to get permission form the
    // // client to get the cookies stored for the user
    // // it should be not true through the production unless they say okay
    // saveUninitialized: process.env.USER_ALLOWED_COOKIES || true,
    // name: "monster",
    // secret: process.env.COOKIE_SECRET || "keepitsecret' keepitsave"

    maxAge: 1000 * 60 * 60,
    secure: process.env.SECURE_COOKIE || true,
    httpOnly: true
  },
  resave: false,
  saveUninitialized: process.env.USER_ALLOWED_COOKIES || true,
  name: "monster",
  secret: process.env.COOKIE_SECRET || "keep it save ' keep it secret"
};
// so when the user login successfully
// then we are gonna create a session that produces cookie for the client

server.use(session(configSession)); // turn on session for the API

server.use("/api/users", userRouter);
server.use("/api/auth", authRouter);

server.get("/", (req, res) => {
  res.json({ message: "Up" });
});
module.exports = server;
