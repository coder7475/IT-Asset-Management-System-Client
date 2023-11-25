import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/publicRoutes";
import "./index.css";
import AuthProvider from "./features/Authentication/providers/AuthProvider";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>        
    </AuthProvider>
  </React.StrictMode>
);
