import { z } from "zod";

export const readMeSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().optional(),
  bio: z.string().optional(),
  funFact: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().email().optional(),
  socialMedia: z
    .array(
      z.object({
        name: z.string(),
        url: z.string().url(),
        icon: z.string().optional(),
      })
    )
    .optional(),
   skills: z
    .array(
      z.object({
        name: z.string(),
        badge: z.string().url(),
      })
    )
    .optional(),
  languages: z
    .array(
      z.object({
        name: z.string(),
        badge: z.string().url(),
      })
    )
    .optional(),
});


export type ReadMeData = z.infer<typeof readMeSchema>;
export type ReadMeFormValues = ReadMeData;


