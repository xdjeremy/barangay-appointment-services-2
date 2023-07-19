import {z} from "zod";

const ArchiveSchema = z.object({
    lastName: z.string().nonempty({
        message: "Last name is required",
    }),
    firstName: z.string().nonempty({
        
    })
})