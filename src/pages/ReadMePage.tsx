import { Box, Typography, Stack, Divider, Paper, Chip } from "@mui/material";
import ReadMeForm from "../components/ReadMeForm";

export default function ReadMePage() {
  return (
    <Box
      sx={{
        maxWidth: "800px",
        mx: "auto",
        p: 4,
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <Box textAlign="center">
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Welcome to your GitHub Profile README Generator ✨
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Create a standout GitHub profile in just a few steps
        </Typography>
      </Box>

      <Paper elevation={2} sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          How it works:
        </Typography>
        <Stack spacing={2}>
          <Step number={1} text="Add your info and skills you want on your profile" />
          <Step number={2} text="Click Generate ReadMe" />
          <Step number={3} text="Create a new GitHub repo named exactly as your username" />
          <Step number={4} text="Paste your new README.md!" />
        </Stack>
      </Paper>

      <Divider />

      <ReadMeForm />
    </Box>
  );
}

function Step({ number, text }: { number: number; text: string }) {
  return (
    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
      <Chip label={number} color="primary" size="small" />
      <Typography>{text}</Typography>
    </Box>
  );
}
