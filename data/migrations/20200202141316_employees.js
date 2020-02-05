exports.up = function(knex) {
    return knex.schema.createTable("employees", users => {
      users.increments();
      users
        .string("username", 128)
        .notNullable()
        .unique();
      users.string("password", 128).notNullable();
      users.boolean("isEmployer").notNullable();
      users.string("firstName", 160).notNullable();
      users.string("lastName", 160).notNullable();
      users.string("yearsIn", 140).notNullable();
      users.string("profession", 140).notNullable();
      users.string("desiredTitle", 140).notNullable();
      users.string("skills", 200).notNullable();
      users.string("imgUrl", 140).notNullable();
      users.string("city", 40).notNullable();
      users.string("state", 40).notNullable();
    });
  };
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("employees");
  };