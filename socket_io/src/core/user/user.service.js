import { createUser, getUserByEmail } from "./user.repository.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const login = async (req, res) => {
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
  res.status(200).send({ token });
};
export const generateToken = (data) => {
  return jwt.sign(data, process.env.JWT_SECRET, { expiresIn: "8h" });
};
export const register = async (req, res) => {
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
  res.status(200).send(createdUserRes);
};
export const autoLogin = (req, res) => {
  return res.status(200).send(res.user);
};
