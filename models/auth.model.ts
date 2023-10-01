import { z } from "zod";

export const AuthSchema = z.object({
  email: z.string().email("invalid email, ex: john@me.com"),
  password: z
    .string()
    .min(6, "password should at least 6 characters")
    .max(25, "password should not exceed 25 characters"),
});

export type user = z.infer<typeof AuthSchema>;
