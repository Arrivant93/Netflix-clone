"use client";

import { login } from "@/actions/auth/login";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Icons } from "@/lib/icons";
import { AuthFormValidator } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { FC, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/components/ui/use-toast";

const LoginForm: FC = () => {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof AuthFormValidator>>({
    resolver: zodResolver(AuthFormValidator),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof AuthFormValidator>) {
    startTransition(() => {
      login(values).then((data) => {
        if (!data?.success) {
          toast({
            title: "Error",
            description: data?.error,
            variant: "destructive",
          });
        }
      });
    });
  }

  return (
    <div className="bg-zinc-900 p-10 rounded-sm ">
      <h2 className="mb-6 text-2xl font-medium ">S&apos;identifier</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="  space-y-3  ">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="johndoe@gmail.com"
                    type="email"
                    {...field}
                    disabled={isPending}
                  />
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
                  <Input
                    placeholder="*********"
                    {...field}
                    disabled={isPending}
                    type="password"
                  />
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
            aria-label="Boutton connexion"
          >
            {isPending ? <Icons.loading /> : "Connexion"}
          </Button>
        </form>
      </Form>

      <p className="text-xs text-zinc-400 mt-6 ">
        Premiere visite sur Netflix ?{" "}
        <Link
          href={"/register"}
          className="text-zinc-200 hover:underline hover:text-white"
        >
          Inscrivez-vous{" "}
        </Link>{" "}
      </p>
    </div>
  );
};

export default LoginForm;
