import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
function Footer() {
  return (
    <div className="footerWrap">
      <div className="wrapperFlex">
        <h2 className="footerName">Travel today</h2>

        <div></div>
        <ul className="footerLinks">
          <li className="listItemFooter">
            <Link to="/" className="footerLink">
              Home
            </Link>
          </li>
          <li className="listItemFooter">
            <Link to="/about" className="footerLink">
              About
            </Link>
          </li>
          <li className="listItemFooter">
            <Link to="/blog" className="footerLink">
              Blog
            </Link>
          </li>
          <li className="listItemFooter">
            <Link to="/galary" className="footerLink">
              Galary
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
