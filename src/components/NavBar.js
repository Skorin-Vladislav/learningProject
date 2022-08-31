import React, { useState, useEffect } from "react";
import "./iconsTest.css";
import "./NavBar.css";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

//import Button from "@material-ui/core/Button";
import { Button } from "./Button/Button";
function NavBar() {
  const [click, setClick] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const handleClick2 = () => setIsActive(!isActive);
  const closeDropDown = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  useEffect(() => {
    showButton();
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="logo" onClick={closeDropDown}>
            Travel today
            {/* TODO: find logo*/}
            <i className="fab fa-typo3"></i>
          </Link>

          <div className="drop-down-icon" onClick={handleClick}>
            <i className={click ? "iconDrp fa-times " : "iconDrp fa-bars "}>
              {/* Icon of drop-down*/}
              <MenuIcon></MenuIcon>
            </i>
          </div>

          <ul className={click ? "drop-down active" : "drop-down"}>
            <li className="drop-down-item">
              <Link to="/" className="drop-down-link" onClick={closeDropDown}>
                Home
              </Link>
            </li>
            <li className="drop-down-item">
              <Link
                to="/about"
                className="drop-down-link"
                onClick={closeDropDown}
              >
                About
              </Link>
            </li>

            <li className="drop-down-item">
              <Link
                to="/gallery"
                className="drop-down-link"
                onClick={closeDropDown}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/sign-up"
                className="drop-down-link-mobile"
                onClick={closeDropDown}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          <Link to="/sign-up" >
            {button && <Button buttonStyle="btn--outline">Sign-up</Button>}
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
