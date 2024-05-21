"use server";

import { signIn } from "@/auth";
import { AuthFormValidator } from "@/lib/zod";
import { AuthError } from "next-auth";
import { z } from "zod";

export const login = async (values: z.infer<typeof AuthFormValidator>) => {
  const validatedFields = AuthFormValidator.safeParse(values);

  if (!validatedFields.success) {
    return { success: false,error: "Champs icorrecte" };
  }

  const { email, password } = validatedFields.data;

  try {
    await signIn("credentials", { email, password,redirectTo:"/" });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {success: false, error: "L'email ou le mot de passe est incorrect" };
        default:
          return {success: false, error: "Une erreur est survenue, veuillez réessayer ultérieurement" };
      }
    }

    throw error;
  }
};
