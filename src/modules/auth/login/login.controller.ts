import { Request, Response } from "express";
import { notsuccess, success } from "../../../utils/response";
import { createDtoLogin } from "./login.dto";
import { prisma } from "../../../config/prisma";
import {
  compareCredentials,
  generateToken,
} from "../../../services/auth.service";

export class LoginController {
  async loginUser(req: Request, res: Response) {
    try {
      const validation = createDtoLogin.safeParse(req.body);
      if (!validation.success) {
        return notsuccess(
          res,
          validation.error.issues.map((v) => v.message).join(" "),
          400
        );
      }
      const { email, password } = validation.data;
      const existingUser = await prisma.user.findUnique({
        where: { email },
      });
      if (!existingUser) {
        return notsuccess(res, "Invalid credentials");
      }

      const doesMatch = await compareCredentials(password, existingUser);
      if (!doesMatch) {
        return notsuccess(res, "Invalid credentials");
      }

      const token = generateToken(existingUser.id, existingUser.email);

      success(
        res,
        {
          id: existingUser.id,
          email: existingUser.email,
          name: existingUser.name,
          password: existingUser.password,
        },
        "Success login",
        200,
        true,
        token
      );
    } catch (error: any) {
      return notsuccess(res, error.message);
    }
  }
}
