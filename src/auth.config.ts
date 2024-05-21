import { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { AuthFormValidator } from "./lib/zod";
import { prisma } from "./lib/prisma";
import bcrypt from "bcryptjs";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = AuthFormValidator.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;
          //on verifie  si l'email est deja dans la base de données
          const potentialUser = await prisma.user.findFirst({
            where: { email: email },
          });
          if (potentialUser === null) return null;

          // Fonction pour comparer le mot de passe avec le hash (bcrypt)
          const isPasswordValid = await bcrypt.compare(
            password,
            potentialUser!.password as string
          );
          // if (!isPasswordValid) return null;

          return { id: potentialUser.id, email: potentialUser.email };
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
