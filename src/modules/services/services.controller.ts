import { Request, Response } from "express";
import { IServices } from "./services.types";
import { success } from "../../utils/response";

export class ServicesController {
  services(req: Request, res: Response) {
    const servicesData: IServices[] = [
      {
        id: 1,
        name: "Haircut",
        price: 20,
      },
      {
        id: 2,
        name: "Shavings",
        price: 13,
      },
      {
        id: 3,
        name: "Bio-curling of hair",
        price: 20,
      },
      {
        id: 4,
        name: "Shavings",
        price: 20,
      },
      {
        id: 5,
        name: "Trimming",
        price: 20,
      },
      {
        id: 6,
        name: "Facial",
        price: 20,
      },
      {
        id: 7,
        name: "Haircut",
        price: 20,
      },
      {
        id: 9,
        name: "Shavings",
        price: 20,
      },
      {
        id: 11,
        name: "Trimming",
        price: 20,
      },
      {
        id: 14,
        name: "Taper fade",
        price: 20,
      },
    ];
    // res.status(200).json({ services: servicesData });
    return success(res, servicesData);
  }
}
