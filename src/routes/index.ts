import { Router } from "express";
import servicesRoute from "../modules/services/services.route";

const router = Router();

router.use("/servicesList", servicesRoute);

export default router;
