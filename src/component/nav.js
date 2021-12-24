import { NavLink } from "react-router-dom";
import "../component/nav.scss";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
function Nav(params) {
  const [icon, setIcon] = useState(false);
  const [formtxt, setFormtxt] = useState(false);
  const [formtoggle, setFormtoggle] = useState(false);
  const menuClick = () => {
    setIcon(!icon);
  };
  const closeSideDrawer = () => {
    setIcon(false);
    setFormtxt(false);
  };
  const closeSideDrawer1 = () => {
    setIcon(false);
    setFormtxt(true);
  };

  const formstoggle = () => {
    setFormtoggle(!formtoggle);
  };

  return (
    <div>
      <nav className="nav">
        <div className="nav--logo" onClick={closeSideDrawer}>
          <NavLink to="/" className="nav--logo__img">
            LOGO
          </NavLink>
        </div>
        <div className={icon ? "nav--menus show" : "nav--menus"}>
          <ul className="nav--menus--ul">
            <li className="nav--menus--ul__li">
              <NavLink
                to="/"
                onClick={closeSideDrawer}
                className={(navData) => (navData.isActive ? "green" : "black")}
              >
                HOME
              </NavLink>
            </li>
            <li className="nav--menus--ul__li">
              <NavLink
                to="/about"
                onClick={closeSideDrawer}
                className={(navData) => (navData.isActive ? "green" : "black")}
              >
                ABOUT
              </NavLink>
            </li>
            <li className="nav--menus--ul__li">
              <div className="dropdown">
                <p className={formtxt ? "formstxt" : "dropbtn"}>
                  FORMS &nbsp;
                  <i class="fas fa-angle-down" onClick={formstoggle}></i>
                </p>

                <div class="dropdown-content">
                  <NavLink
                    to="/registration"
                    className={(navData) =>
                      navData.isActive ? "formactive" : "link"
                    }
                    onClick={closeSideDrawer1}
                  >
                    REGISTRATION
                  </NavLink>
                  <NavLink
                    to="/login"
                    onClick={closeSideDrawer1}
                    className={(navData) =>
                      navData.isActive ? "formactive" : "link"
                    }
                  >
                    LOGIN
                  </NavLink>
                  <NavLink
                    to="/logout"
                    onClick={closeSideDrawer1}
                    className={(navData) =>
                      navData.isActive ? "formactive" : "link"
                    }
                  >
                    LOGOUT
                  </NavLink>
                </div>
              </div>
            </li>
            <li className="nav--menus--ul__li contact">
              <NavLink
                to="/contact"
                onClick={closeSideDrawer}
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
