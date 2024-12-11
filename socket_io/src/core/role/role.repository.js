import { pool } from "../../common/service/database.service.js";

export const createRole = (role) => {
  return pool.query(
    `INSERT INTO roles 
        (value) 
        VALUES ($1) RETURNING *`,
    [role.value]
  );
};
export const getRoleById = async (id) => {
  const result = await pool.query(`SELECT * FROM roles WHERE id=$1`, [id]);
  return result.rows[0];
};
export const getRoleByValue = async (value) => {
  const result = await pool.query(`SELECT * FROM roles WHERE value=$1`, [
    value,
  ]);
  return result.rows[0];
};
