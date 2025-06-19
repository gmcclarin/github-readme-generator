import {
  Controller,
  FormProvider,
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
import Skills from "./Skills";
import Languages from "./Languages";
import { useMarkdownGenerator } from "../hooks/useMarkDownGenerator";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { useRef } from "react";

export default function ReadMeForm() {
  const previewRef = useRef<HTMLDivElement>(null);

  const methods = useForm<ReadMeFormValues>({
    resolver: zodResolver(readMeSchema),
  });

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "socialMedia",
  });

  const { markdown, generate, download, copyToClipboard } =
    useMarkdownGenerator();

  const onSubmit: SubmitHandler<ReadMeFormValues> = (data) => {
    generate(data);
    setTimeout(() => {
      previewRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit, (errors) => {
          console.log("Form errors:", errors);
        })}
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
        <Typography variant="h6">Frameworks and Platforms</Typography>
        <Skills />
        <Typography variant="h6">Languages</Typography>
        <Languages />
        <TextField
          {...register("bannerUrl")}
          label="Banner Image URL (optional)"
          fullWidth
          variant="standard"
          error={!!errors.lastName}
          helperText={errors.lastName?.message}
        />
        <Button type="submit" variant="contained">
          Generate ReadMe
        </Button>
      </Box>
      {markdown && (
        <div ref={previewRef} style={{ marginTop: "2rem" }}>
          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom>
              📝 Your README.md
            </Typography>

            <Box
              sx={{
                border: "1px solid #ddd",
                borderRadius: 2,
                p: 2,
                mb: 2,
                backgroundColor: "background.paper",
              }}
            >
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {markdown}
              </ReactMarkdown>
            </Box>

            <Box sx={{ display: "flex", gap: 2 }}>
              <Button onClick={copyToClipboard} variant="outlined">
                Copy to Clipboard
              </Button>
              <Button onClick={() => download()} variant="outlined">
                Download README.md
              </Button>
            </Box>
          </Box>
        </div>
      )}
    </FormProvider>
  );
}
