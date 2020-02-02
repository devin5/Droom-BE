const db = require("../../data/dbConfig");

// async function add(user) {
//   const [id] = await db("users").insert(user, "id");
//   return findBy({ id }).first();
// }

function findById(filter) {
  return (
    db("employees")
      // .select("id", "username", "email")
      .where(filter)
  );
}

const getEmployees = () => {
  return db("employees");
};

const remove = id => {
  return db("employees")
    .where({ id })
    .delete();
};

function update(changes, id) {
  return db("employees")
    .where({ id })
    .update(changes, "id");
}

// function findByLogin(filter) {
//   return db("users").where(filter);
// }

module.exports = {
  remove,
  getEmployees,
  findById,
  update
};
