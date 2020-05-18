const db = require("../database/connections");

function find() {
  return db("users")
    .select("id", "username")
    .orderBy("id");
}

module.exports = {
  find
};
