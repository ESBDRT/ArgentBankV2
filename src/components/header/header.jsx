import "./header.css";
import argentBankLogo from "../../assets/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { logout } from "../../redux/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isConnected = useSelector(
    (state) => state.auth.isConnected
  );
  const firstName = useSelector((state) => state.auth.firstName);
  const lastName = useSelector((state) => state.auth.lastName);
  const handleLogout = () => {
    dispatch(logout());
    navigate("/signin");
    localStorage.removeItem('token')
  };

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
      </Link>
      <div>
        <Link to="" className="main-nav-item" onClick={handleLogout}>
          {firstName}&nbsp;{lastName}
          <FontAwesomeIcon icon={faUserCircle} />
          {isConnected}
        </Link>
      </div>
    </nav>
  );
}

export default Header;
