import ReadMePage from "./pages/ReadMePage";
import DarkModeToggle from "./components/DarkModeToggle";

type Props = {
  mode: 'light' | 'dark';
  setMode: (mode: 'light' | 'dark') => void;
};

function App({mode, setMode}: Props) {
  return (
    <div style={{ padding: "2rem" }}>
      <DarkModeToggle mode={mode} setMode={setMode} />
      <h1>GitHub README Generator</h1>
      <ReadMePage />
    </div>
  );
}

export default App;
