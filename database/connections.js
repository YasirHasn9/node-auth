const knex = require("knex");
const knexfile = require("../knexfile");


// we are taking advantage of js 
// Square brackets property access: object['property']

// this is working for the future in case we use a different environment 
// now we are using development but when we need to push our code to the real world
// we are gonna use the production environment
// we are gonna get access to the kind of environment in the .env file 
// .env will not be pushed into the github because it has alot of secret about 
// our database
const environment = process.env.NODE_ENV || "development";
module.exports = knex(knexfile[environment]);
