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

      const existing = await prisma.appointment.findFirst({
        where: {
          date: new Date(date),
          barberId,
          userId,
        },
      });

      if (existing) {
        return notsuccess(
          res,
          "Appointment already exists for this barber and time"
        );
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
      const userId = String(req.user?.id);
      const appointments = await prisma.appointment.findMany({
        where: { userId },
        include: { service: true, barber: true, user: true },
      });

      return success(res, appointments, "Success");
    } catch (error: any) {
      return notsuccess(res, error.message);
    }
  }

  async removeAppointment(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const userId = String(req.user?.id);
      const appId = Number(id);
      if (!id) return notsuccess(res, "Appointment ID is required");

      // Проверяем, что запись существует и принадлежит пользователю
      const appointment = await prisma.appointment.findFirst({
        where: { id: appId, userId },
      });

      if (!appointment) return notsuccess(res, "Appointment not found");

      // Удаляем запись
      await prisma.appointment.delete({
        where: { id: appId },
      });

      return success(res, null, "Appointment deleted successfully");
    } catch (error: any) {
      return notsuccess(res, error.message);
    }
  }
}

const appointmentController = new AppointmentController();
export default appointmentController;
