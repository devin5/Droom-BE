exports.up = function(knex) {
  return knex.schema.createTable("employers", users => {
    users.increments();
    users
      .string("username", 128)
      .notNullable()
      .unique();
    users.string("password", 128).notNullable();
    users.boolean("isEmployer").notNullable();
    users.string("coName", 160).notNullable();
    users.string("proffession", 160).notNullable();
    users.string("openPostions", 110).notNullable();
    users.string("benifets", 140).notNullable();
    users.string("mission", 140).notNullable();
    users.string("imgUrl", 140).notNullable();
    users.string("city", 140).notNullable();
    users.string("state", 140).notNullable();
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("employers");
};
