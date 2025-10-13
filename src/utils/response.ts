import { Request, Response } from "express";
import { ApiResponse, ApiResponseNo } from "./response.types";

export const success = <T>(
  res: Response,
  data: T,
  message = "OK",
  statusCode = 200,
  oke = true
) => {
  const response: ApiResponse<T> = {
    ok: oke,
    success: true,
    status_code: statusCode,
    message,
    data,
  };
  return res.status(statusCode).json(response);
};

export const notsuccess = (
  res: Response,
  message?: string,
  statusCode = 500,
  oke = false
) => {
  const response: ApiResponseNo = {
    ok: oke,
    success: false,
    status_code: statusCode,
    message: message || "Internal Server Error",
  };
  return res.status(statusCode).json(response);
};
