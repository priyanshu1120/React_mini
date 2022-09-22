import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {BrowserRouter} from "react-router-dom"
import AppContextProvider from "./Context/AppContext"





import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AppContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </AppContextProvider>
  </StrictMode>
);
