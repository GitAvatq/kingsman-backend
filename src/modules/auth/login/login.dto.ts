import z from "zod";

export const createDtoLogin = z.object({
  email: z.string().email("Invalid email"),
  password: z
    .string()
    .min(5, "Password must have at least 5 characters")
    .max(10, "Password must be less than 10"),
});
