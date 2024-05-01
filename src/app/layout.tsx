import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import NavBar from "@/components/nav";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Netflix",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={inter.className}>
          <NavBar />
          <main>{children}</main>
        </body>
      </html>
    </SessionProvider>
  );
}
