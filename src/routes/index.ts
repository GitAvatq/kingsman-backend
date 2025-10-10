import { Router } from "express";
import servicesRoute from "../modules/services/services.route";
import mastersRoute from "../modules/masters/masters.route";

const router = Router();

router.use("/services", servicesRoute);
router.use("/masters", mastersRoute);

export default router;
