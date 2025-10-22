import { Request, Response } from "express";
declare class AppointmentController {
    createAppointments(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
declare const appointmentController: AppointmentController;
export default appointmentController;
//# sourceMappingURL=appointment.controller.d.ts.map