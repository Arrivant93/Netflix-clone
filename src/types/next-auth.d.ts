import "next-auth";
import type { DefaultSession, User } from "next-auth";
import "next-auth/jwt";

type UserId = string;

declare module "next-auth/jwt" {
  interface JWT {
    id: UserId;
    email: string;
    watchlistId: string
  }
}

declare module "next-auth" {
  interface Session {
    user: User & {
      watchlistId: string
    } & DefaultSession["user"];
  }
}
