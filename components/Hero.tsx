import React from "react";
import { CTAButton } from "./CTAButton";
import "./Hero.css";

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <video
        className="hero__video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/assets/Sfondo-Menu-Hamburger.jpg" // Placeholder leggero o meglio nulla se background nero
      >
        <source src="/assets/Video-Home.mp4" type="video/mp4" />
      </video>

      <div className="hero__overlay" />

      <div className="hero__content">
        <span className="hero__label hero__anim hero__anim--1">MILANO</span>
        <h1 className="hero__title hero__anim hero__anim--2">
          WELLNESS &amp; FITNESS COWORKING
        </h1>
        <p className="hero__tagline hero__anim hero__anim--3">
          EQB ridefinisce il modo di lavorare nel benessere psicofisico
        </p>
        <p className="hero__vision hero__anim hero__anim--4">
          Spazio · Relazioni · Crescita
        </p>
        <div className="hero__cta hero__anim hero__anim--5">
          <CTAButton href="#spazio" variant="light">
            SCOPRI →
          </CTAButton>
        </div>
      </div>
    </section>
  );
};
