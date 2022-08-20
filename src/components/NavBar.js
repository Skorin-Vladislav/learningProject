import React, { useState } from "react";
import "./iconsTest.css";
import { Link } from "react-router-dom";
function NavBar() {
  const [click, setClick] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => setClick(!click);
  const handleClick2 = () => setIsActive(!isActive);
  const closeDropDown = () => setClick(false);
  
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="logo">
            Name placeholder <i></i>
          </Link>
          <div className="drop-down-icon" onClick={handleClick}>
            <i className={click ? "one" : "two"}>Class switch</i>

            <button className={isActive ? "one" : "two"} onClick={handleClick2}>
              Click
            </button>
          </div>
          <ul className={click ? "active-drop" : "drop-down"}>
            <li className="drop-down-item">
              <Link
                to="/"
                className="drop-down-link"
                onClick={closeDropDown}
              ></Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
