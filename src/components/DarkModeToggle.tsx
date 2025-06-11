import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import { useColorScheme } from "@mui/material";

export default function DarkModeToggle() {
  const { mode, setMode } = useColorScheme();
  // if (!mode) return null;
  return (
    <>
      <ToggleButtonGroup
        value={mode}
        onChange={(_, newMode) => {
          console.log(newMode);
          setMode(newMode);
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
