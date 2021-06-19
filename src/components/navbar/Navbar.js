import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { ReactComponent as CloseMenu } from "../../assets/x.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="header">
      {/* Comment */}
      <div className="logo-nav">
        <div className="logo-container">
            <NavLink className="is-active" activeClassName='is-active' to="/">TESLA 3</NavLink>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <NavLink className="is-active" activeClassName='is-active' to="/usability-evaluation">USABILITY EVALUATION</NavLink>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <NavLink className="is-active" activeClassName='is-active' to="/persona-design">PERSONA DESIGN</NavLink>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <NavLink className="is-active" activeClassName='is-active' to="/social-media-content">SOCIAL MEDIA CONTENT</NavLink>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <NavLink className="is-active" activeClassName='is-active' to="/prototype-design">PROTOTYPE DESIGN</NavLink>
          </li>
        </ul>
      </div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Navbar;