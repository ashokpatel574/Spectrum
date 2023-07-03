import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { makeServer } from "./server";
import { RouterProvider } from "react-router-dom";
import AppRouter from "./frontend/routes/AppRouter";
import AuthContextProvider from "./frontend/context/AuthContext";
import ThemeContextProvider from "./frontend/context/ThemeContext";
import DataContextProvider from "./frontend/context/DataContext";

// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ThemeContextProvider>
        <DataContextProvider>
          <RouterProvider router={AppRouter} />
        </DataContextProvider>
      </ThemeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
