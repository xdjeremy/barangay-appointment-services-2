import { z } from "zod";

const NewsSchema = z.object({
  title: z.string().min(3).max(255),
  content: z.string().min(3).max(255),
});

export { NewsSchema };