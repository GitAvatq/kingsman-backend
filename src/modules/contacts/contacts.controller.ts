import { Request, Response } from "express";
import { createDtoContact } from "./contacts.dto";
import { notsuccess, success } from "../../utils/response";
import axios from "axios";

export class ContactsController {
  async processContactMessages(req: Request, res: Response) {
    try {
      const { email, username, city } = req.body;

      const validation = createDtoContact.safeParse(req.body);
      if (!validation.success)
        return notsuccess(
          res,
          validation.error.issues.map((el) => el.message).join(" ")
        );

      const message = `
      New Application! 
      Name: ${username} 
      Email: ${email} 
      City: ${city}
        `;

      await axios.post(
        `https://api.telegram.org/bot${process.env.TG_BOT_TOKEN}/sendMessage`,
        {
          chat_id: process.env.TG_CHAT_ID,
          text: message,
        }
      );
      success(res, null, "Sent to Telegramm!");
    } catch (error: any) {
      return notsuccess(res, error.message);
    }
  }
}
