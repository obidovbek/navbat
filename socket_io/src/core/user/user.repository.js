import { pool } from "../../common/service/database.service.js";
import { getRoleByValue } from "../role/role.repository.js";

export const createUser = async (user) => {
  const result = await pool.query(
    `INSERT INTO users 
      (first_name, second_name, patronymic, email, password) 
      VALUES ($1, $2, $3, $4, $5) RETURNING *`,
    [
      user.first_name,
      user.second_name,
      user.patronymic,
      user.email,
      user.password,
    ]
  );
  return result.rows[0];
};

export const getUserById = async (id) => {
  const result = await pool.query(`SELECT * FROM users WHERE id=$1`, [id]);
  return result.rows[0];
};
export const getUserByEmail = async (email) => {
  const result = await pool.query(`SELECT * FROM users WHERE email=$1`, [
    email,
  ]);
  return result.rows[0];
};
export const getUsers = async () => {
  const result = await pool.query(`SELECT * FROM users`);
  return result.rows;
};

export const setUserRole = async (user_id, role_value) => {
  const role = await getRoleByValue(role_value);
  const result = await pool.query(
    `UPDATE users SET role_id=$1 WHERE id=$2 RETURNING *`,
    [role.id, user_id]
  );
  return result.rows[0];
};
