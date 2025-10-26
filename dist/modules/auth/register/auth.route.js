"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("./auth.controller");
const route = (0, express_1.Router)();
const registerController = new auth_controller_1.RegisterController();
route.post("/", registerController.registerUser);
exports.default = route;
//# sourceMappingURL=auth.route.js.map