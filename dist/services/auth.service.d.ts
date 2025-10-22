import { IUser } from "./auth.interface";
export declare const generateToken: (userId: string, userEmail: string) => string;
export declare const compareCredentials: (userPassword: string, user: IUser) => Promise<boolean>;
//# sourceMappingURL=auth.service.d.ts.map