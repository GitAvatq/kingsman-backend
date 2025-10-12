import { Router } from "express";
import { RewievsController } from "./rewievs.controller";

const router = Router();
const RewievController = new RewievsController();

router.get("/", RewievController.getAll);
router.post("/", RewievController.create);
router.put("/:id", RewievController.update);
router.delete("/:id", RewievController.delete);

export default router;
