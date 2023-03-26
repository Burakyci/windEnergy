import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import RouterApp from "./RouterApp";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./context/GlobalContext";

function App() {
  return (
    <div>
      <ContextProvider>
        <BrowserRouter>
          <RouterApp />
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
