import { Router } from "express";
import servicesRoute from "../modules/services/services.route";
import mastersRoute from "../modules/masters/masters.route";
import rewievsRoute from "../modules/rewievs/rewievs.route";
import contactRoute from "../modules/contacts/contacts.route";
import registerRoute from "../modules/auth/auth.route";

const router = Router();

router.use("/services", servicesRoute);
router.use("/masters", mastersRoute);
router.use("/rewievs", rewievsRoute);
router.use("/tocontact", contactRoute);
router.use("/register", registerRoute);

export default router;
