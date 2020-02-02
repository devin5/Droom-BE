const db = require("../../data/dbConfig");

async function add(user) {
  const [id] = await db("employees").insert(user, "id");
  return findBy({ id }).first();
}

function findBy(filter) {
  return db("employees")
    .select("id", "username", "isEmployer")
    .where(filter);
}

function findByLogin(filter) {
  return db("employees").where(filter);
}

function find() {
  return db("employees").select("id", "username");
}

module.exports = {
  add,
  findBy,
  find,
  findByLogin
};
