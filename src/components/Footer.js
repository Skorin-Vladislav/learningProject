import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <div className="footerWrap">
      <div className="wrapperFlex">
        <h2 className="footerName">Travel today</h2>

        <div>
          <a className="socialMedia" href="https://www.facebook.com/">
            FaceBook
          </a>
          <a className="socialMedia" href="https://www.instagram.com">
            Instagram
          </a>
          <a className="socialMedia" href="https://www.youtube.com">
            YouTube
          </a>
          <a className="socialMedia" href="https://www.tiktok.com/">
            TikTok
          </a>
        </div>
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
            <Link to="/gallery" className="footerLink">
              Gallery
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
