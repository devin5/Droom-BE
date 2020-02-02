const db = require("../../data/dbConfig");

// async function add(user) {
//   const [id] = await db("users").insert(user, "id");
//   return findBy({ id }).first();
// }

function findById(filter) {
  return (
    db("employers")
      // .select("id", "username", "email")
      .where(filter)
  );
}

const getEmployers = () => {
  return db("employers");
};

const remove = id => {
  return db("employers")
    .where({ id })
    .delete();
};

function update(changes, id) {
  return db("employers")
    .where({ id })
    .update(changes, "id");
}

// function findByLogin(filter) {
//   return db("users").where(filter);
// }

module.exports = {
  remove,
  getEmployers,
  findById,
  update
};
