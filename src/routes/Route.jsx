import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Contact from "../components/Contact";
import Home from "../components/Home";
import UserDetails from "../components/UserDetails";
import Error from "../components/Error";

const router = createBrowserRouter([
  {
    path: "/",

    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "user/:id",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
        element: <UserDetails />,
      },
    ],
  },
]);

export default router;
