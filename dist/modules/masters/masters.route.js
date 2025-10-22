"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const masters_controller_1 = require("./masters.controller");
const router = (0, express_1.Router)();
const masterController = new masters_controller_1.MastersController();
router.get("/", masterController.getAll);
router.post("/", masterController.create);
router.put("/:id", masterController.update);
router.delete("/:id", masterController.delete);
exports.default = router;
//# sourceMappingURL=masters.route.js.map