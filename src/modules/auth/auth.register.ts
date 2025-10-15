import { Request, Response } from "express";
import { notsuccess, success } from "../../utils/response";
import { createDtoAuth } from "./auth.dto";
import { prisma } from "../../config/prisma";
import bcrypt from "bcrypt";
import { generateToken } from "../../services/auth.service";

export class RegisterController {
  async registerUser(req: Request, res: Response) {
    try {
      const validation = createDtoAuth.safeParse(req.body);
      if (!validation.success) {
        return notsuccess(
          res,
          validation.error.issues.map((i) => i.message).join(" ")
        );
      }
      const { email, name, password } = validation.data;

      const existing = await prisma.user.findUnique({
        where: { email },
      });

      if (existing) return notsuccess(res, "This user is already exists!", 409);

      const passwordHash = await bcrypt.hash(password, 10);
      const user = await prisma.user.create({
        data: { name, email, password: passwordHash },
      });

      const token = generateToken(user.id, user.email);

      success(
        res,
        { id: user.id, name: user.name, email: user.email },
        "Success Registration",
        201,
        true,
        token
      );
    } catch (error: any) {
      return notsuccess(res, error.message);
    }
  }
}
