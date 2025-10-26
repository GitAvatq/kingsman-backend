"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response_1 = require("../../utils/response");
const prisma_1 = require("../../config/prisma");
class AppointmentController {
    async createAppointments(req, res) {
        try {
            const { date, barberId, servicesId } = req.body;
            const userId = String(req.user?.id);
            if (!date || !barberId || !servicesId) {
                return (0, response_1.notsuccess)(res, "Missing required fields!");
            }
            const appointment = await prisma_1.prisma.appointment.create({
                data: { date: new Date(date), barberId, servicesId, userId },
                include: { service: true, barber: true },
            });
            return (0, response_1.success)(res, appointment);
        }
        catch (error) {
            return (0, response_1.notsuccess)(res, error.message);
        }
    }
}
const appointmentController = new AppointmentController();
exports.default = appointmentController;
//# sourceMappingURL=appointment.controller.js.map