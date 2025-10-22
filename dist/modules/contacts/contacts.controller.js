"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactsController = void 0;
const contacts_dto_1 = require("./contacts.dto");
const response_1 = require("../../utils/response");
const axios_1 = __importDefault(require("axios"));
class ContactsController {
    async processContactMessages(req, res) {
        try {
            const { email, username, city } = req.body;
            const validation = contacts_dto_1.createDtoContact.safeParse(req.body);
            if (!validation.success)
                return (0, response_1.notsuccess)(res, validation.error.issues.map((el) => el.message).join(" "));
            const message = `
      New Application! 
      Name: ${username} 
      Email: ${email} 
      City: ${city}
        `;
            await axios_1.default.post(`https://api.telegram.org/bot${process.env.TG_BOT_TOKEN}/sendMessage`, {
                chat_id: process.env.TG_CHAT_ID,
                text: message,
            });
            (0, response_1.success)(res, null, "Sent to Telegramm!");
        }
        catch (error) {
            return (0, response_1.notsuccess)(res, error.message);
        }
    }
}
exports.ContactsController = ContactsController;
//# sourceMappingURL=contacts.controller.js.map