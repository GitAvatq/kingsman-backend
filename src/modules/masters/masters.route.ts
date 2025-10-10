import { Router } from "express";
import { MastersController } from "./masters.controller";

const router = Router();
const masterController = new MastersController();

router.get("/", masterController.getAll);
router.post("/", masterController.create);
router.put("/:id", masterController.update);
router.delete("/:id", masterController.delete);

export default router;
