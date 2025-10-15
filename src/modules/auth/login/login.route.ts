import { Router } from "express";
import { LoginController } from "./login.controller";

const router = Router();
const loginController = new LoginController();

router.post("/", loginController.loginUser);
export default router;
