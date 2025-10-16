import { Request, Response } from "express";
import { notsuccess, success } from "../../utils/response";
import { prisma } from "../../config/prisma";
import { fillialsSeed } from "./seed";

export class FillialsController {
  getAll = async (req: Request, res: Response) => {
    try {
      const count = await prisma.fillials.count();

      if (count === 0) {
        await prisma.fillials.createMany({
          data: fillialsSeed,
        });
      }

      const fillal = await prisma.fillials.findMany();
      return success(res, fillal);
    } catch (error: any) {
      return notsuccess(res, error.message);
    }
  };

  create = async (req: Request, res: Response) => {
    const { country, city, address } = req.body;
    try {
      if (!country || !city || !address) {
        return notsuccess(res, "All fields are required");
      }

      const newFillial = await prisma.fillials.create({
        data: { country, city, address },
      });

      return success(res, newFillial);
    } catch (error: any) {
      return notsuccess(res, error.message);
    }
  };

  update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { country, city, address } = req.body;
    try {
      const fillial = await prisma.fillials.update({
        where: { id: Number(id) },
        data: { country, city, address },
      });
      return success(res, fillial, "Fillial updated!");
    } catch (error: any) {
      notsuccess(res, error.message);
    }
  };

  delete = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      await prisma.fillials.delete({
        where: { id: Number(id) },
      });
      success(res, null, "Fillial deleted");
    } catch (error: any) {
      notsuccess(res, error.message);
    }
  };

  getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const fillial = await prisma.fillials.findUnique({
        where: { id: Number(id) },
        include: { barbers: true },
      });

      if (!fillial) {
        return notsuccess(res, "Fillial not found");
      }

      return success(res, fillial);
    } catch (error: any) {
      return notsuccess(res, error.message);
    }
  };

  searchByCountry = async (req: Request, res: Response) => {
    const { country } = req.query;
    try {
      const result = await prisma.fillials.findMany({
        where: {
          country: {
            contains: String(country || ""),
            mode: "insensitive",
          },
        },
      });
      return success(res, result);
    } catch (error: any) {
      notsuccess(res, error.message);
    }
  };
}
