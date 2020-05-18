exports.up = async function(knex) {
  // here we create teh table that would be in the database
  await knex.schema.createTable("roles", tbl => {
    tbl.increments("id"); // automatically increase the id number when a new user
    //   register
    tbl
      .string("name", 128) // type is string the 128 is the length of the string
      .notNullable() // cant be empty
      .unique();
  });

  await knex.schema.createTable("users", tbl => {
    tbl.increments("id");

    tbl
      .string("username", 128)
      .notNullable()
      .unique()
      .index(); // index fastens the search for the user
    tbl.string("password", 256).notNullable();
    tbl
      .integer("role")
      .unsigned()
      //   this is how connect to table("join ") using foreign key
      .references("roles.id")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
  });
};

exports.down = async function(knex) {
  // sometimes we need to rollback when we need to make a small changes or add
  // something to our database
  await knex.schema.dropTableIfExists("users");
  await knex.schema.dropTableIfExists("roles");
};
