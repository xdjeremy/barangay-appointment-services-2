import { nativeEnum, z } from "zod";
import { UsersGenderOptions } from "@/types/pocketbase-types";
import validator from "validator";
import isMobilePhone = validator.isMobilePhone;

const ProfileSchema = z.object({
  birthDate: z.coerce
    .date({
      required_error: "Birthdate is required",
      invalid_type_error: "Birthdate must be a valid date",
    })
    .max(new Date(), {
      message: "You must be born before today",
    }),
  gender: nativeEnum(UsersGenderOptions),
  phone: z.string().refine(isMobilePhone, {
    message: "Phone number must be a valid phone number",
  }),
  street: z
    .string()
    .min(3, {
      message: "Street must be at least 3 characters long",
    })
    .nonempty({
      message: "Street is required",
    }),
  city: z
    .string()
    .min(3, {
      message: "City must be at least 3 characters long",
    })
    .nonempty({
      message: "City is required",
    }),
  province: z
    .string()
    .min(3, {
      message: "Province must be at least 3 characters long",
    })
    .nonempty({
      message: "Province is required",
    }),
  work: z
    .string()
    .min(3, {
      message: "Work must be at least 3 characters long",
    })
    .nonempty({
      message: "Work is required",
    }),
  workPhone: z.string().refine(isMobilePhone, {
    message: "Work phone number must be a valid phone number",
  }),
});

export { ProfileSchema };
