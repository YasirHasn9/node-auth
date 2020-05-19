const router = require("express").Router();
const bcrypt = require("bcryptjs");
const Users = require("../users/model");
// because as developer , you never trust the user
const { isValid } = require("../middlewars/isValid");

router.post("/register", (req, res) => {
  const credentials = req.body;
  if (isValid(credentials)) {
    // takes 2 params the string we want to hash and the rounds for how many times we wanna hash it?
    // the higher the rounds the more hashed it gets the more slower the algorithm
    // trick to hash through the production env
    const rounds = process.env.BCRYPT_ROUNDS || 8;
    // the number that we retrieve from the rounds is 2 to the power of 8
    // the higher is the rounds the more securer it gets

    // hash the password
    // the bcryptjs is gonna add salting to the password
    const hash = bcrypt.hashSync(credentials.password, rounds);

    // reassigned the password to hash so we can send to db
    credentials.password = hash;
    Users.add(credentials)
      .then(user => {
        res.status(201).json({ data: user });
      })
      .catch(err => {
        console.log("from rout", err);
        res.status(500).json({ message: err.message });
      });
  } else {
    res.status(400).json({ message: "Please provide username and password" });
  }
});

router.post("/login", (req, res) => {
  // this is what user typing in
  const { username, password } = req.body;
  if (isValid(req.body)) {
    // we are making sure that we have the user by their usernames
    Users.findBy({ username })
      .first() //  we can do this on the db model but in some cases we dont need to do that
      .then(user => {
        console.log("Useer", user);
        // check the guessed password with hashed one
        if (user && bcrypt.compare(password, user.password)) {
          res.status(200).json({ message: `Welcome ${user.username}` });
        } else {
          res.status(401).json({ message: "Invalid credentials" });
        }
      })
      .catch(err => {
        res.status(500).json({ message: err.message });
      });
  } else {
    res.status(400).json({ message: "Please provide username and password" });
  }
});

module.exports = router;
