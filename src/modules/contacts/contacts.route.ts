import { Router } from "express";
import { ContactsController } from "./contacts.controller";

const route = Router();
const contactsController = new ContactsController();

route.post("/", contactsController.processContactMessages);

export default route;
