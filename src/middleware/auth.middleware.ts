import { NextFunction, Request, Response } from "express";
import { notsuccess } from "../utils/response";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const headerAuth = req.headers.authorization;
  if (!headerAuth) {
    return notsuccess(res, "Unauthorized", 401);
  }

  next();
};
