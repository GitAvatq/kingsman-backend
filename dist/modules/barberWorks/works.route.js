"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const works_controller_1 = __importDefault(require("./works.controller"));
const route = (0, express_1.Router)();
route.get("/get", works_controller_1.default.getWorks);
route.get("/remove", works_controller_1.default.removeWorks);
route.get("/edit", works_controller_1.default.editWorks);
exports.default = route;
//# sourceMappingURL=works.route.js.map