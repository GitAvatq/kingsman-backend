export interface ApiResponseNo {
  ok: boolean;
  success: boolean;
  status_code: number;
  message: string | undefined;
}

export interface ApiResponse<T> extends ApiResponseNo {
  data: T;
  token: string | undefined;
}
