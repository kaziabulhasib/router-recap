import { useEffect, useState } from "react";

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
        {books.map((book, idx) => (
          <h1 key={idx}>{book.book_name}</h1>
        ))}
      </div>
    </div>
  );
};

export default Home;
