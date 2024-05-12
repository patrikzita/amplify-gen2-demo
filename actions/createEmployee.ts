"use server";

"use server";

import { cookiesClient } from "@/lib/amplify";
import { CreateEmployeeSchema } from "@/lib/validations/employee";
import { revalidatePath } from "next/cache";

export type FormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
};

export async function createEmployee(
  prevState: FormState,
  data: FormData
): Promise<FormState> {
  const formData = Object.fromEntries(data);
  console.log(formData);
  const parsed = CreateEmployeeSchema.safeParse(formData);

  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const key of Object.keys(formData)) {
      fields[key] = formData[key].toString();
    }
    return {
      message: "Invalid form data",
      fields,
      issues: parsed.error.issues.map((issue) => issue.message),
    };
  }

  await cookiesClient.models.Employee.create(parsed.data);

  revalidatePath("/form");

  return { message: "Qestak vytvořen" };
}
