import { z } from "zod";

export const formSchema = z.object({
  name: z.string().optional(),
  projectName: z.string().optional(),
  locationCheckbox: z.boolean().optional(),
  location: z.string().optional(),
  date: z.date().optional(),
});
