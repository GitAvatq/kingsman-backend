import { Router } from "express";
import workController from "./works.controller";

const route = Router();

route.get("/get", workController.getWorks);
route.get("/remove", workController.removeWorks);
route.get("/edit", workController.editWorks);

export default route;
