import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { getUserByEmail } from "../../core/user/user.repository.js";
dotenv.config();
const authGuard = async (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) {
    return res.status(401).send("Kalit berilmagan");
  }

  try {
    const result = await jwt.verify(token, process.env.JWT_SECRET);
    const { email } = result;
    const user = await getUserByEmail(email);
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).send("Kalit hato!");
  }
};

export default authGuard;
