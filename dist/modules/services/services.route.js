"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const services_controller_1 = require("./services.controller");
const router = (0, express_1.Router)();
const barbershopServices = new services_controller_1.ServicesController();
router.get("/", barbershopServices.services);
exports.default = router;
//# sourceMappingURL=services.route.js.map