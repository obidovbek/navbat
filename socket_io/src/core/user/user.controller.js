import { Router } from "express";
import {
  autoLogin,
  login,
  register,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} from "./user.service.js";
import authGuard from "../../common/middlewares/authGuard.js";

const router = Router();

router.post("/login", login);
router.post("/register", register);
router.get("/", authGuard, getUsers);
router.get("/:id", authGuard, getUser);
router.put("/:id", authGuard, updateUser);
router.delete("/:id", authGuard, deleteUser);
router.get("/auth/autologin", authGuard, autoLogin);

export default router;
