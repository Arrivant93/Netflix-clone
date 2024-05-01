"use client";

import { FC } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { AuthFormValidator } from "@/lib/zod";



const LoginForm: FC = () => {
 

  const form = useForm<z.infer<typeof AuthFormValidator>>({
    resolver: zodResolver(AuthFormValidator),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof AuthFormValidator>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="bg-zinc-900 p-10 rounded-sm ">
    <h2 className="mb-6 text-2xl font-medium ">S&apos;identifier</h2>
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="  space-y-3  "
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="johndoe@gmail.com" {...field} />
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
                <Input placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" size="sm" colorScheme={"rouge"} type="submit">Connexion</Button>
      </form>
    </Form>
    
    <p className="text-xs text-zinc-400 mt-6 ">Premiere visite sur Netflix ? <Link href={"/register"} className="text-zinc-200 hover:underline hover:text-white">Inscrivez-vous </Link> </p>
    </div>
  );
};

export default LoginForm;
