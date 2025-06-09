import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {readMeSchema,type ReadMeFormValues} from "../schemas/readMeSchema"
import { TextField, Button, Box } from "@mui/material";

export default function ReadMeForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ReadMeFormValues>({
    resolver: zodResolver(readMeSchema),
  });

  const onSubmit = (data: ReadMeFormValues) => {
    console.log("Form data:", data);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ p: 2, display: "flex", flexDirection: "column", gap: 2 }}>
      <Controller
        name="firstName"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="First Name"
            fullWidth
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
          />
        )}
      />

      <Controller
        name="lastName"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Last Name"
            fullWidth
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
          />
        )}
      />

      <Button type="submit" variant="contained">
        Submit
      </Button>
    </Box>
  );
}
