import {
  createRole,
  getRoleById,
  getRoleByValue,
} from "../../core/role/role.repository.js";
import {
  createUser,
  getUserByEmail,
  setUserRole,
} from "../../core/user/user.repository.js";
import { pool } from "./database.service.js";
import bcrypt from "bcryptjs";

export const createTables = async () => {
  await pool.query(
    `CREATE TABLE IF NOT EXISTS roles 
          (
              id SERIAL PRIMARY KEY,
              value VARCHAR(255)
          )
      `
  );
  await pool.query(
    `CREATE TABLE IF NOT EXISTS users 
          (
              id SERIAL PRIMARY KEY,
              first_name VARCHAR(255) NOT NULL, 
              second_name VARCHAR(255) NOT NULL, 
              patronymic VARCHAR(255),
              email VARCHAR(150) NOT NULL UNIQUE,
              password VARCHAR(255) NOT NULL,
              role_id INTEGER,
              created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
              updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
              FOREIGN KEY ( role_id ) REFERENCES roles ( id )
          )
      `
  );

  await pool.query(
    `CREATE TABLE IF NOT EXISTS services 
          (
              id SERIAL PRIMARY KEY,
              value VARCHAR(255)
          )
      `
  );
  await pool.query(
    `CREATE TABLE IF NOT EXISTS user_services 
          (
              id SERIAL PRIMARY KEY,
              user_id INTEGER,
              service_id INTEGER,
              FOREIGN KEY ( user_id ) REFERENCES users ( id ),
              FOREIGN KEY ( service_id ) REFERENCES services ( id )
          )
      `
  );
};
export const insertSeeders = async () => {
  const user = {
    first_name: "tkti",
    second_name: "tkti",
    patronymic: "",
    email: "navbat_admin@tkti.uz",
    password: "tkti2024",
  };

  const existingUser = await getUserByEmail(user.email);
  const hashedPassword = await bcrypt.hash(user.password, 10);
  if (!existingUser) {
    var createdUser = await createUser({ ...user, password: hashedPassword });
  }
  const roleAdmin = await getRoleByValue("ADMIN");
  if (!roleAdmin) {
    await createRole({ value: "ADMIN" });
  }

  const roleOfficer = await getRoleByValue("OFFICER");
  if (!roleOfficer) {
    await createRole({ value: "OFFICER" });
  }
  const userRole = await getRoleById(existingUser?.role_id);
  if (userRole?.value !== "ADMIN") {
    await setUserRole(createdUser?.id, "ADMIN");
  }
};
