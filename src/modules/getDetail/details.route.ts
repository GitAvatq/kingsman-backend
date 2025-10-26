import { Router } from "express";
import { DetailsController } from "./details.controller";

const route = Router();

const detailsController = new DetailsController();

route.get("/:id", detailsController.getDetails);

export default route;
