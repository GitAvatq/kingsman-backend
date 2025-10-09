import { Request, Response } from "express";
import { ApiResponse } from "./response.types";

export const success = <T>(
  res: Response,
  data: T,
  message = "OK",
  statusCode = 200
) => {
  const response: ApiResponse<T> = { success: true, message, data };
  return res.status(statusCode).json(response);
};

export const notsuccess = (
  res: Response,
  message = "Bad request",
  statusCode = 500
) => {
  const response = { success: false, message };
  return res.status(statusCode).json(response);
};
