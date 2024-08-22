import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Layout from "./Layout.jsx";
import WorkoutContextProvider from "./context/workout-context.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <h1>404 page not found.</h1>,
    children: [
      {
        path: "/",
        element: (
          <WorkoutContextProvider>
            <App />
          </WorkoutContextProvider>
        ),
      },
      {
        path: "about",
        element: (
          <div>
            About{" "}
            <p>
              <Link to={"/"}>Go back</Link>
            </p>
          </div>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
