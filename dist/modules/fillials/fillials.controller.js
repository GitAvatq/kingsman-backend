"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FillialsController = void 0;
const response_1 = require("../../utils/response");
const prisma_1 = require("../../config/prisma");
const seed_1 = require("./seed");
class FillialsController {
    getAll = async (req, res) => {
        try {
            const count = await prisma_1.prisma.fillials.count();
            if (count === 0) {
                await prisma_1.prisma.fillials.createMany({
                    data: seed_1.fillialsSeed,
                });
            }
            const fillal = await prisma_1.prisma.fillials.findMany();
            return (0, response_1.success)(res, fillal);
        }
        catch (error) {
            return (0, response_1.notsuccess)(res, error.message);
        }
    };
    create = async (req, res) => {
        const { country, city, address } = req.body;
        try {
            if (!country || !city || !address) {
                return (0, response_1.notsuccess)(res, "All fields are required");
            }
            const newFillial = await prisma_1.prisma.fillials.create({
                data: { country, city, address },
            });
            return (0, response_1.success)(res, newFillial);
        }
        catch (error) {
            return (0, response_1.notsuccess)(res, error.message);
        }
    };
    update = async (req, res) => {
        const { id } = req.params;
        const { country, city, address } = req.body;
        try {
            const fillial = await prisma_1.prisma.fillials.update({
                where: { id: Number(id) },
                data: { country, city, address },
            });
            return (0, response_1.success)(res, fillial, "Fillial updated!");
        }
        catch (error) {
            (0, response_1.notsuccess)(res, error.message);
        }
    };
    delete = async (req, res) => {
        const { id } = req.params;
        try {
            await prisma_1.prisma.fillials.delete({
                where: { id: Number(id) },
            });
            (0, response_1.success)(res, null, "Fillial deleted");
        }
        catch (error) {
            (0, response_1.notsuccess)(res, error.message);
        }
    };
    getById = async (req, res) => {
        const { id } = req.params;
        try {
            const fillial = await prisma_1.prisma.fillials.findUnique({
                where: { id: Number(id) },
                include: { barbers: true },
            });
            if (!fillial) {
                return (0, response_1.notsuccess)(res, "Fillial not found");
            }
            return (0, response_1.success)(res, fillial);
        }
        catch (error) {
            return (0, response_1.notsuccess)(res, error.message);
        }
    };
    searchByCountry = async (req, res) => {
        const { country } = req.query;
        try {
            const result = await prisma_1.prisma.fillials.findMany({
                where: {
                    country: {
                        contains: String(country || ""),
                        mode: "insensitive",
                    },
                },
            });
            return (0, response_1.success)(res, result);
        }
        catch (error) {
            (0, response_1.notsuccess)(res, error.message);
        }
    };
}
exports.FillialsController = FillialsController;
//# sourceMappingURL=fillials.controller.js.map