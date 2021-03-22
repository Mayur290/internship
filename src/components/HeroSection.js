import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h2>Many reasons to get up and start to get back in the business</h2>
      <p>
        The Harder you work for something, the greater you'll feel when you
        achieve it.
      </p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          LEARN MORE <i className="far fa-play-circle" />
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          DEMO
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
