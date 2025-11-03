import { Router } from "express";
import appointmentController from "./appointment.controller";

const route = Router();

route.post("/", appointmentController.createAppointments);
route.get("/get", appointmentController.getAppointments);
route.get("/:id", appointmentController.removeAppointment);
export default route;
