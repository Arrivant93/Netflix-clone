import { z } from "zod";

export const AuthFormValidator = z.object({
  email: z
    .string()
    .email()
    .regex(/^[^<>\'"]*$/)
    .min(3, { message: "Must be 3 or more characters long" })
    .max(40),
  password: z
    .string()
    .regex(/^[^<>\'"]*$/)
    .min(2)
    .max(50),
});
