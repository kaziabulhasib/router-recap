import { useRouteError } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/style.css";
const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  const handleBackToHome = () => {
    navigate("/");
  };
  console.error(error);

  return (
    <div className='error-container'>
      <h1>Oops!</h1>
      <p>Something went wrong:</p>
      <pre>{error.statusText || error.message}</pre>
      <button onClick={handleBackToHome}>Back to Home</button>
    </div>
  );
};

export default Error;
