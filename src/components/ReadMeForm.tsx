import {
  Controller,
  useFieldArray,
  useForm,
  type SubmitHandler,
} from "react-hook-form";
import {
  TextField,
  Button,
  Box,
  Typography,
  IconButton,
  MenuItem,
  Select,
} from "@mui/material";
import { type ReadMeFormValues, readMeSchema } from "../schemas/readMeSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ReadMeForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ReadMeFormValues>({
    resolver: zodResolver(readMeSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "socialMedia",
  });

  const onSubmit: SubmitHandler<ReadMeFormValues> = (data) => console.log(data);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ p: 2, display: "flex", flexDirection: "column", gap: 2 }}
    >
      <TextField
        {...register("firstName")}
        label="First Name"
        fullWidth
        error={!!errors.firstName}
        helperText={errors.firstName?.message}
        variant="standard"
      />
      <TextField
        {...register("lastName")}
        label="Last Name"
        fullWidth
        error={!!errors.lastName}
        helperText={errors.lastName?.message}
        variant="standard"
      />
      <TextField
        {...register("bio")}
        label="About Me"
        fullWidth
        multiline
        variant="standard"
        minRows={4}
      />
      <TextField
        {...register("funFact")}
        label="Fun Fact"
        fullWidth
        variant="standard"
      />
      <TextField
        {...register("phone")}
        label="Phone Number"
        variant="standard"
      />
      <TextField {...register("email")} label="Email" variant="standard" />
      {/* SKILLS */}
      {/* Checkboxes? */}
      
      {/* SOCIAL MEDIA */}
      <Typography variant="h6" mt={2}>
        Social Media Links
      </Typography>
      {fields.map((field, index: number) => (
        <Box key={field.id} display="flex" gap={2} alignItems="center" mb={1}>
          <Controller
            name={`socialMedia.${index}.name`}
            control={control}
            defaultValue={field.name || ""}
            render={({ field }) => (
              <Select {...field} displayEmpty fullWidth variant="standard">
                <MenuItem value="">Select Platform</MenuItem>
                {[
                  "Github",
                  "Instagram",
                  "LinkedIn",
                  "Medium",
                  "Twitter",
                  "Facebook",
                  "Leetcode",
                  "Discord",
                  "Dribble",
                  "YouTube",
                  "Dev.to",
                  "Reddit",
                  "Stackoverflow",
                  "Other",
                ].map((platform) => (
                  <MenuItem key={platform} value={platform}>
                    {platform}
                  </MenuItem>
                ))}
              </Select>
            )}
          />

          <Controller
            name={`socialMedia.${index}.url`}
            control={control}
            defaultValue={field.url || ""}
            render={({ field }) => (
              <TextField {...field} placeholder="URL" fullWidth />
            )}
          />

          <IconButton onClick={() => remove(index)} aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Box>
      ))}
      <Button
        type="button"
        variant="outlined"
        onClick={() => append({ name: "", url: "" })}
      >
        + Add Another Social Link
      </Button>
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </Box>
  );
}
