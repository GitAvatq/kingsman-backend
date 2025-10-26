import { NextFunction, Request, Response } from "express";
import { notsuccess } from "../utils/response";
import jwt from "jsonwebtoken";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const headerAuth = req.headers.authorization;

  if (!headerAuth) {
    return notsuccess(res, "Unauthorized", 401);
  }
  const token = headerAuth?.split(" ")[1] as string;
  try {
    const decoded = jwt.verify(token, process.env.SECRET_TOKEN!) as {
      id: string;
      email: string;
      name: string;
      password: string;
    };
    req.user = decoded;
    next();
  } catch (error: any) {
    notsuccess(res, error.message);
  }
};
