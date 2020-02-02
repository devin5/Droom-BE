const db = require("../../data/dbConfig");

async function add(user) {
  const [id] = await db("employers").insert(user, "id");
  return findBy({ id }).first();
}

function findBy(filter) {
  return db("employers")
    .select("id", "username", "isEmployer")
    .where(filter);
}

function findByLogin(filter) {
  return db("employers").where(filter);
}

function find() {
  return db("employers").select("id", "username");
}

module.exports = {
  add,
  findBy,
  find,
  findByLogin
};
