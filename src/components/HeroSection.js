import React from "react";
import "./HeroSection.css";
import { Button } from "./Button/Button";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="hero-wrap">
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
