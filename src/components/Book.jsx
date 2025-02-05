import { useNavigate } from "react-router-dom";
import "../styles/style.css";

const Book = ({ book }) => {
  const navigate = useNavigate();
  const handleBookDetails = () => {
    navigate(`/book/${book?.id}`);
    // navigate("/contact");
  };
  return (
    <div className='book'>
      <h1>{book.book_name}</h1>
      <button onClick={handleBookDetails}>view Details</button>
    </div>
  );
};

export default Book;
