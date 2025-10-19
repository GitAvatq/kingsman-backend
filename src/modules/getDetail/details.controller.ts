import { Request, Response } from "express";
import { prisma } from "../../config/prisma";
import { notsuccess, success } from "../../utils/response";
import { number } from "zod";

export class DetailsController {
  async getDetails(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const details = await prisma.barber.findUnique({
        where: { id: Number(id) },
        include: {
          works: true,
        },
      });

      if (!details) {
        return notsuccess(res, "Not found");
      }

      success(res, details, "Success foundation");
    } catch (error: any) {
      return notsuccess(res, error.message);
    }
  }
}
