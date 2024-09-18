import knex from 'knex';
import * as dotenv from 'dotenv';

dotenv.config();

const {
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  POSTGRES_PORT,
  POSTGRES_HOST,
} = process.env;
const db = knex({
  client: 'pg',
  connection: {
    host: POSTGRES_HOST,
    port: POSTGRES_PORT,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DB,
  },
});
try {
  // check connection to DB
  db.raw('SELECT 1')
    .then(() => {
      console.log(
        'Connected to the database on ' + POSTGRES_HOST + ' successfully!',
      );
    })
    .catch((err) => {
      console.error('Failed to connect to the database:', err.message);
      if (err.code === 'ECONNREFUSED') {
        console.error('Connection refused. Please check your database server.');
      }
      // close connection
      db.destroy();
    });
} catch (error) {
  console.error('Error initializing database connection:', error.message);
  throw error;
}
console.log(POSTGRES_PASSWORD, POSTGRES_DB);
export default db;
