import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <header className='header'>
      <div className='header-wrapper'>
        <div className='header-logo'>
          {/* Replace "/logo.png" with your actual logo path */}
          <img src='/logo.png' alt='Logo' />
        </div>
        <nav className='header-nav'>
          <ul>
            <li>
              {/* Home route */}
              <Link to='/'>Home</Link>
            </li>
            <li>
              {/* Contact route */}
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              {/* Book Details route (dynamic): provides an example link with a sample id (1) */}
              <Link to='/book/1'>Book Details</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
