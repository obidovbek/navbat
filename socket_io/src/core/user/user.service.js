import {
  createUser,
  deleteUserById,
  getUserByEmail,
  getUserById,
  getUsersFromDb,
  setUserRole,
  updateUserById,
} from "./user.repository.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { createRole, getRoleByValue } from "../role/role.repository.js";
dotenv.config();

export const login = async (req, res) => {
  try {
    const user = req.body;

    const existingUser = await getUserByEmail(user.email);
    if (!existingUser) {
      return res.status(404).send("Email yoki parol hato!");
    }
    const comparePassword = await bcrypt.compare(
      user.password,
      existingUser.password
    );
    if (!comparePassword) {
      return res.status(401).send("Email yoki parol hato!");
    }
    const token = await generateToken({ email: user.email });
    res.status(200).send({ ...existingUser, token });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
export const generateToken = (data) => {
  return jwt.sign(data, process.env.JWT_SECRET, { expiresIn: "8h" });
};
export const register = async (req, res) => {
  try {
    const user = req.body;
    const existingUser = await getUserByEmail(user.email);
    if (existingUser) {
      return res.status(404).send("Bunday email oldin ro'yhatdan o'tgan!");
    }

    const hashedPassword = await bcrypt.hash(user.password, 10);

    const createdUserRes = await createUser({
      ...user,
      password: hashedPassword,
    });

    await setUserRole(createdUserRes?.id, "OFFICER");

    res.status(200).send(createdUserRes);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = req.body;
    const existingUser = await getUserByEmail(user.email);
    if (!existingUser) {
      return res.status(404).send("Bunday email topilmadi!");
    }

    const hashedPassword = await bcrypt.hash(user.password, 10);

    const createdUserRes = await updateUserById(id, {
      ...user,
      password: user.password ? hashedPassword : existingUser.password,
    });

    res.status(200).send(createdUserRes);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const autoLogin = (req, res) => {
  try {
    return res.status(200).send(req.user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await getUserById(id);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("delete ", id);
    const result = await deleteUserById(id);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getUsers = async (req, res) => {
  try {
    const result = await getUsersFromDb();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
