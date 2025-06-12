import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";

type Props = {
  mode: "light" | "dark";
  setMode: (mode: "light" | "dark") => void;
};

export default function DarkModeToggle({ mode, setMode }: Props) {
  if (!mode) return null;

  return (
    <>
      <ToggleButtonGroup
        value={mode}
        exclusive
        onChange={(_, newMode) => {
          if (newMode === "light" || newMode === "dark") {
            console.log("✅ mode:", newMode);
            setMode(newMode);
          } else {
            console.warn("🚫 Invalid mode selected:", newMode);
          }
        }}
      >
        <ToggleButton value="light">
          <LightModeIcon />
        </ToggleButton>
        <ToggleButton value="dark">
          <ModeNightIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}
