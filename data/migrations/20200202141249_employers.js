exports.up = function(knex) {
    return knex.schema.createTable("employers", users => {
      users.increments();
      users
        .string("username", 128)
        .notNullable()
        .unique();
      users.string("password", 128).notNullable();
      users.boolean("isEmployer").notNullable();
      users.string("coName", 60).notNullable();
      users.string("proffession", 60).notNullable();
      users.string("openPostions", 40).notNullable();
      users.string("benifets", 40).notNullable();
      users.string("mission", 40).notNullable();
      users.string("imgUrl", 40).notNullable();
      users.string("city", 40).notNullable();
      users.string("state", 40).notNullable();
    });
  };
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("employers");
  };
  
