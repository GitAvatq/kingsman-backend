import { Router } from "express";
import { ServicesController } from "./services.controller";

const router = Router();
const barbershopServices = new ServicesController();

router.get("/", barbershopServices.services);
router.post("/create", barbershopServices.createService);

export default router;
