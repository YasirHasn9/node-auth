module.exports = {
  isValid
};

function isValid(user) {
  return Boolean(
    user.username && user.password && typeof user.password === "string" // in case users inputs 
    // number because the bcryptjs required the password to be string
  );
}
