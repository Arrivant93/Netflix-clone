"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { AuthFormValidator } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const RegisterForm: FC = () => {
  const form = useForm<z.infer<typeof AuthFormValidator>>({
    resolver: zodResolver(AuthFormValidator),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof AuthFormValidator>) => {};

  return (
    <div className="bg-zinc-900 p-10 rounded-sm ">
      <h2 className="mb-6 text-2xl font-medium ">S&apos;inscrire</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="johndoe@gmail.com" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="*********" {...field} type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="w-full"
            size="sm"
            colorScheme="rouge"
            type="submit"
            aria-label="Boutton inscription"
          >
            S&apos;inscrire
          </Button>
        </form>
      </Form>

      <p className="text-xs text-zinc-400 mt-6 text-center ">
        Deja un compte ?{" "}
        <Link href={"/login"} className="text-zinc-200 hover:underline hover:text-white">
          Connectez-vous{" "}
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;
