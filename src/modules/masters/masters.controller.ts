import { Request, Response } from "express";
import { prisma } from "../../config/prisma";
import { masterSeed } from "./seed";
import { notsuccess, success } from "../../utils/response";

export class MastersController {
  getAll = async (req: Request, res: Response) => {
    try {
      const count = await prisma.master.count();
      if (count === 0) {
        await prisma.master.createMany({
          data: masterSeed,
          skipDuplicates: true,
        });
      }

      const masters = await prisma.master.findMany();
      return success(res, masters);
    } catch (error: any) {
      console.error("MastersController.getAll error:", error);
      return notsuccess(res, error.message);
    }
  };

  create = async (req: Request, res: Response) => {
    const { name, address, status, barberImg } = req.body;
    try {
      const master = await prisma.master.create({
        data: { name, address, status, barberImg },
      });
      return success(res, master, "Master created");
    } catch (error: any) {
      return notsuccess(res, error.message);
    }
  };

  update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, address, status, barberImg } = req.body;
    try {
      const master = await prisma.master.update({
        where: { id: Number(id) },
        data: { name, address, status, barberImg },
      });
      return success(res, master, "Master updated");
    } catch (error: any) {
      return notsuccess(res, error.message);
    }
  };

  delete = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      await prisma.master.delete({ where: { id: Number(id) } });
      return success(res, null, "Master deleted");
    } catch (error: any) {
      return notsuccess(res, error.message);
    }
  };
}
