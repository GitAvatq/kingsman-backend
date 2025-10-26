"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogController = void 0;
const prisma_1 = require("../../config/prisma");
const response_1 = require("../../utils/response");
const seed_1 = require("./seed");
class BlogController {
    getAll = async (req, res) => {
        try {
            await prisma_1.prisma.blog.createMany({
                data: seed_1.blogSeed,
                skipDuplicates: true,
            });
            const blog = await prisma_1.prisma.blog.findMany();
            return (0, response_1.success)(res, blog);
        }
        catch (error) {
            return (0, response_1.notsuccess)(res, error.message);
        }
    };
    create = async (req, res) => {
        const { image, name, description } = req.body;
        try {
            const blog = await prisma_1.prisma.blog.create({
                data: { image, name, description },
            });
            return (0, response_1.success)(res, blog, "Blog created");
        }
        catch (error) {
            return (0, response_1.notsuccess)(res, error.message);
        }
    };
    update = async (req, res) => {
        const { id } = req.params;
        const { image, name, description } = req.body;
        try {
            const blog = await prisma_1.prisma.blog.update({
                where: { id: Number(id) },
                data: { image, name, description },
            });
            return (0, response_1.success)(res, blog, "Blog updated");
        }
        catch (error) {
            return (0, response_1.notsuccess)(res, error.message);
        }
    };
    delete = async (req, res) => {
        const { id } = req.params;
        try {
            await prisma_1.prisma.blog.delete({
                where: { id: Number(id) },
            });
            return (0, response_1.success)(res, null, "Blog deleted!!!😡");
        }
        catch (error) {
            return (0, response_1.notsuccess)(res, error.message);
        }
    };
}
exports.BlogController = BlogController;
//# sourceMappingURL=blog.controller.js.map