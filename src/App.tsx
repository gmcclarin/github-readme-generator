import ReadMePage from "./pages/ReadMePage";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <DarkModeToggle />
      <h1>GitHub README Generator</h1>
      <ReadMePage />
    </div>
  );
}

export default App;
