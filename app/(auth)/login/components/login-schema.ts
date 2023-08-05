import { z } from "zod";

const LoginSchema = z
  .object({
    username: z.string().nonempty({
      message: "Username is required",
    }),
    password: z.string().nonempty({
      message: "Password is required",
    }),
  })
  .partial()
  .required();

export { LoginSchema };