import { Request, Response } from "express";
import { notsuccess, success } from "../../utils/response";
import { prisma } from "../../config/prisma";
import { servicesSeed } from "./seed";

export class ServicesController {
  async services(req: Request, res: Response) {
    try {
      const length = await prisma.services.count();
      if (length === 0) {
        await prisma.services.createMany({
          data: servicesSeed,
          skipDuplicates: true,
        });
      }
      const services = await prisma.services.findMany();
      return success(res, services);
    } catch (error: any) {
      return notsuccess(res, error.message);
    }
  }
  async createService(req: Request, res: Response) {
    try {
      const { name, price } = req.body;

      if (!name || !price) {
        return notsuccess(res, "Missing required fields");
      }

      const newService = await prisma.services.create({
        data: {
          name,
          price,
        },
      });

      return success(res, newService);
    } catch (error: any) {
      return notsuccess(res, error.message);
    }
  }
}
