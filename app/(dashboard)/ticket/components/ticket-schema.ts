import { z } from "zod";
import { TicketsPurposeOptions } from "@/types/pocketbase-types";
import validator from "validator";
import isEmail = validator.isEmail;

const TicketSchema = z.object({
  firstName: z.string().nonempty({
    message: "First name is required",
  }),
  lastName: z.string().nonempty({
    message: "Last name is required",
  }),
  email: z
    .string()
    .nonempty({
      message: "Email is required",
    })
    .refine(isEmail, {
      message: "Email is not valid",
    }),
  purpose: z.nativeEnum(TicketsPurposeOptions),
  body: z.string().nonempty({
    message: "Body is required",
  }),
});

export {TicketSchema}