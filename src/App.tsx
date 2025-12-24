import { useState } from "react";
import Landing from "./components/Landing";
import TechieMode from "./components/TechieMode";
import NonTechieMode from "./components/NonTechieMode";

type ViewMode = "landing" | "techie" | "non-techie";

function App() {
  const [viewMode, setViewMode] = useState<ViewMode>("landing");

  return (
    <>
      {viewMode === "landing" && (
        <Landing onSelectMode={setViewMode} />
      )}

      {viewMode === "techie" && (
        <TechieMode onBack={() => setViewMode("landing")} />
      )}

      {viewMode === "non-techie" && (
        <NonTechieMode onBack={() => setViewMode("landing")} />
      )}
    </>
  );
}

export default App;