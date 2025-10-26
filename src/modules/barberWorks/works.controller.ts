import { Request, Response } from "express";
import { notsuccess, success } from "../../utils/response";
import { prisma } from "../../config/prisma";

class WorkController {
  async getWorks(req: Request, res: Response) {
    try {
      const { picture_hair, name_hair, barberId } = req.body;

      if (!picture_hair || !name_hair) {
        notsuccess(res, "Invalid credentials");
      }

      const newOne = await prisma.works.create({
        data: { name_hair, picture_hair, barberId },
      });

      success(res, newOne, "Success created");
    } catch (error: any) {
      notsuccess(res, error.message);
    }
  }
  async removeWorks(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const deleted = await prisma.works.findFirst({
        where: { id: Number(id) },
      });

      if (!deleted) {
        return notsuccess(res, "Not found");
      }

      return success(res, deleted, "Successfully removed");
    } catch (error: any) {
      notsuccess(res, error.message);
    }
  }

  async editWorks(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { picture_hair, name_hair } = req.body;

      const workId = Number(id);
      if (isNaN(workId)) return notsuccess(res, "Invalid ID");
      const existing = await prisma.works.findUnique({
        where: { id: workId },
      });

      if (!existing) return notsuccess(res, "Not found");

      const updated = await prisma.works.update({
        where: { id: workId },
        data: {
          picture_hair,
          name_hair,
        },
      });

      return success(res, updated, "Successfully updated");
    } catch (error: any) {
      return notsuccess(res, error.message);
    }
  }
}
const workController = new WorkController();
export default workController;
