const knex = require("knex");
const secrets = require("../secrets.js");
const knexConfig = require("../knexfile.js");

const env = secrets.env;
module.exports = knex(knexConfig[env]);