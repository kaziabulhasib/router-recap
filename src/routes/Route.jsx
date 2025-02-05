import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Contact from "../components/Contact";
import Home from "../components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
