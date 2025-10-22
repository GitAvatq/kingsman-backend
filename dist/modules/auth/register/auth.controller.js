"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterController = void 0;
const response_1 = require("../../../utils/response");
const auth_dto_1 = require("./auth.dto");
const prisma_1 = require("../../../config/prisma");
const bcrypt_1 = __importDefault(require("bcrypt"));
const auth_service_1 = require("../../../services/auth.service");
class RegisterController {
    async registerUser(req, res) {
        try {
            const validation = auth_dto_1.createDtoAuth.safeParse(req.body);
            if (!validation.success) {
                return (0, response_1.notsuccess)(res, validation.error.issues.map((i) => i.message).join(" "), 400);
            }
            const { email, name, password } = validation.data;
            const existing = await prisma_1.prisma.user.findUnique({
                where: { email },
            });
            if (existing)
                return (0, response_1.notsuccess)(res, "This user is already exists!", 409);
            const passwordHash = await bcrypt_1.default.hash(password, 10);
            const user = await prisma_1.prisma.user.create({
                data: { name, email, password: passwordHash },
            });
            const token = (0, auth_service_1.generateToken)(user.id, user.email);
            (0, response_1.success)(res, { id: user.id, name: user.name, email: user.email }, "Success Registration", 201, true, token);
        }
        catch (error) {
            return (0, response_1.notsuccess)(res, error.message);
        }
    }
}
exports.RegisterController = RegisterController;
//# sourceMappingURL=auth.controller.js.map