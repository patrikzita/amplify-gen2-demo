"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { toast } from "sonner";
import { type Schema } from "@/amplify/data/resource";

const FormSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  position: z.enum(["FRONTEND", "BACKEND", "FULLSTACK"]),
  age: z.number(),
});

type Project = Schema["Project"];

type Props = {
  projects?: Project[];
};

export function ProfileForm({ projects }: Props) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      position: "FRONTEND",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast("Event has been there");
  }

  console.log(projects);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex gap-3">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Jméno</FormLabel>
                <FormControl>
                  <Input placeholder="Patrik" {...field} />
                </FormControl>
                <FormDescription>Zadejte svoje jméno</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Příjmení</FormLabel>
                <FormControl>
                  <Input placeholder="Zita" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="position"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pozice</FormLabel>
              <FormControl>
                <Input placeholder="frontedn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
