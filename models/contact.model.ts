import { z } from "zod";

export const ContactSchema = z.object({
  email: z.string().email("invalid email"),
  name: z
    .string()
    .trim()
    .min(3, "name should be at least 3 characters")
    .max(60, "name is too long"),
  subject: z
    .string()
    .trim()
    .min(3, "subject should be at least 3 characters")
    .max(60, "subject is too long")
    .optional(),
  message: z.string().trim().min(15, "message too short"),
});

export type ContactForm = z.infer<typeof ContactSchema>;
