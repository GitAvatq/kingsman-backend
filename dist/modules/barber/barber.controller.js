"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarberController = void 0;
const prisma_1 = require("../../config/prisma");
const response_1 = require("../../utils/response");
const seed_1 = require("./seed");
class BarberController {
    getAll = async (req, res) => {
        try {
            await prisma_1.prisma.barber.createMany({
                data: seed_1.barberSeed,
                skipDuplicates: true,
            });
            const barber = await prisma_1.prisma.barber.findMany();
            return (0, response_1.success)(res, barber);
        }
        catch (error) {
            return (0, response_1.notsuccess)(res, error.message);
        }
    };
    create = async (req, res) => {
        const { image, name, experience, status, earned, rating, service, location, fillialId, } = req.body;
        try {
            const barber = await prisma_1.prisma.barber.create({
                data: {
                    image,
                    name,
                    experience: Number(experience),
                    status,
                    earned: Number(earned),
                    rating: Number(rating),
                    service: Number(service),
                    location,
                    fillialId: Number(fillialId),
                },
            });
            return (0, response_1.success)(res, barber, "Barber created");
        }
        catch (error) {
            return (0, response_1.notsuccess)(res, error.message);
        }
    };
    update = async (req, res) => {
        const { id } = req.params;
        const { image, name, experience, status, earned, rating, service, location, } = req.body;
        try {
            const barber = await prisma_1.prisma.barber.update({
                where: { id: Number(id) },
                data: {
                    image,
                    name,
                    experience,
                    status,
                    earned,
                    rating,
                    service,
                    location,
                },
            });
            return (0, response_1.success)(res, barber, "Barber updated");
        }
        catch (error) {
            return (0, response_1.notsuccess)(res, error.message);
        }
    };
    delete = async (req, res) => {
        const { id } = req.params;
        try {
            await prisma_1.prisma.barber.delete({
                where: { id: Number(id) },
            });
            return (0, response_1.success)(res, null, "Barber deleted!");
        }
        catch (error) {
            return (0, response_1.notsuccess)(res, error.message);
        }
    };
}
exports.BarberController = BarberController;
//# sourceMappingURL=barber.controller.js.map