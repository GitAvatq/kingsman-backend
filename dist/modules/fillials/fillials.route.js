"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fillials_controller_1 = require("./fillials.controller");
const router = (0, express_1.Router)();
const controller = new fillials_controller_1.FillialsController();
router.get("/", controller.getAll);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);
router.get("/:id", controller.getById);
router.get("/search", controller.searchByCountry);
exports.default = router;
//# sourceMappingURL=fillials.route.js.map