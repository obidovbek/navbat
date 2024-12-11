import { Router } from "express";
import { autoLogin, login, register } from "./user.service.js";
import authGuard from "../../common/middlewares/authGuard.js";

const router = Router();

router.post("/login", login);
router.post("/register", register);
router.get("/autologin", authGuard, autoLogin);

export default router;
