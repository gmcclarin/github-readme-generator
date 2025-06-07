import { useForm, type SubmitHandler } from "react-hook-form";
import generateMarkdown from "../utils/generateMarkdown";
import { Button, TextField } from "@mui/material";
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


export const readMeSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().optional(),
  bio: z.string().optional(),
  funFact: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().email().optional(),
  socialMedia: z.array(
    z.object({
      name: z.string(),
      url: z.string().url(),
      icon: z.string().optional()
    })
  ).optional(),
  skills: z.array(z.string()).optional(),
});

type ReadMeFormValues  = z.infer< typeof readMeSchema>;

export default function ReadMeForm () {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<ReadMeFormValues>({
          resolver: zodResolver(readMeSchema),
    });

    const onSubmit: SubmitHandler<ReadMeFormValues> = (data) => {
        generateMarkdown(data);
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField 
        {...register("firstName", { required: true })}
            />
            <TextField 
            {...register("lastName")}/>
            <Button
            type="submit"
            >Make my ReadMe!</Button>
        </form>
    )
}