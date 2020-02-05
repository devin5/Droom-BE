// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./data/droom.db3"
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys =ON", done);
      }
    },
    migrations: {
      directory: "./data/migrations"
    }
  },
  production: {
       client: 'pg',
       useNullAsDefault: true,
       connection: process.env.DATABASE_URL,
       pool: {
         min: 2,
         max: 10,
       },
       migrations: {
           directory: './data/migrations',
       },
       seeds: {
         directory: './data/seeds',
       },
     },
   }

