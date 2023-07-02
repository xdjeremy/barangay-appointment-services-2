import { z } from "zod";

const RegisterSchema = z
  .object({
    name: z
      .string()
      .min(3, {
        message: "Name must be at least 3 characters long",
      })
      .max(50, {
        message: "Name must be at most 50 characters long",
      }),
    username: z.string().min(3, {
      message: "Username must be at least 3 characters long",
    }),
    email: z.string().email({
      message: "Invalid email address",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters long",
    }),
    passwordConfirm: z.string().min(8, {
      message: "Password must be at least 8 characters long",
    }),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.passwordConfirm) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Passwords do not match",
        path: ["passwordConfirm"],
      });
    }
    return true;
  });

export { RegisterSchema };
