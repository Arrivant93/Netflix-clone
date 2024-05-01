import {z} from "zod"

export const AuthFormValidator = z.object({
    email: z
      .string()
      .regex(/^[a-zA-Z0-9]+$/)
      .min(3, { message: "Must be 3 or more characters long" })
      .max(10),
    password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/).min(2).max(50),
    // Ajoutez d'autres champs avec les validations nécessaires
  })


