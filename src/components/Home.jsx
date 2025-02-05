// import { useEffect, useState } from "react";
import User from "./User";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const users = useLoaderData();
  return (
    <div>
      <h1>users: {users.length}</h1>

      <div className='book-container'>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Home;
