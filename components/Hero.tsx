import React from "react";
import "./Hero.css";

export const Hero: React.FC = () => {
  return (
    <section className="hero" id="hero">
      {/* Video Background */}
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/assets/Video-Home.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-text-wrapper">
          {/* Location Label */}
          <div className="hero-label">
            MILANO — PIAZZA CINQUE GIORNATE
          </div>

          {/* Main Headline */}
          <h1 className="hero-headline">
            WELLNESS & FITNESS COWORKING
          </h1>

          {/* Subtitle */}
          <p className="hero-description">
            EQB ridefinisce il modo di lavorare nel benessere psicofisico
          </p>

          {/* Vision Statement */}
          <div className="hero-vision">
            <span>Spazio</span>
            <span className="separator">→</span>
            <span>Relazioni</span>
            <span className="separator">→</span>
            <span>Crescita</span>
          </div>
        </div>
      </div>
    </section>
  );
};
