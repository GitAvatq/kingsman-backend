import { Request, Response } from "express";
import { notsuccess, success } from "../../utils/response";
import { prisma } from "../../config/prisma";
import { servicesSeed } from "./seed";

export class ServicesController {
  async services(req: Request, res: Response) {
    try {
      await prisma.services.createMany({
        data: servicesSeed,
        skipDuplicates: true,
      });
      const services = await prisma.services.findMany();
      return success(res, services);
    } catch (error: any) {
      return notsuccess(res, error.message);
    }
  }
}
