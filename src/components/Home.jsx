import { useEffect, useState } from "react";
import Book from "./Book";

const Home = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      <h1>Books: {books.length}</h1>
      <div className='book-container'>
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
