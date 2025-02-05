import { useLoaderData } from "react-router-dom";

const BookDetails = () => {
  const book = useLoaderData();
  return <div>BookDetails:{book.id}</div>;
};

export default BookDetails;
