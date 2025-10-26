"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const barber_controller_1 = require("./barber.controller");
const router = (0, express_1.Router)();
const barberControllor = new barber_controller_1.BarberController();
router.get("/", barberControllor.getAll);
router.post("/createBarber", barberControllor.create);
router.put("/:id", barberControllor.update);
router.delete("/:id", barberControllor.delete);
exports.default = router;
//# sourceMappingURL=barber.route.js.map