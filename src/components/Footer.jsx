import { Link } from "react-router-dom";
import "../styles/footer.css"; // optional: include styling for the footer

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-wrapper'>
        <div className='footer-logo'>
          {/* Replace "/logo.png" with your actual logo path or a different element */}
          <img src='/logo.png' alt='Logo' />
        </div>
        <nav className='footer-nav'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              {/* Example link for dynamic route: Using "1" as sample book id */}
              <Link to='/book/1'>Book Details</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
