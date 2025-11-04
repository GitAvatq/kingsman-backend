import { Request, Response } from "express";
import { prisma } from "../../config/prisma";
import { rewievsSeed } from "./seed";
import { notsuccess, success } from "../../utils/response";

export class RewievsController {
  getAll = async (req: Request, res: Response) => {
    try {
      const count = await prisma.rewievs.count();
      if (count === 0) {
        await prisma.rewievs.createMany({
          data: rewievsSeed,
          skipDuplicates: true,
        });
      }
      const rewiev = await prisma.rewievs.findMany();
      return success(res, rewiev);
    } catch (error: any) {
      return notsuccess(res, error.message);
    }
  };

  create = async (req: Request, res: Response) => {
    const { name, location, text, image } = req.body;
    try {
      const rewiev = await prisma.rewievs.create({
        data: { name, location, text, image },
      });

      return success(res, rewiev, "Rewiev created");
    } catch (error: any) {
      return notsuccess(res, error.message);
    }
  };

  update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, location, text, image } = req.body;

    try {
      const rewiev = await prisma.rewievs.update({
        where: { id: Number(id) },
        data: { name, text, location, image },
      });

      return success(res, rewiev, "Rewiev updated");
    } catch (error: any) {
      return notsuccess(res, error.message);
    }
  };

  delete = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      await prisma.rewievs.delete({
        where: { id: Number(id) },
      });
      return success(res, null, "Rewiev deleted!!!😡");
    } catch (error: any) {
      return notsuccess(res, error.message);
    }
  };
}
