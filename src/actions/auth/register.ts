"use server";

import { signIn } from "@/auth";
import { AuthFormValidator } from "@/lib/zod";
import { AuthError } from "next-auth";
import { z } from "zod";

export const register = async (values: z.infer<typeof AuthFormValidator>) => {
  const validatedFields = AuthFormValidator.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Champs icorrecte" };
  }

  const { email, password } = validatedFields.data;

  try {
    await signIn("credentials", { email, password });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "L'email ou le mot de passe est incorrect" };
        default:
          return { error: "Une erreur est survenue, veuillez réessayer ultérieurement" };
      }
    }

    throw error;
  }
};
