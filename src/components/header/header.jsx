import "./header.css";
import argentBankLogo from "../../assets/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const isUserSignedInOut = useSelector((state) => state.auth.isUserSignedInOut);

  return (
    <nav class="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          class="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
      </Link>
      <div>
        <Link to="/signin" className="main-nav-item">
          <FontAwesomeIcon icon={faUserCircle} />
          {isUserSignedInOut ? isUserSignedInOut : "Sign in"}
        </Link>
      </div>
    </nav>
  );
}

export default Header;
