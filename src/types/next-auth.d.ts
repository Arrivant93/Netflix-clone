import "next-auth";
import type { DefaultSession, User } from "next-auth";
import "next-auth/jwt";

type UserId = string;

declare module "next-auth/jwt" {
  interface JWT {
    id: UserId;
    email: string;
  }
}

declare module "next-auth" {
  interface Session {
    user: User & {} & DefaultSession["user"];
  }
}
