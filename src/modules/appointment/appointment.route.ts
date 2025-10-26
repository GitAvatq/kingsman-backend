import { Router } from "express";
import appointmentController from "./appointment.controller";

const route = Router();

route.post("/", appointmentController.createAppointments);
route.get("/get", appointmentController.getAppointments);
export default route;
