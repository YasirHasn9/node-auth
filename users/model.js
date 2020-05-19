// it is best practice to separate your logic in different file so
// it can be clean , easy to fix and also dry
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
function findBy(filter) {
  // looking into the db to find the user with whatever is @param filter
  return db("users")
    .where(filter)
    .orderBy("id");
}

async function add(user) {
  try {
    //   this is always gonna return an array
    // this is why im using the array destructors [id]
    const [id] = await db("users").insert(user, "id");

    return findById(id);
  } catch (error) {
    console.log("findById", error);
    throw error;
  }
}
function findById(id) {
  return db("users")
    .where({ id })
    .first();
}
module.exports = {
  find,
  findBy,
  add,
  findById
};
