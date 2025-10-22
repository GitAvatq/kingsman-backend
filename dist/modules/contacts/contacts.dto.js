"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDtoContact = void 0;
const zod_1 = __importDefault(require("zod"));
exports.createDtoContact = zod_1.default.object({
    username: zod_1.default
        .string()
        .min(3, "Name must have 3 at least letters!")
        .max(20, "Name cant be more than 20"),
    email: zod_1.default.string().email("Invalid email!"),
    city: zod_1.default
        .string()
        .min(1, "City is required!")
        .max(25, "Limit of characters reached!"),
});
//# sourceMappingURL=contacts.dto.js.map