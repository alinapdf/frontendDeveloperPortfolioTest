import { NavLink } from "react-router-dom";
import "./Navbar.css";
import BtnDarkMode from "../BtnDarkMode/BtnDarkMode";
const Navbar = () => {
  const activeLink = "nav-list-item-link  nav-list-item-link-active";
  const normalLink = "nav-list-item-link";

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo">
            <strong>Freelancer</strong> portfolio
          </NavLink>

          <BtnDarkMode />

          <ul className="nav-list">
            <li className="nav-list-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-list-item">
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Skills
              </NavLink>
            </li>
            <li className="nav-list-item">
              <NavLink
                to="/contacts"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
