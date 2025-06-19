import ReadMePage from "./pages/ReadMePage";
import DarkModeToggle from "./components/DarkModeToggle";
import { Box } from "@mui/system";

type Props = {
  mode: 'light' | 'dark';
  setMode: (mode: 'light' | 'dark') => void;
};

function App({mode, setMode}: Props) {
  return (
    <div style={{ padding: "2rem" }}>
      <Box sx={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-end"
      }}>
        <DarkModeToggle mode={mode} setMode={setMode} />
      </Box>
      <ReadMePage />
    </div>
  );
}

export default App;
