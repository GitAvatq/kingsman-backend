"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const details_controller_1 = require("./details.controller");
const route = (0, express_1.Router)();
const detailsController = new details_controller_1.DetailsController();
route.get("/:id", detailsController.getDetails);
exports.default = route;
//# sourceMappingURL=details.route.js.map