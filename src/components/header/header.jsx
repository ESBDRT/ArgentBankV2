import './header.css'
import argentBankLogo from '../../assets/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav class="main-nav">
      <Link to="/" className='main-nav-logo'>
      <img
          class="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
      </Link>
      <div>
        <Link to="/signin" className="main-nav-item">
        <FontAwesomeIcon icon={faUserCircle} />
          Sign In
        </Link>
      </div>
    </nav>
  )
}

export default Header;