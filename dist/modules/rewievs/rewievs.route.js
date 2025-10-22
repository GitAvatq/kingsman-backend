"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rewievs_controller_1 = require("./rewievs.controller");
const router = (0, express_1.Router)();
const RewievController = new rewievs_controller_1.RewievsController();
router.get("/", RewievController.getAll);
router.post("/", RewievController.create);
router.put("/:id", RewievController.update);
router.delete("/:id", RewievController.delete);
exports.default = router;
//# sourceMappingURL=rewievs.route.js.map