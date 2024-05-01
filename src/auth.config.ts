import { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { AuthFormValidator } from "./lib/zod";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = AuthFormValidator.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;
          return { email };
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
