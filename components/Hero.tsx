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
          Wellness &amp; Fitness Coworking
        </h1>
        <p className="hero__vision hero__anim hero__anim--3">
          Spazio &rarr; Relazioni &rarr; Crescita
        </p>
      </div>
    </section>
  );
};
