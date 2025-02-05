import { Outlet } from "react-router-dom";
import "../styles/style.css";
const Root = () => {
  return (
    <div className='main-div'>
      <Outlet />
    </div>
  );
};

export default Root;
