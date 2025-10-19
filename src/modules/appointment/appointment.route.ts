import { Router } from "express";
import appointmentController from "./appointment.controller";

const route = Router();

route.post("/", appointmentController.createAppointments);
export default route;
