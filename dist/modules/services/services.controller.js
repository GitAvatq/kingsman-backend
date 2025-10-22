"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesController = void 0;
const response_1 = require("../../utils/response");
const prisma_1 = require("../../config/prisma");
const seed_1 = require("./seed");
class ServicesController {
    async services(req, res) {
        try {
            const length = await prisma_1.prisma.services.count();
            if (length === 0) {
                await prisma_1.prisma.services.createMany({
                    data: seed_1.servicesSeed,
                    skipDuplicates: true,
                });
            }
            const services = await prisma_1.prisma.services.findMany();
            return (0, response_1.success)(res, services);
        }
        catch (error) {
            return (0, response_1.notsuccess)(res, error.message);
        }
    }
}
exports.ServicesController = ServicesController;
//# sourceMappingURL=services.controller.js.map