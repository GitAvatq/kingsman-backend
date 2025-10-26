import { Router } from "express";
import { BarberController } from "./barber.controller";

const router = Router();
const barberControllor = new BarberController();

router.get("/", barberControllor.getAll);
router.post("/createBarber", barberControllor.create);
router.put("/:id", barberControllor.update);
router.delete("/:id", barberControllor.delete);

export default router;
