import React from "react";
import { CharacterProvider } from "./context/CharacterContext.tsx";
import Home from "./pages/Home/Home.tsx";
const App: React.FC = () => {
  return (
    <CharacterProvider>
      <Home />
    </CharacterProvider>
  );
};

export default App;
