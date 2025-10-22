"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blog_controller_1 = require("./blog.controller");
const router = (0, express_1.Router)();
const blogController = new blog_controller_1.BlogController();
router.get("/", blogController.getAll);
router.post("/createBlog", blogController.create);
router.put("/:id", blogController.update);
router.delete("/:id", blogController.delete);
exports.default = router;
//# sourceMappingURL=blog.route.js.map