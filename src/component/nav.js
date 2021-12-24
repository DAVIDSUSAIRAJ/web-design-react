import { NavLink } from "react-router-dom";
import "../component/nav.scss";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
function Nav(params) {
  const [icon, setIcon] = useState(false);

  const menuClick = () => {
    setIcon(!icon);
  };

  return (
    <div>
      <nav className="nav">
        <div className="nav--logo">
          <NavLink to="/" className="nav--logo__img">
            LOGO
          </NavLink>
        </div>
        <div className="nav--menus">
          <ul className="nav--menus--ul">
            <li className="nav--menus--ul__li">
              <NavLink
                to="/"
                className={(navData) => (navData.isActive ? "green" : "black")}
              >
                HOME
              </NavLink>
            </li>
            <li className="nav--menus--ul__li">
              <NavLink
                to="/about"
                className={(navData) => (navData.isActive ? "green" : "black")}
              >
                ABOUT
              </NavLink>
            </li>
            <li className="nav--menus--ul__li">
              <div className="dropdown">
                <p className="dropbtn">FORMS</p>

                <div class="dropdown-content">
                  <NavLink to="/registration" className="reg-link link">
                    REGISTRATION
                  </NavLink>
                  <NavLink to="/login" className="login-link link">
                    LOGIN
                  </NavLink>
                  <NavLink to="/logout" className="logout-link link">
                    LOGOUT
                  </NavLink>
                </div>
              </div>
            </li>
            <li className="nav--menus--ul__li contact">
              <NavLink
                to="/contact"
                className={(navData) => (navData.isActive ? "green" : "black")}
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-icons" onClick={menuClick}>
          {icon ? (
            <FaTimes className="fa-times"></FaTimes>
          ) : (
            <FaBars className="fa-bars"></FaBars>
          )}
        </div>
      </nav>
    </div>
  );
}
export default Nav;
