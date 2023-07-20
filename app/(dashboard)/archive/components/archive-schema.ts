import {z} from "zod";

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
    birthdate: z.date({
        required_error: "Birthdate is required",
        invalid_type_error: "Birthdate must be a valid date",
    }).max(new Date(), {
        message: "Birthdate must be in the past",
    }),
    contactNumber: z.string().nonempty({
        message: "Contact number is required",
    })
})

export { ArchiveSchema };