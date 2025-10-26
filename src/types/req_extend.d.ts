import "express";
import { Request } from "express";

declare module "express" {
  interface Request {
    user?: {
      id: string;
      password: string;
      name: string;
      email: string;
    };
  }
}
