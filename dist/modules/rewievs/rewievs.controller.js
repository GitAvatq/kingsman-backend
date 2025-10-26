"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RewievsController = void 0;
const prisma_1 = require("../../config/prisma");
const seed_1 = require("./seed");
const response_1 = require("../../utils/response");
class RewievsController {
    getAll = async (req, res) => {
        try {
            await prisma_1.prisma.rewievs.createMany({
                data: seed_1.rewievsSeed,
                skipDuplicates: true,
            });
            const rewiev = await prisma_1.prisma.rewievs.findMany();
            return (0, response_1.success)(res, rewiev);
        }
        catch (error) {
            return (0, response_1.notsuccess)(res, error.message);
        }
    };
    create = async (req, res) => {
        const { name, location, text, image } = req.body;
        try {
            const rewiev = await prisma_1.prisma.rewievs.create({
                data: { name, location, text, image },
            });
            return (0, response_1.success)(res, rewiev, "Rewiev created");
        }
        catch (error) {
            return (0, response_1.notsuccess)(res, error.message);
        }
    };
    update = async (req, res) => {
        const { id } = req.params;
        const { name, location, text, image } = req.body;
        try {
            const rewiev = await prisma_1.prisma.rewievs.update({
                where: { id: Number(id) },
                data: { name, text, location, image },
            });
            return (0, response_1.success)(res, rewiev, "Rewiev updated");
        }
        catch (error) {
            return (0, response_1.notsuccess)(res, error.message);
        }
    };
    delete = async (req, res) => {
        const { id } = req.params;
        try {
            await prisma_1.prisma.rewievs.delete({
                where: { id: Number(id) },
            });
            return (0, response_1.success)(res, null, "Rewiev deleted!!!😡");
        }
        catch (error) {
            return (0, response_1.notsuccess)(res, error.message);
        }
    };
}
exports.RewievsController = RewievsController;
//# sourceMappingURL=rewievs.controller.js.map