import z from "zod";

export const createDtoContact = z.object({
  username: z
    .string()
    .min(3, "Name must have 3 at least letters!")
    .max(20, "Name cant be more than 20"),
  email: z.string().email("Invalid email!"),
  city: z
    .string()
    .min(1, "City is required!")
    .max(25, "Limit of characters reached!"),
});
