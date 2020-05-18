const db = require("../database/connections");

function find() {
  // this will get access to the users table and select the id and username
  return (
    db("users")
      .select("id", "username")
      // sort the records in ascending by default
      .orderBy("id")
  );
}

module.exports = {
  find
};
