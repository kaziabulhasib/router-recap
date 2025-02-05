import { useNavigate } from "react-router-dom";
import "../styles/style.css";

function User({ user }) {
  const navigate = useNavigate();

  const handleUserDetails = () => {
    navigate(`/user/${user?.id}`);
  };

  return (
    <div className='book'>
      <h1>{user.name}</h1>
      <button onClick={handleUserDetails}>view Details</button>
    </div>
  );
}

export default User;
