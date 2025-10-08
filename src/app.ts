import express, { Request, Response } from "express";
const buildServer = () => {
  const app = express();
  app.use(express.json());

  app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
      success: true,
      status: 200,
      message: "First Success!",
    });
  });

  return app;
};

export default buildServer;
