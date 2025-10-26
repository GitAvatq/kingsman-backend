"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailsController = void 0;
const prisma_1 = require("../../config/prisma");
const response_1 = require("../../utils/response");
class DetailsController {
    async getDetails(req, res) {
        try {
            const { id } = req.params;
            const details = await prisma_1.prisma.barber.findUnique({
                where: { id: Number(id) },
                include: {
                    works: true,
                },
            });
            if (!details) {
                return (0, response_1.notsuccess)(res, "Not found");
            }
            (0, response_1.success)(res, details, "Success foundation");
        }
        catch (error) {
            return (0, response_1.notsuccess)(res, error.message);
        }
    }
}
exports.DetailsController = DetailsController;
//# sourceMappingURL=details.controller.js.map