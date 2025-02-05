import { useLoaderData } from "react-router-dom";

function UserDetails() {
  const user = useLoaderData();
  console.log(user);
  return (
    <div>
      {user ? (
        <>
          <h1>Name: {user.name}</h1>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
}

export default UserDetails;
