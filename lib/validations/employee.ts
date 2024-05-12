import { z } from "zod";

export const CreateEmployeeSchema = z.object({
  firstName: z.string().trim().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().trim().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  position: z.enum(["FRONTEND", "BACKEND", "FULLSTACK"]),
  age: z.coerce.number(),
});
