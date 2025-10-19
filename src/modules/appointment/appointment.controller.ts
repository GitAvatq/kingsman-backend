import { Request, Response } from "express";
import { notsuccess, success } from "../../utils/response";
import { prisma } from "../../config/prisma";

class AppointmentController {
  async createAppointments(req: Request, res: Response) {
    try {
      const { date, barberId, servicesId } = req.body;

      if (!date || !barberId || !servicesId) {
        return notsuccess(res, "Missing required fields!");
      }

      const appointment = await prisma.appointment.create({
        data: { date: new Date(date), barberId, servicesId },
        include: { service: true, barber: true },
      });

      return success(res, appointment);
    } catch (error: any) {
      return notsuccess(res, error.message);
    }
  }
}

const appointmentController = new AppointmentController();
export default appointmentController;
