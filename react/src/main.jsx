
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from "./component/context/AuthProvider.jsx";
import { UsersProvider } from "./component/context/UserProvider.jsx";
import { ThemeProvider } from "./component/context/ThemeProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <UsersProvider>
            <App />
          </UsersProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
