import * as React from "react";
import "./App.css";
import Work from "./components/Work";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Personal from "./components/Personal";
import Item from "./components/Item";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Work />,
  },
  {
    path: "/work",
    element: <Work />,
  },
  {
    path: "/personal",
    element: <Personal />,
  },
  {
    path: "/*",
    element: <Item />,
  },
]);

function App() {
  return (
    <React.StrictMode>
      <div style={{ backgroundColor: "#b5d2ea" }}>
        <RouterProvider router={router} />
      </div>
    </React.StrictMode>
  );
}

export default App;
