import {  useForm, type SubmitHandler } from "react-hook-form";
import { TextField, Button, Box } from "@mui/material";

interface IFormInput {
  firstName: string;
  lastName: string;
  age: number;
}

export default function ReadMeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

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

      <Button type="submit" variant="contained">
        Submit
      </Button>
    </Box>
  );
}
