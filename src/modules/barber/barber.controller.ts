import { Request, Response } from "express";
import { prisma } from "../../config/prisma";
import { notsuccess, success } from "../../utils/response";
import { barberSeed } from "./seed";

export class BarberController {
  getAll = async (req: Request, res: Response) => {
    try {
      await prisma.barber.createMany({
        data: barberSeed,
        skipDuplicates: true,
      });
      const barber = await prisma.barber.findMany();
      return success(res, barber);
    } catch (error: any) {
      return notsuccess(res, error.message);
    }
  };

  create = async (req: Request, res: Response) => {
    const {
      image,
      name,
      experience,
      status,
      earned,
      rating,
      service,
      location,
      fillialId,
    } = req.body;

    try {
      const barber = await prisma.barber.create({
        data: {
          image,
          name,
          experience: Number(experience),
          status,
          earned: Number(earned),
          rating: Number(rating),
          service: Number(service),
          location,
          fillialId: Number(fillialId), 
        },
      });

      return success(res, barber, "Barber created");
    } catch (error: any) {
      return notsuccess(res, error.message);
    }
  };

  update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const {
      image,
      name,
      experience,
      status,
      earned,
      rating,
      service,
      location,
    } = req.body;

    try {
      const barber = await prisma.barber.update({
        where: { id: Number(id) },
        data: {
          image,
          name,
          experience,
          status,
          earned,
          rating,
          service,
          location,
        },
      });

      return success(res, barber, "Barber updated");
    } catch (error: any) {
      return notsuccess(res, error.message);
    }
  };

  delete = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      await prisma.barber.delete({
        where: { id: Number(id) },
      });
      return success(res, null, "Barber deleted!");
    } catch (error: any) {
      return notsuccess(res, error.message);
    }
  };
}
