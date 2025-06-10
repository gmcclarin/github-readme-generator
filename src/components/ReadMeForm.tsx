import {  useForm, type SubmitHandler } from "react-hook-form";
import { TextField, Button, Box } from "@mui/material";
import {  type ReadMeFormValues } from "../schemas/readMeSchema";
export default function ReadMeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReadMeFormValues>();

  const onSubmit: SubmitHandler<ReadMeFormValues> = (data) => console.log(data);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ p: 2, display: "flex", flexDirection: "column", gap: 2 }}
    >
      <TextField {...register("firstName")} label="First Name" fullWidth />
      <TextField
        {...register("lastName")}
        label="Last Name"
        fullWidth
        error={!!errors.lastName}
        helperText={errors.lastName?.message}
      />
      <TextField 
      {...register("bio")}/>
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </Box>
  );
}
