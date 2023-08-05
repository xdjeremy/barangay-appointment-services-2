import { z } from "zod";
import validator from "validator";
import { DocumentRequestsDocumentTypeOptions } from "@/types/pocketbase-types";
import isMobilePhone = validator.isMobilePhone;
import isEmail = validator.isEmail;

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
  email: z
    .string()
    .nonempty({
      message: "Email is required",
    })
    .refine(isEmail),
  birthdate: z.coerce
    .date({
      required_error: "Birthdate is required",
      invalid_type_error: "Birthdate must be a valid date",
    })
    .max(new Date(), {
      message: "You must be born before today",
    }),
  contactNumber: z.string().refine(isMobilePhone),
  documentType: z.nativeEnum(DocumentRequestsDocumentTypeOptions),
  purpose: z.string().nonempty({
    message: "Purpose is required",
  }),
});

export { ArchiveSchema };
