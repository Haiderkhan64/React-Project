import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import sublinks from "./data";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { openSidebar, openSubMenu, closeSubMenu } = useGlobalContext();
  const handleMouseOver = (e) => {
    e.preventDefault();
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubMenu(page, { center, bottom });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubMenu();
    }
  };
  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="stripe" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>

        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={handleMouseOver}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={handleMouseOver}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={handleMouseOver}>
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">SignIn</button>
      </div>
    </nav>
  );
};

export default Navbar;
