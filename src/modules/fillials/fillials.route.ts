import { Router } from "express";
import { FillialsController } from "./fillials.controller";

const router = Router();
const controller = new FillialsController();

router.get("/", controller.getAll);
router.post("/create", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);
router.get("/:id", controller.getById);
router.get("/search", controller.searchByCountry);

export default router;
