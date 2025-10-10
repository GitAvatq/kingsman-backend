import { Request, Response } from "express";
import { ApiResponse, ApiResponseNo } from "./response.types";

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
  message?: string,
  statusCode = 500
) => {
  const response: ApiResponseNo = {
    success: false,
    message: message || "Internal Server Error",
  };
  return res.status(statusCode).json(response);
};
