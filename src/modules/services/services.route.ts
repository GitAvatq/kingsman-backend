import { Router } from "express";
import { ServicesController } from "./services.controller";

const router = Router();
const barbershopServices = new ServicesController();

router.get("/services", barbershopServices.services);

export default router;
