import { Router } from "express";
import { BlogController } from "./blog.controller";

const router = Router();

const blogController = new BlogController();

router.get("/", blogController.getAll);
router.post("/createBlog", blogController.create);
router.put("/:id", blogController.update);
router.delete("/:id", blogController.delete);

export default router;
