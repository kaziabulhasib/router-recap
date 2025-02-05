import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Contact from "../components/Contact";
import Home from "../components/Home";
import BookDetails from "../components/BookDetails";
import Error from "../components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "book/:id",
        element: <BookDetails />,
        loader: async ({ params }) => {
          const res = await fetch("/data.json");
          if (!res.ok) {
            throw new Error(`Network response was not ok: ${res.statusText}`);
          }
          const data = await res.json();
          const book = data.find(
            (item) => Number(item.id) === Number(params.id)
          );
          if (!book) {
            throw new Error("Book not found");
          }
          return book;
        },
      },
    ],
  },
]);

export default router;
