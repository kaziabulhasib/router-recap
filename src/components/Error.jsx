import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <h1>Oops!</h1>
      <p>Something went wrong:</p>
      <pre>{error.statusText || error.message}</pre>
    </div>
  );
};

export default Error;
