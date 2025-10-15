import { Router } from "express";
import { RegisterController } from "./auth.controller";

const route = Router();
const registerController = new RegisterController();

route.post("/", registerController.registerUser);

export default route;
