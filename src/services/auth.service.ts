import jwt from "jsonwebtoken";
const secret = process.env.SECRET_TOKEN;
if (!secret) {
  throw new Error("SECRET_TOKEN is not defined!");
}
export const generateToken = (userId: string, userEmail: string) => {
  return jwt.sign({ id: userId, email: userEmail }, secret, {
    expiresIn: "2d",
  });
};
