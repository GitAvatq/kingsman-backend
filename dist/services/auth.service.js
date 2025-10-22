"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareCredentials = exports.generateToken = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secret = process.env.SECRET_TOKEN;
if (!secret) {
    throw new Error("SECRET_TOKEN is not defined!");
}
const generateToken = (userId, userEmail) => {
    return jsonwebtoken_1.default.sign({ id: userId, email: userEmail }, secret, {
        expiresIn: "2d",
    });
};
exports.generateToken = generateToken;
const compareCredentials = async (userPassword, user) => {
    return await bcrypt_1.default.compare(userPassword, user.password);
};
exports.compareCredentials = compareCredentials;
//# sourceMappingURL=auth.service.js.map