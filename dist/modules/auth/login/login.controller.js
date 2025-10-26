"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const response_1 = require("../../../utils/response");
const login_dto_1 = require("./login.dto");
const prisma_1 = require("../../../config/prisma");
const auth_service_1 = require("../../../services/auth.service");
class LoginController {
    async loginUser(req, res) {
        try {
            const validation = login_dto_1.createDtoLogin.safeParse(req.body);
            if (!validation.success) {
                return (0, response_1.notsuccess)(res, validation.error.issues.map((v) => v.message).join(" "), 400);
            }
            const { email, password } = validation.data;
            const existingUser = await prisma_1.prisma.user.findUnique({
                where: { email },
            });
            if (!existingUser) {
                return (0, response_1.notsuccess)(res, "Invalid credentials");
            }
            const doesMatch = await (0, auth_service_1.compareCredentials)(password, existingUser);
            if (!doesMatch) {
                return (0, response_1.notsuccess)(res, "Invalid credentials");
            }
            const token = (0, auth_service_1.generateToken)(existingUser.id, existingUser.email);
            (0, response_1.success)(res, {
                id: existingUser.id,
                email: existingUser.email,
                name: existingUser.name,
                password: existingUser.password,
            }, "Success login", 200, true, token);
        }
        catch (error) {
            return (0, response_1.notsuccess)(res, error.message);
        }
    }
}
exports.LoginController = LoginController;
//# sourceMappingURL=login.controller.js.map