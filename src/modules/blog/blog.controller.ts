import { Request, Response } from "express";
import { prisma } from "../../config/prisma";
import { notsuccess, success } from "../../utils/response";
import { blogSeed } from "./seed";

export class BlogController {
  getAll = async (req: Request, res: Response) => {
    try {
      const count = await prisma.blog.count();
      if (count === 0) {
        await prisma.blog.createMany({
          data: blogSeed,
          skipDuplicates: true,
        });
      }
      const blog = await prisma.blog.findMany();
      return success(res, blog);
    } catch (error: any) {
      return notsuccess(res, error.message);
    }
  };
  create = async (req: Request, res: Response) => {
    const { image, name, description } = req.body;
    try {
      const blog = await prisma.blog.create({
        data: { image, name, description },
      });
      return success(res, blog, "Blog created");
    } catch (error: any) {
      return notsuccess(res, error.message);
    }
  };
  update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { image, name, description } = req.body;

    try {
      const blog = await prisma.blog.update({
        where: { id: Number(id) },
        data: { image, name, description },
      });

      return success(res, blog, "Blog updated");
    } catch (error: any) {
      return notsuccess(res, error.message);
    }
  };
  delete = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      await prisma.blog.delete({
        where: { id: Number(id) },
      });
      return success(res, null, "Blog deleted!!!😡");
    } catch (error: any) {
      return notsuccess(res, error.message);
    }
  };
}
