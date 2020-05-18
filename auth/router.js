const router = require("express").Router();
const bcrypt = require("bcryptjs")
const Users = require("../users/model");

router.post("/register", (req, res) => {
    // hash the password
    const credentials = req.body
    // takes 2 params the string we want to hash and the rounds for how many times we wanna hash it?
    // the higher the rounds the more hashed it gets the more slower the algorithm 
    // trick to hash through the production env
    const rounds = process.env.BCRYPT_ROUNDS || 8
    // the number that we retrive from the rounds is 2 to the power of 8 
    // the higher is the rounds the more securer it gets 

    // the bcryptjs is gonna add salting to the password
    const hash = bcrypt.hashSync(credentials.password , rounds) 

    // reassigned the password to hash so we can send to db
    credentials.password = hash
});

module.exports = router;
