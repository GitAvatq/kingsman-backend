"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appointment_controller_1 = __importDefault(require("./appointment.controller"));
const route = (0, express_1.Router)();
route.post("/", appointment_controller_1.default.createAppointments);
route.get("/get", appointment_controller_1.default.createAppointments);
exports.default = route;
//# sourceMappingURL=appointment.route.js.map