"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response_1 = require("../../utils/response");
const prisma_1 = require("../../config/prisma");
class WorkController {
    async getWorks(req, res) {
        try {
            const { picture_hair, name_hair, barberId } = req.body;
            if (!picture_hair || !name_hair) {
                (0, response_1.notsuccess)(res, "Invalid credentials");
            }
            const newOne = await prisma_1.prisma.works.create({
                data: { name_hair, picture_hair, barberId },
            });
            (0, response_1.success)(res, newOne, "Success created");
        }
        catch (error) {
            (0, response_1.notsuccess)(res, error.message);
        }
    }
    async removeWorks(req, res) {
        try {
            const { id } = req.params;
            const deleted = await prisma_1.prisma.works.findFirst({
                where: { id: Number(id) },
            });
            if (!deleted) {
                return (0, response_1.notsuccess)(res, "Not found");
            }
            return (0, response_1.success)(res, deleted, "Successfully removed");
        }
        catch (error) {
            (0, response_1.notsuccess)(res, error.message);
        }
    }
    async editWorks(req, res) {
        try {
            const { id } = req.params;
            const { picture_hair, name_hair } = req.body;
            const workId = Number(id);
            if (isNaN(workId))
                return (0, response_1.notsuccess)(res, "Invalid ID");
            const existing = await prisma_1.prisma.works.findUnique({
                where: { id: workId },
            });
            if (!existing)
                return (0, response_1.notsuccess)(res, "Not found");
            const updated = await prisma_1.prisma.works.update({
                where: { id: workId },
                data: {
                    picture_hair,
                    name_hair,
                },
            });
            return (0, response_1.success)(res, updated, "Successfully updated");
        }
        catch (error) {
            return (0, response_1.notsuccess)(res, error.message);
        }
    }
}
const workController = new WorkController();
exports.default = workController;
//# sourceMappingURL=works.controller.js.map