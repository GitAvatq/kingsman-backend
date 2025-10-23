import { Request, Response } from "express";
import { notsuccess, success } from "../../utils/response";
import { prisma } from "../../config/prisma";

class AppointmentController {
  async createAppointments(req: Request, res: Response) {
    try {
      const { date, barberId, servicesId } = req.body;
      const userId = String(req.user?.id);
      if (!date || !barberId || !servicesId) {
        return notsuccess(res, "Missing required fields!");
      }

      const appointment = await prisma.appointment.create({
        data: { date: new Date(date), barberId, servicesId, userId },
        include: { service: true, barber: true, user: true },
      });

      return success(res, appointment);
    } catch (error: any) {
      return notsuccess(res, error.message);
    }
  }
  async getAppointments(req: Request, res: Response) {
    try {
      const appointments = await prisma.appointment.findMany({
        include: { service: true, barber: true, user: true },
      });

      return success(res, appointments, "Success");
    } catch (error: any) {
      return notsuccess(res, error.message);
    }
  }
}

const appointmentController = new AppointmentController();
export default appointmentController;
