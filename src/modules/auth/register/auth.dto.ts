import z from "zod";

export const createDtoAuth = z.object({
  name: z.string().min(4, "Name must have at least 4 letters"),
  email: z.string().email("Invalid email"),
  password: z
    .string()
    .min(5, "Password must have at least 5 characters")
    .max(10, "Password must be less than 10"),
});
