import pkg from "pg";
const { Pool } = pkg;
import dotenv from "dotenv";
import { createTables, insertSeeders } from "./initDb.js";
dotenv.config();

export const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSPORT,
});

export const connectToDb = async () => {
  try {
    await pool.connect();
    console.log("Bazaga ulandi");

    await createTables();
    console.log("Tables created");

    await insertSeeders();
    console.log("seeders inserted");
  } catch (e) {
    console.log(e);
    console.log("Bazaga ulanishda hatolik boldi");
  }
};
