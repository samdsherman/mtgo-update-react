import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
