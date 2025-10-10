export interface ApiResponseNo {
  success: boolean;
  message: string | undefined;
}

export interface ApiResponse<T> extends ApiResponseNo {
  data: T;
}
