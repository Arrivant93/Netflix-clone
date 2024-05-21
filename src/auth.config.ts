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
          const isEmailTaken =
            (await prisma.user.count({
              where: { email: email },
            })) > 0;

          if (!isEmailTaken) return null;

          //recup le mot de passe hash (bcrypt)
          const passwordHash = await prisma.user.findUnique({
            where :{
              email : email 
            }
          })
          
          // Fonction pour comparer le mot de passe avec le hash (bcrypt)
          const isPasswordValid = await bcrypt.compare(password, passwordHash!.password as string);

        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
