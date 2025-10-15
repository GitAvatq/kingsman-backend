import express, { Request, Response } from "express";
import router from "./routes";
import { corsConfig } from "./config/cors";
import { helmetConfig } from "./config/helmet";
const buildServer = () => {
  const app = express();
  app.use(express.json());
  app.use(corsConfig);
  app.use(helmetConfig);
  app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
      success: true,
      status: 200,
      message: "First Success!",
    });
  });

  app.use("/api", router);
  return app;
};

export default buildServer;
