"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const response_1 = require("../utils/response");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authMiddleware = (req, res, next) => {
    const headerAuth = req.headers.authorization;
    if (!headerAuth) {
        return (0, response_1.notsuccess)(res, "Unauthorized", 401);
    }
    const token = headerAuth?.split(" ")[1];
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.SECRET_TOKEN);
        req.user = decoded;
        next();
    }
    catch (error) {
        (0, response_1.notsuccess)(res, error.message);
    }
};
exports.authMiddleware = authMiddleware;
//# sourceMappingURL=auth.middleware.js.map