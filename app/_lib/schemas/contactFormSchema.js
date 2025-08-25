import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .optional()
    .refine((val) => !val || /^\+?[0-9]{7,15}$/.test(val), {
      message: "Invalid phone number",
    }),
  message: z.string().min(1, "Message is required"),
});
