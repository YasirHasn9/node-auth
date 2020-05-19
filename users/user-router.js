const router = require("express").Router();
const Users = require("./model");

function restricted(req, res, next) {
  if (req.session && req.session.loggedIn) {
    next();
  } else {
    res.status(401).json({ message: "cant pass" });
  }
}

router.use(restricted);
router.get("/", (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;
