"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MastersController = void 0;
const prisma_1 = require("../../config/prisma");
const seed_1 = require("./seed");
const response_1 = require("../../utils/response");
class MastersController {
    getAll = async (req, res) => {
        try {
            const count = await prisma_1.prisma.master.count();
            if (count === 0) {
                await prisma_1.prisma.master.createMany({
                    data: seed_1.masterSeed,
                    skipDuplicates: true,
                });
            }
            const masters = await prisma_1.prisma.master.findMany();
            return (0, response_1.success)(res, masters);
        }
        catch (error) {
            return (0, response_1.notsuccess)(res, error.message);
        }
    };
    create = async (req, res) => {
        const { name, address, status, barberImg } = req.body;
        try {
            const master = await prisma_1.prisma.master.create({
                data: { name, address, status, barberImg },
            });
            return (0, response_1.success)(res, master, "Master created");
        }
        catch (error) {
            return (0, response_1.notsuccess)(res, error.message);
        }
    };
    update = async (req, res) => {
        const { id } = req.params;
        const { name, address, status, barberImg } = req.body;
        try {
            const master = await prisma_1.prisma.master.update({
                where: { id: Number(id) },
                data: { name, address, status, barberImg },
            });
            return (0, response_1.success)(res, master, "Master updated");
        }
        catch (error) {
            return (0, response_1.notsuccess)(res, error.message);
        }
    };
    delete = async (req, res) => {
        const { id } = req.params;
        try {
            await prisma_1.prisma.master.delete({ where: { id: Number(id) } });
            (0, response_1.success)(res, null, "Master deleted");
        }
        catch (error) {
            return (0, response_1.notsuccess)(res, error.message);
        }
    };
}
exports.MastersController = MastersController;
//# sourceMappingURL=masters.controller.js.map