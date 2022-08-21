import React, { useState } from "react";
import "./iconsTest.css";
import "./NavBar.css";
import { Link } from "react-router-dom";
import TerrainIcon from "@material-ui/icons/Terrain";
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

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="logo">
            Name placeholder
            {/* TODO: find logo*/}
            <i class="fab fa-typo3" />
          </Link>

          <div className="drop-down-icon" onClick={handleClick}>
            <i className={click ? "iconDrp fa-times" : " fa-bars"}>
              {/* Icon of drop-down*/}
              <MenuIcon className={"iconDrp"}></MenuIcon>
              <></>
            </i>
          </div>

          <ul className={click ? "drop-down active" : "drop-down"}>
            <li className="drop-down-item">
              {/* <Button
                className={isActive ? "one" : "two"}
                onClick={handleClick2}
              >
                Click
              </Button> */}
            </li>
            <li className="drop-down-item">
              <Link to="/" className="drop-down-link" onClick={closeDropDown}>
                Home(NavBar)
              </Link>
            </li>
            <li className="drop-down-item">
              <Link
                to="/about"
                className="drop-down-link"
                onClick={closeDropDown}
              >
                About(NavBar)
              </Link>
            </li>
            <li className="drop-down-item">
              <Link
                to="/blog"
                className="drop-down-link"
                onClick={closeDropDown}
              >
                Blog(NavBar)
              </Link>
            </li>
            <li className="drop-down-item">
              <Link
                to="/galary"
                className="drop-down-link"
                onClick={closeDropDown}
              >
                Galary(NavBar)
              </Link>
            </li>
            <li>
              <Link
                to="/sign-up"
                className="drop-down-link-mobile"
                // onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Sign-up</Button>}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
