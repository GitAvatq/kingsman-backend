"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contacts_controller_1 = require("./contacts.controller");
const route = (0, express_1.Router)();
const contactsController = new contacts_controller_1.ContactsController();
route.post("/", contactsController.processContactMessages);
exports.default = route;
//# sourceMappingURL=contacts.route.js.map