import React from "react";
import "./HeroSection.css";
import { Button } from "./Button/Button";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="hero-wrap">
      {/*!video isnt working
       <video controls autoPlay loop muted >
        <source
          src="https://player.vimeo.com/external/337026530.sd.mp4?s=5e1bec41e7e0c227bd70d529f3e9f27d333d561e&profile_id=164&oauth2_token_id=57447761"
         
          type="video/mp4"
        />
        Your browser doesn't support video tag.
      </video> */}
      {/* <video src="/video1.mp4" autoPlay loop muted /> */}
      <h1>Explore</h1>
      <p>Make your dreams come true</p>
      <div className="hero-buttons">
        <Link to="/sign-up" className="btn-mobile">
          <Button
            className="buttons"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Travel
          </Button>
        </Link>
        <a href="https://www.youtube.com/watch?v=N2f-qkQkTu8">
          <Button
            className="buttons"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            Trailer
          </Button>
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
