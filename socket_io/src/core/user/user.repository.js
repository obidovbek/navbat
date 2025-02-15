import { pool } from "../../common/service/database.service.js";
import { getRoleByValue } from "../role/role.repository.js";

export const createUser = async (user) => {
  const result = await pool.query(
    `INSERT INTO users 
      (first_name, second_name, patronymic, email, password, services, reception_number) 
      VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
    [
      user.first_name,
      user.second_name,
      user.patronymic,
      user.email,
      user.password,
      user.services ? JSON.stringify(user.services) : JSON.stringify([]),
      user.reception_number ?? "",
    ]
  );
  return result.rows[0];
};
export const updateUserById = async (user_id, user) => {
  const result = await pool.query(
    `UPDATE users SET  
          first_name=$1, 
          second_name=$2, 
          patronymic=$3, 
          password=$4, 
          services=$5, 
          reception_number=$6
     WHERE id=$7`,
    [
      user.first_name,
      user.second_name,
      user.patronymic,
      user.password,
      user.services ? JSON.stringify(user.services) : JSON.stringify([]),
      user.reception_number ?? "",
      user_id,
    ]
  );
  return result.rows[0];
};
export const getUserById = async (id) => {
  const result = await pool.query(`SELECT * FROM users WHERE id=$1`, [id]);
  return result.rows[0];
};
export const deleteUserById = async (id) => {
  const result = await pool.query(`DELETE FROM users WHERE id=$1`, [id]);
  return result.rows[0];
};

export const getUserByEmail = async (email) => {
  const result = await pool.query(
    `
      SELECT     
        u.first_name,
        u.second_name,
        u.patronymic,
        u.email,
        u.password,
        u.role_id,
        u.reception_number,
        u.services,
        r.value AS role
      FROM users AS u
      JOIN roles AS r ON u.role_id = r.id
      WHERE u.email = $1;
    `,
    [email]
  );
  return result.rows[0];
};
export const getUsersFromDb = async () => {
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
