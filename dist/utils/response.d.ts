import { Response } from "express";
export declare const success: <T>(res: Response, data: T, message?: string, statusCode?: number, oke?: boolean, token?: string | undefined) => Response<any, Record<string, any>>;
export declare const notsuccess: (res: Response, message?: string, statusCode?: number, oke?: boolean) => Response<any, Record<string, any>>;
//# sourceMappingURL=response.d.ts.map