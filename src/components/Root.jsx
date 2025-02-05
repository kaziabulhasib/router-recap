import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/style.css";

const Root = () => {
  return (
    <div className='main-div'>
      <Header />
      <div className='content'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
