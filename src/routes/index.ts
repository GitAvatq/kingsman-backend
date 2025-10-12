import { Router } from "express";
import servicesRoute from "../modules/services/services.route";
import mastersRoute from "../modules/masters/masters.route";
import rewievsRoute from "../modules/rewievs/rewievs.route";
import blogRoute from "../modules/blog/blog.route";

const router = Router();

router.use("/services", servicesRoute);
router.use("/masters", mastersRoute);
router.use("/rewievs", rewievsRoute);
router.use("/blog", blogRoute);

export default router;
