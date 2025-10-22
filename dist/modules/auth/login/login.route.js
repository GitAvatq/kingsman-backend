"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_controller_1 = require("./login.controller");
const router = (0, express_1.Router)();
const loginController = new login_controller_1.LoginController();
router.post("/", loginController.loginUser);
exports.default = router;
//# sourceMappingURL=login.route.js.map