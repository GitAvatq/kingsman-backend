"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDtoAuth = void 0;
const zod_1 = __importDefault(require("zod"));
exports.createDtoAuth = zod_1.default.object({
    name: zod_1.default.string().min(4, "Name must have at least 4 letters"),
    email: zod_1.default.string().email("Invalid email"),
    password: zod_1.default
        .string()
        .min(5, "Password must have at least 5 characters")
        .max(10, "Password must be less than 10"),
});
//# sourceMappingURL=auth.dto.js.map