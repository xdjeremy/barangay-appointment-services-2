import { z } from "zod";
import validator from "validator";
import isMobilePhone = validator.isMobilePhone;

const ArchiveSchema = z.object({
  lastName: z.string().nonempty({
    message: "Last name is required",
  }),
  firstName: z.string().nonempty({
    message: "First name is required",
  }),
  middleName: z.string().nonempty({
    message: "Middle name is required",
  }),
  address: z.string().nonempty({
    message: "Address is required",
  }),
  email: z.string().nonempty({
    message: "Email is required",
  }),
  birthdate: z.coerce
    .date({
      required_error: "Birthdate is required",
      invalid_type_error: "Birthdate must be a valid date",
    })
    .min(new Date(), {
      message: "You must be born before today",
    }),
  contactNumber: z.string().refine(isMobilePhone),
});

export { ArchiveSchema };
