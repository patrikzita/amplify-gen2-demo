"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { createEmployee } from "@/actions/createEmployee";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CreateEmployeeSchema } from "@/lib/validations/employee";
import { X } from "lucide-react";
import { useRef } from "react";
import { useFormState } from "react-dom";
import { SubmitButton } from "./SubmitButton";

const positions = {
  FRONTEND: "FRONTEND",
  BACKEND: "BACKEND",
  FULLSTACK: "FULLSTACK",
} as const;

export function ProfileForm() {
  const [state, formAction, isPending] = useFormState(createEmployee, {
    message: "",
  });

  const form = useForm<z.infer<typeof CreateEmployeeSchema>>({
    resolver: zodResolver(CreateEmployeeSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      position: "FRONTEND",
      age: 0,
    },
  });
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <Form {...form}>
      {state?.issues && (
        <div className="text-red-500">
          <ul>
            {state.issues.map((issue) => (
              <li key={issue} className="flex gap-1">
                <X fill="red" />
                {issue}
              </li>
            ))}
          </ul>
        </div>
      )}
      <form
        ref={formRef}
        className="space-y-8"
        action={formAction}
        onSubmit={(evt) => {
          evt.preventDefault();
          form.handleSubmit(() => {
            formAction(new FormData(formRef.current!));
            form.reset();
          })(evt);
        }}
      >
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
        <div className="flex gap-3">
          <FormField
            control={form.control}
            name="position"
            render={({ field }) => (
              <FormItem className="w-full hidden">
                <FormControl>
                  <Input placeholder="FRONTEND" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="position"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Pozice</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a verified email to display" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.values(positions).map((position) => (
                      <SelectItem key={position} value={position}>
                        {position}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Věk</FormLabel>
                <FormControl>
                  <Input placeholder="23" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="space-y-2">
          {state?.message !== "" && !state.issues && (
            <div className="text-green-500">{state.message}</div>
          )}
          <SubmitButton />
        </div>
      </form>
    </Form>
  );
}
