import { Router } from "express";
import servicesRoute from "../modules/services/services.route";
import mastersRoute from "../modules/masters/masters.route";
import rewievsRoute from "../modules/rewievs/rewievs.route";
import blogRoute from "../modules/blog/blog.route";
import barberRoute from "../modules/barber/barber.route";
import fillialsRoute from "../modules/fillials/fillials.route";
import registerRoute from "../modules/auth/register/auth.route";
import loginRoute from "../modules/auth/login/login.route";
import contactRoute from "../modules/contacts/contacts.route";

const router = Router();

router.use("/services", servicesRoute);
router.use("/masters", mastersRoute);
router.use("/rewievs", rewievsRoute);
router.use("/blog", blogRoute);
router.use("/barber", barberRoute);
router.use("/fillials", fillialsRoute);
router.use("/register", registerRoute);
router.use("/login", loginRoute);
router.use("/contact", contactRoute);

export default router;
