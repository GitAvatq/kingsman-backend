import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { IUser } from "./auth.interface";

const secret = process.env.SECRET_TOKEN;
if (!secret) {
  throw new Error("SECRET_TOKEN is not defined!");
}

export const generateToken = (userId: string, userEmail: string) => {
  return jwt.sign({ id: userId, email: userEmail }, secret, {
    expiresIn: "2d",
  });
};

export const compareCredentials = async (userPassword: string, user: IUser) => {
  return await bcrypt.compare(userPassword, user.password);
};
