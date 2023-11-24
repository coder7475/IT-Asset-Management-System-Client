import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import GeneralLayout from "./layouts/GeneralLayout";
import router from './routes/publicRoutes';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <GeneralLayout />
    </RouterProvider>
  </React.StrictMode>
);
