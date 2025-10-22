import { Request, Response } from "express";
declare class WorkController {
    getWorks(req: Request, res: Response): Promise<void>;
    removeWorks(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    editWorks(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
declare const workController: WorkController;
export default workController;
//# sourceMappingURL=works.controller.d.ts.map