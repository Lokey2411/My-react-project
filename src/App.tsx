import React from "react";
import RouterConfig from "@/routes/RouterConfig";
import { AppProvider } from "./providers/app";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <RouterConfig />
      </AppProvider>
    </div>
  );
}

export default App;
