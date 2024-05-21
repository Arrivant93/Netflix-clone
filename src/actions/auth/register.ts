"use server";

import { prisma } from "@/lib/prisma";
import { AuthFormValidator } from "@/lib/zod";
import { z } from "zod";
import bcrypt from "bcryptjs";

export const register = async (data: z.infer<typeof AuthFormValidator>) => {
  //controler si l'email est deja  pris
  const { email, password } = data;
  const isEmailTaken = await prisma.user.findFirst({ where: { email: email } });

  if (isEmailTaken) return { success: false, message: "email deja pris" };

  // renvoyer un message d'erreur si l'email est deja pris

  //recuperer le mot de passe entré  et l'encrypté
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //enregistrer le email et le mdp encrypter dans la bdd
  const user = await prisma.user.create({
    data: { email: email, password: hashedPassword },
  });
  console.log(user);
  return { success: true, message: "pdpdpd", redirectTo: "/login" };
};
